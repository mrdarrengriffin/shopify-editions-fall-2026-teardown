// Visual part views for Canvas 2D widgets, built from the live draw calls recorded by instrument.js.
const LAB = window.__lab;
const h = (s) => { const t = document.createElement('template'); t.innerHTML = s.trim(); return t.content.firstElementChild; };
const STATE = new Set(['save', 'restore', 'clip', 'setTransform', 'transform', 'translate', 'scale', 'rotate', 'resetTransform', 'setLineDash', 'beginPath', 'moveTo', 'lineTo', 'arc', 'arcTo', 'ellipse', 'bezierCurveTo', 'quadraticCurveTo', 'rect', 'roundRect', 'closePath']);

// replay a frame keeping only draws from `keep(op)`, scaled into a thumbnail context
function replayFiltered(ops, g, scale, keep) {
  g.save();
  for (const op of ops) {
    try {
      if (op.m === 'set') { g[op.k] = op.v; continue; }
      if (STATE.has(op.m)) {
        if (op.m === 'setTransform') { const t = op.a.length === 1 ? op.a[0] : new DOMMatrix(op.a); g.setTransform(new DOMMatrix([t.a, t.b, t.c, t.d, t.e, t.f]).preMultiplySelf(new DOMMatrix([scale, 0, 0, scale, 0, 0]))); }
        else if (op.m === 'resetTransform') g.setTransform(scale, 0, 0, scale, 0, 0);
        else g[op.m](...op.a);
        continue;
      }
      if (!keep(op)) continue;
      g.setTransform(new DOMMatrix([op.t.a, op.t.b, op.t.c, op.t.d, op.t.e, op.t.f]).preMultiplySelf(new DOMMatrix([scale, 0, 0, scale, 0, 0])));
      g[op.m](...op.a);
    } catch { /* released source */ }
  }
  g.restore();
}

// Live "exploded" layer stack: one thumbnail per layer, rebuilt from the real frame. Click to hide that layer in the widget.
export function layerStack(canvas, { classify, layers, overlays = {} }) {
  const rec = LAB.attach(canvas, { classify });
  const box = h(`<div class="stack"><div class="stack-head"><b>Layers</b><span class="hint">each tile is rebuilt from the widget's real draw calls · click to hide it in the live widget</span><button data-a="all">show all</button></div><div class="stack-grid"></div></div>`);
  const grid = box.querySelector('.stack-grid');
  const tiles = layers.map((L) => {
    const t = h(`<button class="tile" style="--c:${L.colour}"><canvas></canvas><span><i></i>${L.label}<em>0</em></span><small>${L.note || ''}</small></button>`);
    t.onclick = () => { rec.hidden.has(L.id) ? rec.hidden.delete(L.id) : rec.hidden.add(L.id); t.classList.toggle('off', rec.hidden.has(L.id)); };
    grid.appendChild(t);
    return { L, t, c: t.querySelector('canvas') };
  });
  // composite tile at the start
  const comp = h(`<button class="tile comp"><canvas></canvas><span>All layers = the frame</span></button>`); grid.prepend(comp);
  box.querySelector('[data-a=all]').onclick = () => { rec.hidden.clear(); tiles.forEach(({ t }) => t.classList.remove('off')); };
  let last = 0;
  const tick = (now) => {
    if (!box.isConnected) { if (box.dataset.started) return; return requestAnimationFrame(tick); }
    box.dataset.started = 1;
    if (now - last > 90 && rec.last.length && !LAB.frozen) {
      last = now;
      const W = 260, s = W / canvas.width, H = Math.round(canvas.height * s);
      const draw = (c, keep, ov) => { if (c.width !== W) { c.width = W; c.height = H; } const g = c.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, W, H); const keepRec = canvas.__labRec; replayFiltered(rec.last, g, s, keep); if (ov) ov(g, s, rec.last); };
      draw(comp.querySelector('canvas'), (op) => !!op.layer);
      tiles.forEach(({ L, t, c }) => { draw(c, (op) => op.layer === L.id, overlays[L.id]); t.querySelector('em').textContent = rec.lastCounts[L.id] || 0; });
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  return { box, rec };
}

// draw clip polygons recorded in a frame onto a thumbnail
export function clipOverlay(colour = '#4ce0a1') {
  return (g, s, ops) => {
    g.setTransform(1, 0, 0, 1, 0, 0); g.strokeStyle = colour; g.lineWidth = 1.2; g.setLineDash([3, 2]);
    ops.filter((o) => o.m === 'clip').forEach((o) => { const pts = LAB.pathPoints(o.path || []); g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x * s, y * s) : g.moveTo(x * s, y * s))); g.closePath(); g.stroke(); });
    g.setLineDash([]);
  };
}
export function quadOverlay(colour, pick) {
  return (g, s, ops) => {
    g.setTransform(1, 0, 0, 1, 0, 0); g.strokeStyle = colour; g.lineWidth = 1;
    ops.filter(pick).forEach((o) => { const q = LAB.opQuad(o); if (!q) return; g.beginPath(); q.forEach(([x, y], i) => (i ? g.lineTo(x * s, y * s) : g.moveTo(x * s, y * s))); g.closePath(); g.stroke(); });
  };
}

// Sprite atlas observer: boxes every source rect the widget samples, highlights the ones in the current frame,
// and crops each currently-drawn sprite so you can watch the walk cycles tick.
export function atlasObserver(rec, { isAtlas, isShadowSheet }) {
  const box = h(`<div class="atlas"><div class="stack-head"><b>Sprite atlas</b><span class="hint">the real sheet · boxes = every frame rect the widget has sampled · bright = in this frame</span></div>
    <div class="atlas-row"><canvas class="sheet"></canvas><div class="now"><b>Drawing right now</b><div class="crops"></div><b>Shadow sheet <small>(generated at load: atlas filled navy with source-in)</small></b><canvas class="shadow"></canvas></div></div></div>`);
  const sheet = box.querySelector('.sheet'), crops = box.querySelector('.crops'), shadow = box.querySelector('.shadow');
  const seen = new Map();
  let img = null, shadowSrc = null, last = 0;
  const tick = (now) => {
    if (!box.isConnected && box.dataset.started) return;
    if (box.isConnected) box.dataset.started = 1;
    if (now - last > 100 && rec.last.length && !LAB.frozen) {
      last = now;
      const cur = [];
      rec.last.forEach((op) => {
        if (op.m !== 'drawImage' || op.a.length < 9) return;
        if (isAtlas(op)) { img = op.a[0]; const k = op.a.slice(1, 5).map(Math.round).join(','); seen.set(k, (seen.get(k) || 0) + 1); cur.push(op); }
        else if (isShadowSheet(op)) shadowSrc = op.a[0];
      });
      if (img && img.naturalWidth) {
        const W = Math.min(900, box.clientWidth * 0.62 || 640), s = W / img.naturalWidth;
        sheet.width = W; sheet.height = img.naturalHeight * s;
        const g = sheet.getContext('2d'); g.drawImage(img, 0, 0, W, sheet.height);
        g.lineWidth = 1; g.strokeStyle = 'rgba(255,207,92,.35)';
        seen.forEach((_, k) => { const [x, y, w, hh] = k.split(',').map(Number); g.strokeRect(x * s, y * s, w * s, hh * s); });
        g.strokeStyle = '#ff3d71'; g.lineWidth = 2;
        cur.forEach((op) => g.strokeRect(op.a[1] * s, op.a[2] * s, op.a[3] * s, op.a[4] * s));
        g.fillStyle = '#fff'; g.font = '11px ui-monospace, monospace'; g.fillText(`${seen.size} distinct frames sampled so far`, 8, sheet.height - 8);
        // crops
        while (crops.children.length < cur.length) crops.appendChild(document.createElement('canvas'));
        [...crops.children].forEach((c, i) => {
          const op = cur[i]; c.hidden = !op; if (!op) return;
          const [, sx, sy, sw, sh] = op.a, hgt = 120, wdt = Math.max(30, (sw / sh) * hgt);
          c.width = wdt; c.height = hgt; const cg = c.getContext('2d'); cg.clearRect(0, 0, wdt, hgt);
          const flip = op.t.a < 0; cg.save(); if (flip) { cg.translate(wdt, 0); cg.scale(-1, 1); } cg.drawImage(img, sx, sy, sw, sh, 0, 0, wdt, hgt); cg.restore();
          c.title = `src rect ${[sx, sy, sw, sh].map(Math.round).join(', ')}${flip ? ' · mirrored' : ''}`;
        });
      }
      if (shadowSrc) { const W = 260, s = W / shadowSrc.width; shadow.width = W; shadow.height = shadowSrc.height * s; const g = shadow.getContext('2d'); g.fillStyle = '#c9cff5'; g.fillRect(0, 0, W, shadow.height); g.drawImage(shadowSrc, 0, 0, W, shadow.height); }
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  return box;
}
