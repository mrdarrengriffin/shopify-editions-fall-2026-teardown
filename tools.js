// Lab UI tools: source viewer, Canvas2D frame debugger, WebGPU inspector, guided tour.
// The source viewer shows slices of the local prettified files (src-pretty/) fetched at runtime.
const LAB = window.__lab;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };

// ---------------- source viewer ----------------
const fileCache = new Map();
export async function loadFile(file) {
  if (!fileCache.has(file)) fileCache.set(file, fetch('./shop/' + file).then((r) => (r.ok ? r.text() : Promise.reject(new Error(`${file}: ${r.status}`)))));
  return fileCache.get(file);
}
const KW = /\b(const|let|var|function|return|if|else|for|while|of|in|new|class|async|await|this|true|false|null|undefined|fn|struct|vec2f|vec3f|vec4f|f32|u32|i32|mat4x4f|mat3x3f|@vertex|@fragment|@compute|@group|@binding|@location|@builtin|var<uniform>|override|select|mix|clamp|smoothstep|normalize|dot|cross|length|textureSample)\b/g;
function highlight(line) {
  // tokenise so strings/comments/numbers/keywords never overlap
  const out = []; const re = /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)?(?:e[-+]?\d+)?\b)|([A-Za-z_$@][\w$<>]*)|([\s\S])/g;
  let m;
  while ((m = re.exec(line))) {
    if (m[1]) out.push(`<span class="c">${esc(m[1])}</span>`);
    else if (m[2]) out.push(`<span class="s">${esc(m[2])}</span>`);
    else if (m[3]) out.push(`<span class="n">${esc(m[3])}</span>`);
    else if (m[4]) out.push(KW.test(m[4]) ? `<span class="k">${esc(m[4])}</span>` : esc(m[4])), (KW.lastIndex = 0);
    else out.push(esc(m[5]));
  }
  return out.join('');
}
export async function sourceView(file, from, to, { mark = [] } = {}) {
  const box = h(`<figure class="srcview"><figcaption><span>${esc(file)} <b>L${from}–${to}</b></span><a href="/${esc(file)}" target="_blank" rel="noopener">open file</a></figcaption><pre><code>loading…</code></pre></figure>`);
  loadFile(file).then((text) => {
    const lines = text.split('\n').slice(from - 1, to);
    box.querySelector('code').innerHTML = lines.map((l, i) => `<span class="ln${mark.includes(from + i) ? ' hl' : ''}"><i>${from + i}</i>${highlight(l) || ' '}</span>`).join('\n');
  }).catch((e) => (box.querySelector('code').textContent = e.message));
  return box;
}

// ---------------- Canvas2D frame debugger ----------------
// layers: [{id, label, colour}] ids must match classify() output. outlines: which overlays are available.
export function canvasDebugger(host, { name, classify, layers, outlines = [] }) {
  const panel = h(`<div class="dbg">
    <div class="dbg-row"><b>Layers</b><span class="hint">live draw calls per frame · click to hide · alt-click to solo</span></div>
    <div class="dbg-layers"></div>
    <div class="dbg-row"><b>Overlays</b><span class="dbg-outl"></span></div>
    <div class="dbg-row"><b>Frame</b><button data-a="freeze">Freeze</button><button data-a="step">Step</button><input type="range" min="0" max="0" value="0" data-a="scrub" disabled aria-label="Draw call scrubber"><span class="dbg-op mono"></span></div>
    <ol class="dbg-ops mono"></ol></div>`);
  let rec = null, canvas = null, overlay = null, scrubbing = false, ops = [];
  const on = new Set(outlines.filter((o) => o.default).map((o) => o.id));
  const layerBox = panel.querySelector('.dbg-layers');
  layers.forEach((L) => {
    const b = h(`<button class="lay" data-l="${esc(L.id)}" style="--c:${L.colour}"><i></i><span>${esc(L.label)}</span><em>0</em></button>`);
    b.addEventListener('click', (e) => {
      if (!rec) return;
      if (e.altKey) rec.solo = rec.solo === L.id ? null : L.id;
      else rec.hidden.has(L.id) ? rec.hidden.delete(L.id) : rec.hidden.add(L.id);
      sync();
    });
    layerBox.appendChild(b);
  });
  const outl = panel.querySelector('.dbg-outl');
  outlines.forEach((o) => { const b = h(`<label><input type="checkbox" ${on.has(o.id) ? 'checked' : ''}> ${esc(o.label)}</label>`); b.querySelector('input').onchange = (e) => { e.target.checked ? on.add(o.id) : on.delete(o.id); }; outl.appendChild(b); });
  const sync = () => panel.querySelectorAll('.lay').forEach((b) => { const id = b.dataset.l; b.classList.toggle('off', rec?.hidden.has(id) || (rec?.solo && rec.solo !== id)); b.classList.toggle('solo', rec?.solo === id); });

  const api = {
    panel,
    attach(c) {
      canvas = c; rec = LAB.attach(c, { name, classify });
      overlay = document.createElement('canvas'); overlay.className = 'dbg-overlay';
      c.parentElement.appendChild(overlay);
      const fit = () => { overlay.width = c.width; overlay.height = c.height; overlay.style.cssText = `position:absolute;left:${c.offsetLeft}px;top:${c.offsetTop}px;width:${c.offsetWidth}px;height:${c.offsetHeight}px;pointer-events:none;z-index:5`; };
      new ResizeObserver(fit).observe(c); fit();
      loop();
    },
    set(hidden = [], solo = null, outlinesOn) { if (!rec) return; rec.hidden = new Set(hidden); rec.solo = solo; if (outlinesOn) { on.clear(); outlinesOn.forEach((o) => on.add(o)); outl.querySelectorAll('input').forEach((inp, i) => (inp.checked = on.has(outlines[i].id))); } sync(); },
    get recorder() { return rec; },
  };
  // overlay drawing for the most recent complete frame
  function drawOverlay(frameOps, upto = Infinity) {
    const g = overlay.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, overlay.width, overlay.height);
    const dpr = 1; g.lineWidth = 1.2 * dpr;
    frameOps.forEach((op, i) => {
      if (i >= upto || !op.layer) return;
      for (const o of outlines) {
        if (!on.has(o.id) || !o.match(op)) continue;
        const q = op.m === 'clip' ? LAB.pathPoints(op.path || []) : LAB.opQuad(op);
        if (!q || q.length < 2) continue;
        g.strokeStyle = o.colour; g.setLineDash(o.dash || []); g.beginPath(); q.forEach(([x, y], k) => (k ? g.lineTo(x, y) : g.moveTo(x, y))); if (o.close !== false) g.closePath(); g.stroke();
        if (o.tag) { g.fillStyle = o.colour; g.font = `${11 * dpr}px ui-monospace, monospace`; g.fillText(o.tag(op), q[0][0] + 3, q[0][1] - 3); }
      }
    });
  }
  // include clip ops in overlay matching
  function frameWithClips() { return (rec.last || []).map((op) => (op.m === 'clip' ? { ...op, layer: 'clip' } : op)); }
  function loop() {
    if (!document.body.contains(panel)) return;
    if (rec && !scrubbing) {
      const counts = rec.lastCounts || {};
      panel.querySelectorAll('.lay').forEach((b) => (b.querySelector('em').textContent = counts[b.dataset.l] || 0));
      if (overlay) drawOverlay(frameWithClips());
    }
    requestAnimationFrame(loop);
  }
  // freeze / step / scrub
  const scrub = panel.querySelector('[data-a=scrub]'), opLabel = panel.querySelector('.dbg-op'), list = panel.querySelector('.dbg-ops');
  panel.querySelector('[data-a=freeze]').onclick = (e) => {
    const freeze = !LAB.frozen; LAB.freeze(freeze); e.target.textContent = freeze ? 'Resume' : 'Freeze';
    scrub.disabled = !freeze; scrubbing = false;
    if (freeze && rec) {
      ops = frameWithClips(); const draws = ops.map((o, i) => [o, i]).filter(([o]) => o.layer && o.layer !== 'clip');
      scrub.max = draws.length; scrub.value = draws.length; scrub._draws = draws;
      list.innerHTML = draws.map(([o], i) => `<li data-i="${i}" style="--c:${(layers.find((l) => l.id === o.layer) || {}).colour || '#888'}">${i + 1}. ${esc(o.m)} <b>${esc(o.layer)}</b> ${o.src ? esc(o.src) : ''}${o.filter && o.filter !== 'none' ? ' · filter ' + esc(o.filter) : ''}${o.comp !== 'source-over' ? ' · ' + esc(o.comp) : ''}${o.alpha !== 1 ? ' · α' + (+o.alpha).toFixed(2) : ''}${o.clip ? ' · clipped' : ''}</li>`).join('');
      list.querySelectorAll('li').forEach((li) => (li.onclick = () => { scrub.value = +li.dataset.i + 1; scrub.oninput(); }));
    } else list.innerHTML = '';
  };
  panel.querySelector('[data-a=step]').onclick = () => { LAB.step(); panel.querySelector('[data-a=freeze]').textContent = 'Resume'; scrub.disabled = false; setTimeout(() => panel.querySelector('[data-a=freeze]').onclick({ target: panel.querySelector('[data-a=freeze]') }) || null, 0); };
  scrub.oninput = () => {
    if (!rec || !scrub._draws) return;
    scrubbing = true;
    const n = +scrub.value, draws = scrub._draws, upto = n ? draws[n - 1][1] + 1 : 0;
    // replay ops[0..upto) into the real canvas so you see the frame being built call by call
    const g = canvas.getContext('2d'), saved = rec.hidden; rec.hidden = new Set(); const keepRec = canvas.__labRec; delete canvas.__labRec;
    g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, canvas.width, canvas.height); g.restore();
    LAB.replay(ops, g, upto);
    canvas.__labRec = keepRec; rec.hidden = saved;
    drawOverlay(ops, upto);
    const cur = n ? draws[n - 1][0] : null;
    if (cur) { const q = LAB.opQuad(cur); const og = overlay.getContext('2d'); if (q) { og.setLineDash([]); og.strokeStyle = '#ff3d71'; og.lineWidth = 2; og.beginPath(); q.forEach(([x, y], k) => (k ? og.lineTo(x, y) : og.moveTo(x, y))); og.closePath(); og.stroke(); } }
    opLabel.textContent = `${n} / ${draws.length}${cur ? ' · ' + cur.m + ' → ' + cur.layer : ''}`;
    list.querySelectorAll('li').forEach((li, i) => li.classList.toggle('cur', i === n - 1));
    list.querySelector('li.cur')?.scrollIntoView({ block: 'nearest' });
  };
  return api;
}

// ---------------- WebGPU inspector ----------------
export function gpuPanel({ decode = {}, filter = () => true, lab } = {}) {
  const G = (lab || LAB).gpu;
  const panel = h(`<div class="dbg gpu">
    <div class="dbg-row"><b>Pipelines</b><span class="hint">draw calls this frame · click to skip its draws</span></div><div class="gpu-pipes"></div>
    <div class="dbg-row"><b>Uniforms</b><span class="hint">latest writeBuffer contents, decoded</span></div><div class="gpu-unis mono"></div>
    <div class="dbg-row"><b>Shaders</b><span class="hint">WGSL as compiled (★ = patched by the lab)</span></div><div class="gpu-shaders"></div></div>`);
  if (!G) { panel.innerHTML = '<p class="hint">No WebGPU in this browser.</p>'; return { panel }; }
  const pipes = panel.querySelector('.gpu-pipes'), unis = panel.querySelector('.gpu-unis'), shaders = panel.querySelector('.gpu-shaders');
  const seen = new Set();
  let shown = false;
  function render() {
    if (document.body.contains(panel)) shown = true;
    else if (shown) return; // removed from the page: stop
    else return void setTimeout(render, 100); // not inserted yet
    const list = G.pipelines.filter(filter);
    pipes.innerHTML = list.map((p) => { const d = G.lastDraws[p.label] || { calls: 0, verts: 0, inst: 0 }; return `<button class="pipe ${G.hidden.has(p.label) ? 'off' : ''}" data-p="${esc(p.label)}"><span>${esc(p.label)}</span><em>${d.calls} draw${d.calls === 1 ? '' : 's'} · ${d.verts.toLocaleString()} ${d.inst > d.calls ? 'verts × ' + d.inst + ' inst' : 'verts'}</em><small>${p.samples}× MSAA · depth ${esc(p.depth)}${p.blend ? ' · blended' : ''}</small></button>`; }).join('') || '<p class="hint">waiting for pipelines…</p>';
    pipes.querySelectorAll('.pipe').forEach((b) => (b.onclick = () => { const l = b.dataset.p; G.hidden.has(l) ? G.hidden.delete(l) : G.hidden.add(l); }));
    const rows = [];
    G.buffers.forEach((b) => { const dec = Object.entries(decode).find(([, d]) => d.match(b)); if (!dec && !Object.keys(decode).length) return; if (dec) rows.push(`<div class="uni"><b>${esc(dec[0])}</b>${dec[1].show(b.data)}</div>`); });
    unis.innerHTML = rows.join('') || '<p class="hint">no matching uniform buffers yet</p>';
    G.modules.forEach((m, i) => { if (seen.has(m) || !filter({ label: m.label, module: m })) return; seen.add(m); const d = h(`<details><summary>${m.patched ? '★ ' : ''}${esc(m.label)} <em>${m.code.split('\n').length} lines</em></summary><pre class="code"></pre></details>`); d.querySelector('pre').textContent = m.code; shaders.appendChild(d); });
    setTimeout(() => requestAnimationFrame(render), 250);
  }
  render();
  return { panel };
}

// ---------------- guided tour ----------------
// steps: [{title, body (html), src:{file, from, to, mark}, apply: fn(ctx)}]
export function tour(container, steps, ctx = {}) {
  const box = h(`<div class="tour"><div class="tour-nav"><button data-a="prev" aria-label="Previous step">←</button><span class="tour-count mono"></span><button data-a="next" aria-label="Next step">→</button></div><ol class="tour-list"></ol><div class="tour-body"></div></div>`);
  const list = box.querySelector('.tour-list'), body = box.querySelector('.tour-body'), count = box.querySelector('.tour-count');
  steps.forEach((s, i) => { const li = h(`<li><button>${esc(s.title)}</button></li>`); li.querySelector('button').onclick = () => go(i); list.appendChild(li); });
  let cur = -1;
  async function go(i) {
    cur = Math.max(0, Math.min(steps.length - 1, i));
    const s = steps[cur];
    list.querySelectorAll('li').forEach((li, k) => { li.classList.toggle('cur', k === cur); li.classList.toggle('done', k < cur); });
    count.textContent = `${cur + 1} / ${steps.length}`;
    body.innerHTML = `<h4>${cur + 1}. ${esc(s.title)}</h4><div class="tour-text">${s.body}</div>`;
    for (const src of [].concat(s.src || [])) body.appendChild(await sourceView(src.file, src.from, src.to, { mark: src.mark || [] }));
    try { s.apply?.(ctx); } catch (e) { console.warn('tour apply', e); }
  }
  box.querySelector('[data-a=prev]').onclick = () => go(cur - 1);
  box.querySelector('[data-a=next]').onclick = () => go(cur + 1);
  container.appendChild(box);
  go(0);
  return { go };
}

export const findCanvas = (host, pred = () => true) => new Promise((res) => {
  const pick = () => [...host.querySelectorAll('canvas')].find((c) => !c.classList.contains('dbg-overlay') && pred(c));
  const c = pick(); if (c) return res(c);
  const mo = new MutationObserver(() => { const c2 = pick(); if (c2) { mo.disconnect(); res(c2); } });
  mo.observe(host, { childList: true, subtree: true });
});
