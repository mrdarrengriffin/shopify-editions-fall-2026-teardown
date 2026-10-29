// Fall '26 lab: real widgets, pulled apart visually.
import { MOD, stageProps, islandProps, fragmentProps, mountReal } from './runtime.js';
import { layerStack, atlasObserver, clipOverlay, quadOverlay } from './stack.js';
import { loadGlb, meshViewer } from './viewer.js';

const LAB = window.__lab;
const $ = (s, r = document) => r.querySelector(s);
const h = (s) => { const t = document.createElement('template'); t.innerHTML = s.trim(); return t.content.firstElementChild; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const status = (id, msg, bad) => { const s = $(`[data-status="${id}"]`); if (s) { s.textContent = msg; s.classList.toggle('bad', !!bad); } };
const findCanvas = (host) => new Promise((res) => { const pick = () => [...host.querySelectorAll('canvas')][0]; const c = pick(); if (c) return res(c); const mo = new MutationObserver(() => { const c2 = pick(); if (c2) { mo.disconnect(); res(c2); } }); mo.observe(host, { childList: true, subtree: true }); });
const PRODUCTS = [['Instant camera', '63862047674286025ecfd47299409384'], ['Mushroom lamp', '01a19c36bdf203ffdd184f131e009f69'], ['Dutch oven', '4f1440c14d0b1a908ce40a7d20d3aaf4'], ['Portable radio', 'b5c02ef3e879e5ec2a98b3bdde10b9a9']].map(([n, x]) => [n, `https://cdn.shopify.com/b/shopify-brochure2-assets/${x}.glb`]);
const SOCK_GLB = 'https://cdn.shopify.com/b/shopify-brochure2-assets/8a9ad3fd4eb3977ea5d2a2cb3c71fab5.glb';

// ---------- shared: generic classifier for any 2D widget ----------
const GENERIC_LAYERS = [
  { id: 'images', label: 'Images / sprites', colour: '#ffcf5c' },
  { id: 'knockouts', label: 'Knock-outs (destination-out)', colour: '#ff7a59', note: 'holes punched so lines don’t show through' },
  { id: 'fills', label: 'Fills', colour: '#4ce0a1' },
  { id: 'strokes', label: 'Lines', colour: '#8e9dff' },
  { id: 'text', label: 'Text', colour: '#ffffff' },
];
function genericClassify(op) {
  if (op.comp === 'destination-out') return 'knockouts';
  if (op.m === 'drawImage') return 'images';
  if (op.m === 'fillText' || op.m === 'strokeText') return 'text';
  if (op.m === 'stroke' || op.m === 'strokeRect') return 'strokes';
  if (op.m === 'clearRect') return null;
  return 'fills';
}

const started = {};
const starters = {
  // ---------------- Expo mode ----------------
  async expo() {
    // copy the inspector so it can be pasted into DevTools on shopify.com (the API only exists there)
    const code = await (await fetch('./expo-inspector.min.js')).text();
    $('#copy-inspector').onclick = async () => {
      try { await navigator.clipboard.writeText(code); $('#copy-state').textContent = `copied (${(code.length / 1024).toFixed(1)} KB)`; }
      catch { $('#copy-state').textContent = 'copy failed: open /lab/expo-inspector.min.js and copy it by hand'; }
    };
    $('#bookmarklet').href = `javascript:(()=>{const s=document.createElement('script');s.src='${location.origin}/lab/expo-inspector.min.js?'+Date.now();document.head.appendChild(s)})()`;
    $('#expo-curl').appendChild(curlDiagram(window));
    $('#rail-parts').innerHTML = [
      ['The rack', '300 × 380 px, treated as 1.8 m tall, so about 211 px per metre. Seven garments per rack, four racks and a mannequin per side.'],
      ['The garments', 'Hand-drawn 2D outlines (tee, Oxford shirt, linen dress, wool coat, chinos), resampled every 18 px, ear-clipped into triangles and subdivided until no edge is longer than 44 px.'],
      ['Slide', 'The page curls, so the rail tilts. A garment slides when the slope beats friction 0.35, plus a kick from your scroll acceleration.'],
      ['Swing', 'A damped pendulum around the slope (stiffness 19.6, damping 1.6), pushed by the rail’s acceleration.'],
      ['Hem lag', 'A stiffer spring that trails the swing, which is what makes a stiff outline read as cloth.'],
      ['Twist', 'Springs back to zero unless you’re holding it. Drag sideways to twist; tap to flick.'],
      ['Bumping', 'Neighbours keep a twist-aware gap, push each other along the rail and share velocity when hems collide.'],
      ['Drawn as', 'Black fills that hide the white wireframe behind them. No lighting; hover shows a price pill.'],
    ].map(([t, d]) => `<div class="part"><b>${t}</b><p>${d}</p></div>`).join('');
  },
  // ---------------- hero ----------------
  async hero() {
    $('#p-hero iframe').src = './shop/';
    const g = await (await fetch('./editions/fall2026/graph-data')).json();
    const nodes = g.nodes, edges = g.edges;
    const types = [...new Set(nodes.map((n) => n.type))];
    const col = { section: '#8e9dff', update: '#4252cf', product: '#ffcf5c', theme: '#4ce0a1', outcome: '#ff7a59', persona: '#c06bff' };
    $('#hero-stats').innerHTML = `<h3>The payload</h3><div class="kv">${types.map((t) => `<span><i class="dot" style="background:${col[t] || '#888'}"></i>${t}</span><b>${nodes.filter((n) => n.type === t).length}</b>`).join('')}<span>edges</span><b>${edges.length} (${[...new Set(edges.map((e) => e.type))].map((t) => `${edges.filter((e) => e.type === t).length} ${t}`).join(', ')})</b></div>
      <p class="hint">The left diagram draws the whole payload as a plain radial tree: each section, its updates, and the concept nodes (themes, outcomes, personas, products) those updates link to. The hero only shows sections and updates until you click into one.</p>`;
    // static radial map of the real data
    const c = h('<canvas class="graphmap"></canvas>'); $('#hero-graph').appendChild(c);
    const W = 760, H = 560; c.width = W * 2; c.height = H * 2; const x = c.getContext('2d'); x.scale(2, 2);
    const secs = nodes.filter((n) => n.type === 'section'), pos = new Map();
    secs.forEach((s, i) => { const a = -Math.PI / 2 + (i / secs.length) * Math.PI * 2; pos.set(s.id, [W / 2 + Math.cos(a) * 170, H / 2 + Math.sin(a) * 160, a]); });
    edges.filter((e) => e.type === 'contains').forEach((e, i) => { const p = pos.get(e.source); if (!p) return; const kids = edges.filter((f) => f.source === e.source && f.type === 'contains'); const k = kids.indexOf(e); const a = p[2] + (k / kids.length - 0.5) * 1.4, r = 48 + (k % 3) * 14; pos.set(e.target, [p[0] + Math.cos(a) * r, p[1] + Math.sin(a) * r]); });
    const concepts = nodes.filter((n) => !['section', 'update'].includes(n.type)); concepts.forEach((n, i) => { const a = (i / concepts.length) * Math.PI * 2; pos.set(n.id, [W / 2 + Math.cos(a) * 265, H / 2 + Math.sin(a) * 255]); });
    x.globalAlpha = 0.06; x.strokeStyle = '#8e9dff'; edges.filter((e) => e.type !== 'contains').forEach((e) => { const a = pos.get(e.source), b = pos.get(e.target); if (a && b) { x.beginPath(); x.moveTo(a[0], a[1]); x.lineTo(b[0], b[1]); x.stroke(); } });
    x.globalAlpha = 0.5; edges.filter((e) => e.type === 'contains').forEach((e) => { const a = pos.get(e.source), b = pos.get(e.target); if (a && b) { x.beginPath(); x.moveTo(a[0], a[1]); x.lineTo(b[0], b[1]); x.stroke(); } });
    x.globalAlpha = 1;
    nodes.forEach((n) => { const p = pos.get(n.id); if (!p) return; x.fillStyle = col[n.type] || '#888'; const r = n.type === 'section' ? 5 : n.type === 'update' ? 1.8 : 2.4; n.type === 'section' ? x.fillRect(p[0] - r, p[1] - r, r * 2, r * 2) : (x.beginPath(), x.arc(p[0], p[1], r, 0, 7), x.fill()); });
    x.fillStyle = '#e9ecff'; x.font = '11px ui-monospace, monospace'; secs.forEach((s) => { const p = pos.get(s.id); x.fillText(s.label, p[0] + 8, p[1] - 6); });
  },
  // ---------------- plaza ----------------
  async plaza() {
    const host = $('#room-host'), props = await stageProps('room');
    await mountReal('room', host, { strings: props.strings, locale: 'en' });
    status('plaza', 'mountRoom running · hover a shopper and rest to drive them · click to focus · Next for home/store');
    const canvas = await findCanvas(host);
    const isScene = (s) => /room-story-(plaza|home|store)/.test(s);
    const layers = [
      { id: 'background', label: 'Background painting', colour: '#7f8cff', note: 'one JPG: the whole world' },
      { id: 'shadows', label: 'Shadows', colour: '#c06bff', note: 'tinted sheet, sheared' },
      { id: 'sprites', label: 'People (sprites)', colour: '#ffcf5c', note: 'cut from the sheet below' },
      { id: 'occluders', label: 'Tree cut-outs', colour: '#4ce0a1', note: 'background redrawn inside each tree outline' },
      { id: 'wash', label: 'Focus wash', colour: '#ff7a59', note: 'grey, navy and vignette when you click someone' },
      { id: 'ui', label: 'Indicators, card, radar', colour: '#ffffff', note: 'all drawn in canvas, no DOM' },
    ];
    const classify = (op) => {
      if (op.m === 'drawImage') { if (isScene(op.src)) return op.clip ? 'occluders' : 'background'; if (op.src.startsWith('canvas')) return 'shadows'; if (/atlas|1742623db5/.test(op.src)) return 'sprites'; return 'ui'; }
      if (op.m === 'clearRect') return null;
      if (op.m === 'fillRect' && (op.comp === 'saturation' || (op.a[0] === 0 && op.a[1] === 0))) return 'wash';
      return 'ui';
    };
    const st = layerStack(canvas, { classify, layers, overlays: { occluders: clipOverlay(), shadows: quadOverlay('#c06bff', (o) => o.layer === 'shadows'), sprites: quadOverlay('rgba(255,207,92,.8)', (o) => o.layer === 'sprites') } });
    $('#room-stack').appendChild(st.box);
    $('#room-atlas').appendChild(atlasObserver(st.rec, { isAtlas: (op) => /atlas|1742623db5/.test(op.src), isShadowSheet: (op) => op.src.startsWith('canvas') }));
    const A = await import(MOD.roomAssets);
    Object.values(A).filter((v) => typeof v === 'string' && /room-story-(plaza|home|store)|buy-with-shop/.test(v)).forEach((u) => { const n = u.split('./shop/').pop().split('?')[0]; $('#room-layers').appendChild(h(`<figure class="layer"><img loading="lazy" alt="${esc(n)}" src="${u}"><figcaption>${esc(n)}</figcaption></figure>`)); });
  },
  // ---------------- sock ----------------
  async sock() {
    if (!navigator.gpu) { status('sock', 'This browser has no WebGPU, so the real sock engine won’t mount.', true); }
    const merch = await islandProps('MerchWidget'), specs = merch.presentation?.specs ?? [];
    let canvas = $('#sock-canvas'), scene = null, ac = null;
    const svg = $('#sock-svg');
    const onFrame = (f) => {
      if (!f?.rings || !$('#sock-rings').checked) { svg.innerHTML = ''; return; }
      svg.setAttribute('viewBox', `0 0 ${canvas.clientWidth} ${canvas.clientHeight}`);
      let out = '';
      f.rings.forEach((ring) => { for (let k = 1; k < ring.length; k++) { const a = ring[k - 1], b = ring[k]; out += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" class="${a.depth > 0 ? 'front' : 'back'}"/>`; } });
      (f.anchors || []).forEach((p, i) => { if (Number.isFinite(p?.x)) out += `<circle cx="${p.x}" cy="${p.y}" r="4" class="anchor" opacity="${p.depth > -0.1 ? 1 : 0.3}"/><text x="${p.x + 7}" y="${p.y - 6}" class="alabel">${esc(specs[i]?.label ?? '')}</text>`; });
      svg.innerHTML = out;
    };
    const remount = async () => {
      if (!navigator.gpu) return;
      const pose = scene?.getPose?.(); ac?.abort();
      const fresh = canvas.cloneNode(); canvas.replaceWith(fresh); canvas = fresh;
      ac = new AbortController();
      const { mountSockScene } = await import(MOD.sock);
      scene = await mountSockScene(canvas, ac.signal, SOCK_GLB, specs, onFrame, () => {});
      if (pose) scene?.setPose(pose); scene?.setHeld(false);
    };
    // shader stages: swap the final colour for one of the shader's own values
    const MODES = [
      ['Final', null, 'what ships'],
      ['Normals', 'return vec4f(normal * 0.5 + 0.5, 1.0);', 'after the knit bumps them'],
      ['Stitch grid', 'return vec4f(fract(mix(footStitch, legStitch, onLeg)), onLeg, 1.0);', 'each cell = one stitch'],
      ['Leg / foot', 'return vec4f(vec3f(onLeg), 1.0);', 'two tubes, blended at the ankle'],
      ['Knit height', 'return vec4f(vec3f(height), 1.0);', 'the jersey V pattern'],
      ['Detail fade', 'return vec4f(vec3f(detail), 1.0);', 'dark = stitches too small, faded out'],
      ['Print mask', 'return vec4f(vec3f(art), 1.0);', 'artwork placed without UVs'],
      ['Occlusion', 'return vec4f(vec3f(occlusion), 1.0);', 'shadow in the stitch grooves'],
      ['Albedo', 'return vec4f(srgb(albedo), 1.0);', 'base colour before light'],
      ['Ambient', 'return vec4f(srgb(vec3f(ambient)), 1.0);', 'soft room light'],
      ['Key light', 'return vec4f(srgb(neutral(keyLight)), 1.0);', 'warm, upper right'],
      ['Rim light', 'return vec4f(srgb(neutral(rimLight * 3.0)), 1.0);', 'cool, from behind (×3)'],
      ['Sheen', 'return vec4f(srgb(neutral(cloth * 3.0)), 1.0);', 'fuzzy fabric glow (×3)'],
    ];
    let mode = 'Final';
    LAB.gpu?.shaderPatches.push((code) => { if (!/LEG_WALES/.test(code)) return code; const m = MODES.find(([n]) => n === mode); return m?.[1] ? code.replace(/return vec4f\(srgb\(neutral\(color\)\), 1\.0\);/, m[1]) : code; });
    const box = $('#sock-modes');
    MODES.forEach(([n, , d]) => { const b = h(`<button aria-pressed="${n === mode}"><b>${n}</b><small>${d}</small></button>`); b.onclick = async () => { mode = n; box.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b)); await remount(); }; box.appendChild(b); });
    await remount();
    if (scene) status('sock', 'mountSockScene running · real sock.glb + sock.wgsl · drag to spin');
    $('#sock-hold').onclick = (e) => { const v = e.currentTarget.getAttribute('aria-pressed') !== 'true'; e.currentTarget.setAttribute('aria-pressed', v); scene?.setHeld(v); };
    $('#sock-reset').onclick = () => scene?.setPose({ yaw: -0.3, pitch: 0.18 });
    $('#sock-side').onclick = () => scene?.setPose({ yaw: Math.PI / 2, pitch: 0.05 });
    // raw mesh
    const model = await loadGlb(SOCK_GLB);
    const mv = meshViewer($('#sock-mesh'), model, { mode: 'wireframe', label: false });
    const tris = model.pieces.reduce((s, p) => s + p.idx.length / 3, 0), verts = model.pieces.reduce((s, p) => s + p.pos.length / 3, 0);
    $('#sock-mesh-info').textContent = `${verts.toLocaleString()} vertices · ${tris.toLocaleString()} triangles · ${(model.bytes / 1024).toFixed(0)} KB after gunzip · ${model.extensions.join(', ')} · no UVs, no materials`;
    modeButtons($('#sock-mesh-ctl'), mv, ['wireframe', 'clay', 'normals'], 'wireframe');
    // print artwork (alpha-only PNG) on a checkerboard
    ['https://cdn.shopify.com/s/files/1/0762/1885/9705/files/text-sock.png', merch.poster?.url].filter(Boolean).forEach((u) => { const local = u.replace('https://cdn.shopify.com/', 'https://cdn.shopify.com/'); const n = local.split('./shop/').pop().split('?')[0]; $('#sock-art').appendChild(h(`<figure class="layer"><img alt="${esc(n)}" src="${local}"><figcaption>${esc(n)}</figcaption></figure>`)); });
  },
  // ---------------- product explode ----------------
  async surfacing() {
    const props = await stageProps('surfacing');
    await mountReal('surfacing', $('#surf-host'), { strings: props.strings, locale: 'en' });
    status('surfacing', navigator.gpu ? 'mountSurfacing running · hover to explode · drag to spin · click for the next product' : 'No WebGPU in this browser: the real widget shows its error state.', !navigator.gpu);
    let mv = null, model = null;
    const pick = $('#pv-pick'), ctl = $('#pv-ctl');
    const open = async (url, btn) => {
      pick.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', b === btn));
      model = await loadGlb(url);
      mv = meshViewer($('#pv'), model, { mode: 'parts' });
      mv.set('showParts', true); mv.set('showAnchors', true);
      ctl.innerHTML = '';
      modeButtons(ctl, mv, ['parts', 'materials', 'wireframe', 'clay', 'normals'], 'parts');
      const ex = h('<label class="slider">explode <input type="range" min="0" max="1" step="0.01" value="0"></label>'); ex.querySelector('input').oninput = (e) => mv.set('explode', +e.target.value); ctl.appendChild(ex);
      const an = h('<label><input type="checkbox" checked> anchors</label>'); an.querySelector('input').onchange = (e) => mv.set('showAnchors', e.target.checked); ctl.appendChild(an);
      // animate the explode in once so you see it happen
      let t = 0; const go = () => { t += 0.02; mv.set('explode', Math.min(1, t) * 0.7); ex.querySelector('input').value = Math.min(1, t) * 0.7; if (t < 1) requestAnimationFrame(go); }; setTimeout(go, 400);
      $('#pv-parts').innerHTML = model.parts.map((p) => `<button class="pchip" data-p="${esc(p.name)}" style="--c:${p.colour}"><i></i>${esc(p.name.replace('part_', ''))}<small>${Math.round(p.tris).toLocaleString()} tris · out [${p.explode.map((v) => (+v).toFixed(2)).join(', ')}]</small></button>`).join('')
        + model.anchors.map((a) => `<span class="pchip anchor"><i></i>${esc(a.name)}<small>wire attach point</small></span>`).join('');
      $('#pv-parts').querySelectorAll('[data-p]').forEach((b) => (b.onmouseenter = () => mv.set('highlight', b.dataset.p), b.onmouseleave = () => mv.set('highlight', null)));
      $('#pv-mats').innerHTML = model.materials.map((m) => `<div class="mat"><i style="background:rgb(${m.base.slice(0, 3).map((v) => Math.round(Math.pow(v, 1 / 2.2) * 255)).join(',')})"></i><b>${esc(m.name)}${/^body/.test(m.name) ? ' ★' : ''}</b><small>metal ${(+m.metal).toFixed(2)} · rough ${(+m.rough).toFixed(2)}${m.clearcoat != null ? ' · clearcoat ' + (+m.clearcoat).toFixed(2) : ''}</small></div>`).join('') + '<p class="hint">★ recoloured by the widget’s swatches</p>';
    };
    PRODUCTS.forEach(([n, u], i) => { const b = h(`<button aria-pressed="false">${n}</button>`); b.onclick = () => open(u, b); pick.appendChild(b); if (!i) open(u, b); });
  },
  // ---------------- checkpoint ----------------
  async checkpoint() {
    const host = $('#cp-host'), props = await stageProps('checkpoint');
    await mountReal('checkpoint', host, { strings: props.strings, locale: 'en' });
    status('checkpoint', 'mountCheckpointLedger running · sweep the pointer through the stream');
    const canvas = await findCanvas(host);
    const has = (op, m) => (op.path || []).some((p) => p.m === m);
    const classify = (op) => {
      if ((op.m === 'fill' || op.m === 'stroke') && op.a[0] instanceof Path2D) return 'trails';
      if (op.m === 'clearRect') return null;
      if (op.m === 'fillRect') return op.fs === 'gradient' ? 'barrier' : null;
      if (has(op, 'ellipse')) return 'impacts';
      if (op.m === 'stroke' && has(op, 'bezierCurveTo')) return 'guides';
      const n = (op.path || []).length;
      if (n > 8 && !has(op, 'arc')) return 'envelopes';
      if (op.m === 'fill' && has(op, 'arc')) return 'dots';
      if (op.m === 'stroke' && has(op, 'arc')) return 'rings';
      return 'barrier';
    };
    const layers = [
      { id: 'guides', label: 'Lane guides', colour: '#5b6bd6', note: 'faint routes into each lane' },
      { id: 'envelopes', label: 'Lane envelopes', colour: '#4ce0a1', note: 'live mean ± spread of the dots' },
      { id: 'trails', label: 'Trails', colour: '#c06bff', note: 'batched into a few paths by age' },
      { id: 'dots', label: 'Payments', colour: '#ffffff', note: '83.3 a second' },
      { id: 'rings', label: 'Rejects', colour: '#ff7a59', note: 'hollow rings, 3.5 a second' },
      { id: 'barrier', label: 'Barrier', colour: '#ffcf5c', note: 'soft band + line' },
      { id: 'impacts', label: 'Impact flashes', colour: '#ff3d71', note: 'when a reject hits' },
    ];
    $('#cp-stack').appendChild(layerStack(canvas, { classify, layers }).box);
    const tel = $('#cp-telemetry');
    const tick = () => { const all = [host, ...host.querySelectorAll('*')].flatMap((n) => Object.entries(n.dataset || {})).filter(([k]) => /count|rate|seconds|fraction/i.test(k)); tel.innerHTML = '<span><b>live telemetry</b></span><span></span>' + all.slice(0, 16).map(([k, v]) => `<span>${k}</span><b>${String(v).slice(0, 24)}</b>`).join(''); setTimeout(tick, 200); };
    tick();
  },
  // ---------------- section widgets ----------------
  async widgets() {
    const W = [['payments-globe', 'Globe', 'Payments', '#051daa'], ['payments-doorstep', 'Doorstep', 'Payments', '#051daa'], ['online-cocotte', 'Cocotte', 'Online', '#b2005b'], ['online-inbox-ana', 'Inbox', 'Online', '#b2005b'], ['operations-pull-back', 'Pull back', 'Operations', '#1b1f2e'], ['marketing-campaign', 'Campaign', 'Marketing', '#7000a9'], ['fulfillment-ripple', 'Ripple', 'Fulfillment', '#00632e'], ['retail-lines', 'Lines', 'Retail', '#b03400'], ['sidekick-timebase', 'Timebase', 'Sidekick', '#7000a9']];
    for (const [key, name, section, colour] of W) {
      const card = h(`<article class="wcard"><div class="wface" style="--card:${colour}"><div class="whost content-rail-item"></div></div><h3>${name} <span>${section}</span></h3><div class="ctl"><button data-a="layers">Show layers</button><span class="wstatus">mounting…</span></div><div class="wstack"></div></article>`);
      $('#widget-grid').appendChild(card);
      const host = card.querySelector('.whost');
      host.addEventListener('pointerenter', () => host.setAttribute('data-hover-intent', 'true'));
      host.addEventListener('pointerleave', () => host.setAttribute('data-hover-intent', 'false'));
      try { await mountReal(key, host, { ...(await fragmentProps(key)), locale: 'en' }); card.querySelector('.wstatus').textContent = 'real module · hover to play'; }
      catch (e) { card.querySelector('.wstatus').textContent = 'failed: ' + e.message; continue; }
      card.querySelector('[data-a=layers]').onclick = async (e) => {
        const box = card.querySelector('.wstack');
        if (box.firstChild) { box.innerHTML = ''; card.style.gridColumn = ''; e.target.textContent = 'Show layers'; return; }
        e.target.textContent = 'Hide layers'; card.style.gridColumn = '1 / -1';
        const c = await findCanvas(host);
        if (!c) { box.textContent = 'This one is DOM + CSS, not a canvas.'; return; }
        box.appendChild(layerStack(c, { classify: genericClassify, layers: GENERIC_LAYERS }).box);
      };
    }
  },
};

// ---------- helpers ----------
function modeButtons(box, mv, modes, cur) {
  modes.forEach((m) => { const b = h(`<button aria-pressed="${m === cur}">${m}</button>`); b.onclick = () => { box.querySelectorAll('button').forEach((x) => modes.includes(x.textContent) && x.setAttribute('aria-pressed', x === b)); mv.set('mode', m); }; box.appendChild(b); });
}
// side view of the page curl, recomputed from the mode's own look constants when available
function curlDiagram(win) {
  const box = h(`<div class="dbg"><h3>The curl, from the side</h3><p class="hint">The page is a strip of 64 segments. Each segment bends a little more than the last (exponentially), so the page stays flat near you and curls away into the distance. The camera tilts from straight down to −30°.</p><canvas width="640" height="260" style="width:100%;background:#020722;border-radius:4px"></canvas><label class="slider">tilt <input type="range" min="0" max="1" step="0.01" value="1"></label><label class="slider">sharpness <input type="range" min="0.5" max="12" step="0.1" value="6.54"></label></div>`);
  const c = box.querySelector('canvas'), g = c.getContext('2d'), [tilt, sharp] = box.querySelectorAll('input');
  const draw = () => {
    const K = win.__hic?.look, t = +tilt.value, s = +sharp.value, fold = ((K?.fold ?? 80) * Math.PI) / 180, N = 64, L = 5;
    g.clearRect(0, 0, 640, 260);
    let y = 0, z = 0; const pts = [[0, 0]];
    for (let i = 0; i < N; i++) { const u = (i + 0.5) / N, ang = (t * Math.expm1(s * u)) / Math.expm1(s) * fold; y += Math.cos(ang) * (L / N); z += Math.sin(ang) * (L / N); pts.push([y, z]); }
    const sx = 600 / Math.max(1, Math.max(...pts.map((p) => p[0]))), sc = Math.min(sx, 110);
    g.strokeStyle = 'rgba(255,255,255,.15)'; g.beginPath(); g.moveTo(20, 200); g.lineTo(630, 200); g.stroke();
    g.strokeStyle = '#8e9dff'; g.lineWidth = 3; g.beginPath(); pts.forEach(([a, b], i) => (i ? g.lineTo(20 + a * sc, 200 - b * sc) : g.moveTo(20, 200))); g.stroke();
    g.fillStyle = '#ffcf5c'; pts.forEach(([a, b], i) => i % 8 === 0 && g.fillRect(20 + a * sc - 2, 200 - b * sc - 2, 4, 4));
    const pitch = -90 + t * (90 - 30.2); g.fillStyle = '#e9ecff'; g.font = '12px ui-monospace, monospace'; g.fillText(`camera pitch ≈ ${pitch.toFixed(1)}° · near: flat · far: curled up to ${((t * fold * 180) / Math.PI).toFixed(0)}°`, 20, 24);
    g.fillText('you are here →', 20, 222);
  };
  tilt.oninput = sharp.oninput = draw; draw();
  return box;
}
// live swing scope for every garment
function garmentScope(win) {
  const box = h(`<div class="dbg"><h3>Garment swing, live</h3><p class="hint">One line per garment, plotting its swing angle as it moves. Flick a garment and watch its line ring down.</p><canvas width="640" height="200" style="width:100%;background:#020722;border-radius:4px"></canvas><p class="readout" data-n></p></div>`);
  const c = box.querySelector('canvas'), g = c.getContext('2d'), n = box.querySelector('[data-n]'), hist = new Map();
  const tick = () => {
    if (!box.isConnected && box.dataset.s) return; if (box.isConnected) box.dataset.s = 1;
    const list = win.__hic?.garments?.() || [];
    list.forEach((r) => { const a = hist.get(r.key) || []; a.push(r.phi); if (a.length > 320) a.shift(); hist.set(r.key, a); });
    g.clearRect(0, 0, 640, 200); g.strokeStyle = 'rgba(255,255,255,.15)'; g.beginPath(); g.moveTo(0, 100); g.lineTo(640, 100); g.stroke();
    let i = 0; hist.forEach((a) => { g.strokeStyle = `hsl(${(i++ * 47) % 360} 80% 70%)`; g.beginPath(); a.forEach((v, k) => (k ? g.lineTo(k * 2, 100 - v * 100) : g.moveTo(0, 100 - v * 100))); g.stroke(); });
    n.textContent = list.length ? `${list.length} garments on screen` : 'No garments yet: once the 3D mode is running, scroll the frame to Merchandising.';
    setTimeout(tick, 60);
  };
  tick();
  return box;
}

// ---------- routing ----------
const tabs = [...document.querySelectorAll('[role=tab]')];
function show(name) {
  if (!document.getElementById('p-' + name)) name = 'site';
  document.querySelectorAll('[data-panel]').forEach((p) => (p.hidden = p.dataset.panel !== name));
  tabs.forEach((t) => t.setAttribute('aria-selected', t.getAttribute('href') === '#' + name));
  document.querySelectorAll(`#p-${name} iframe[data-src]`).forEach((f) => { f.src = f.dataset.src; f.removeAttribute('data-src'); });
  if (!started[name] && starters[name]) { started[name] = true; starters[name]().catch((e) => { status(name, 'Failed: ' + e.message, true); console.error(e); }); }
}
addEventListener('hashchange', () => show(location.hash.slice(1)));
show(location.hash.slice(1));
