// Expo Inspector — a floating debug panel for Shopify Editions Fall '26 "Expo mode", run ON shopify.com
// (the HTML-in-Canvas API is enabled there by an origin trial). Load it BEFORE pressing ~ so it can see the
// GPU pipelines being created. Works best with ?game in the URL, which makes the mode expose window.__hic.
(() => {
  if (window.__expoInspector?.show) { window.__expoInspector.show(); return; }
  const X = (window.__expoInspector = {});

  // ---------------- WebGPU interception (installed once; reused if already present) ----------------
  const hooked = !!window.__expoG;
  const G = (window.__expoG ||= { pipes: new Map(), draws: {}, lastDraws: {}, frame: 0, hidden: new Set(), patches: [], uploads: [], frameData: null, pick: null, cityMode: localStorage.expoCityMode || 'final' });
  X.G = G;
  const CITY_VIEWS = {
    final: null,
    normals: 'return vec4f(normalize(cross(dpdx(in.position.xyz), dpdy(in.position.xyz))) * 0.5 + 0.5, 1.0);',
    'shadow term': 'return vec4f(vec3f(key), 1.0);',
    'page only': 'return vec4f(colour, 1.0);',
    'UV grid': 'return vec4f(fract(in.uv / 100.0), 0.5, 1.0);',
  };
  if (!hooked) {
  let rafTs = -1;
  const roll = () => { const t = performance.now(); if (t - rafTs > 4) { rafTs = t; G.lastDraws = G.draws; G.draws = {}; G.frame++; } };
  const D = GPUDevice.prototype, Q = GPUQueue.prototype, E = GPURenderPassEncoder.prototype;

  const csm = D.createShaderModule;
  D.createShaderModule = function (desc) {
    let code = desc.code;
    const view = CITY_VIEWS[G.cityMode];
    if (view && /inception city/.test(desc.label || '')) code = code.replace(/return vec4f\(colour \* in\.light \* key, 1\.0\);/, view);
    return csm.call(this, { ...desc, code });
  };
  const track = (p, desc) => { p.__expo = desc.label || 'unlabelled'; if (!G.pipes.has(p.__expo)) G.pipes.set(p.__expo, { label: p.__expo }); return p; };
  const crp = D.createRenderPipeline; D.createRenderPipeline = function (d) { return track(crp.call(this, d), d); };
  const crpa = D.createRenderPipelineAsync; D.createRenderPipelineAsync = function (d) { return crpa.call(this, d).then((p) => track(p, d)); };
  const cb = D.createBuffer; D.createBuffer = function (d) { const b = cb.call(this, d); b.__expo = d.label || ''; return b; };
  const wb = Q.writeBuffer;
  Q.writeBuffer = function (buf, off, data, dOff = 0, size) {
    if (buf.__expo === 'inception-frame') { try { const src = ArrayBuffer.isView(data) ? new Float32Array(data.buffer, data.byteOffset, data.byteLength >> 2) : new Float32Array(data); G.frameData = Float32Array.from(src); } catch {} }
    return wb.call(this, buf, off, data, dOff, size);
  };
  for (const name of ['copyElementImageToTexture', 'drawElementImageToTexture']) {
    const orig = Q[name]; if (!orig) continue;
    Q[name] = function (...a) {
      const s = a[0] || {}, dst = a[1]?.destination?.texture || a[1]?.texture;
      const lab = dst?.label || '';
      const rec = { x: s.sx ?? 0, y: s.sy ?? 0, w: s.swidth ?? s.width ?? 0, h: s.sheight ?? s.height ?? 0, kind: /patch/.test(lab) ? 'patch' : 'page', t: performance.now() };
      (rec.kind === 'patch' ? G.patches : G.uploads).push(rec);
      return orig.apply(this, a);
    };
  }
  const ma = GPUBuffer.prototype.mapAsync, gmr = GPUBuffer.prototype.getMappedRange;
  GPUBuffer.prototype.getMappedRange = function (...a) {
    const r = gmr.apply(this, a);
    if (/pick/.test(this.__expo || '') || this.size === 4) { try { const b = new Uint8Array(r.slice(0)); if (b.length >= 4) { const x = b[0] * 256 + b[1], y = b[2] * 256 + b[3] - 1; G.pick = { x: x & 32767, y, title: x >= 32768, t: performance.now() }; } } catch {} }
    return r;
  };
  E.setPipeline = ((sp) => function (p) { this.__pipe = p.__expo; return sp.call(this, p); })(E.setPipeline);
  for (const name of ['draw', 'drawIndexed', 'drawIndirect', 'drawIndexedIndirect']) {
    const orig = E[name]; if (!orig) continue;
    E[name] = function (...a) {
      roll();
      const l = this.__pipe || '?'; const d = (G.draws[l] ||= { n: 0, v: 0 }); d.n++; d.v += typeof a[0] === 'number' ? a[0] * (a[1] || 1) : 0;
      if (G.hidden.has(l)) return;
      return orig.apply(this, a);
    };
  }
  } // end hooks

  // ---------------- panel ----------------
  const host = document.createElement('div'); host.style.cssText = 'position:fixed;right:14px;top:70px;z-index:2147483647;';
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = `<style>
    :host{all:initial} *{box-sizing:border-box}
    .p{width:380px;max-height:calc(100vh - 90px);display:flex;flex-direction:column;background:rgba(2,6,30,.94);color:#e9ecff;border:1px solid rgba(142,157,255,.35);border-radius:10px;font:12.5px/1.45 ui-sans-serif,system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.5);backdrop-filter:blur(8px)}
    .hd{display:flex;align-items:center;gap:8px;padding:9px 12px;border-bottom:1px solid rgba(142,157,255,.2);cursor:move;user-select:none}
    .hd b{font-size:13px} .hd span{color:#8f97c7;font:11px ui-monospace,monospace} .hd button{margin-left:auto}
    .tabs{display:flex;gap:2px;padding:6px 8px 0;flex-wrap:wrap} .tabs button{background:none;border:0;color:#8f97c7;padding:6px 8px;border-radius:6px 6px 0 0;cursor:pointer;font:500 11.5px ui-monospace,monospace}
    .tabs button[aria-selected=true]{color:#fff;background:rgba(142,157,255,.16)}
    .bd{overflow:auto;padding:10px 12px 14px;border-top:1px solid rgba(142,157,255,.15)}
    button{font:11.5px ui-monospace,monospace;color:#e9ecff;background:#0a1550;border:1px solid rgba(142,157,255,.3);border-radius:999px;padding:4px 10px;cursor:pointer}
    button.on{background:#e9ecff;color:#020722} button.off{opacity:.4}
    .note{color:#8f97c7;font-size:11.5px;margin:0 0 8px} .warn{color:#ffbf7a}
    .row{display:grid;grid-template-columns:96px 1fr 52px;gap:8px;align-items:center;margin:5px 0;font:11.5px ui-monospace,monospace;color:#8f97c7}
    .row b{color:#ffbf7a;font-weight:400;text-align:right} input[type=range]{width:100%}
    .chips{display:flex;flex-wrap:wrap;gap:5px}
    .pipe{display:grid;grid-template-columns:1fr auto;gap:2px 8px;width:100%;text-align:left;border-radius:6px;margin:3px 0;padding:6px 8px}
    .pipe small{color:#8f97c7;font-size:10.5px} .pipe.off{opacity:.35}
    canvas{width:100%;display:block;background:#01041a;border-radius:6px;margin:4px 0 10px}
    h4{margin:10px 0 4px;font:500 10.5px ui-monospace,monospace;letter-spacing:.1em;text-transform:uppercase;color:#8e9dff}
    .kv{display:grid;grid-template-columns:auto 1fr;gap:2px 10px;font:11px ui-monospace,monospace;color:#8f97c7} .kv b{color:#ffbf7a;font-weight:400}
  </style>
  <div class="p"><div class="hd"><b>Expo Inspector</b><span data-state></span><button data-a="enter">enter / exit (~)</button><button data-a="min">–</button></div>
  <div class="tabs"></div><div class="bd"></div></div>`;
  document.documentElement.appendChild(host);
  const $ = (s) => root.querySelector(s), bd = $('.bd'), tabsEl = $('.tabs');
  X.show = () => (host.style.display = '');
  // drag
  { let d = null; $('.hd').addEventListener('pointerdown', (e) => { if (e.target.tagName === 'BUTTON') return; d = [e.clientX, e.clientY, host.offsetLeft, host.offsetTop]; e.target.setPointerCapture(e.pointerId); });
    $('.hd').addEventListener('pointermove', (e) => { if (!d) return; host.style.left = d[2] + e.clientX - d[0] + 'px'; host.style.top = d[3] + e.clientY - d[1] + 'px'; host.style.right = 'auto'; });
    $('.hd').addEventListener('pointerup', () => (d = null)); }
  $('[data-a=min]').onclick = () => { const hide = bd.style.display !== 'none'; bd.style.display = tabsEl.style.display = hide ? 'none' : ''; };
  // the page's own corner button: labelled "Expo Mode" outside the mode, "Back" inside it
  const toggleExpo = () => { const b = [...document.querySelectorAll('button')].find((x) => /^(Expo Mode|Back)$/.test((x.getAttribute('aria-label') || x.textContent || '').trim())); if (b) b.click(); else document.dispatchEvent(new KeyboardEvent('keydown', { key: '`', code: 'Backquote', bubbles: true })); };
  X.toggle = toggleExpo;
  $('[data-a=enter]').onclick = toggleExpo;
  const hic = () => window.__hic;
  const needGame = `<p class="note warn">Some controls need the page loaded with <b>?game</b> (it makes the mode expose its live config). <button data-a="game">reload with ?game</button></p>`;
  const wireGame = () => { const b = bd.querySelector('[data-a=game]'); if (b) b.onclick = () => { const u = new URL(location.href); u.searchParams.set('game', ''); u.searchParams.delete('expo-mode'); location.href = u.toString().replace('game=', 'game'); }; };

  const TABS = {
    Layers() {
      const K = hic()?.look;
      if (!K) return needGame;
      const names = { grid: 'background grid', pulses: 'travelling pulses', light: 'key light + shadows', outlines: 'card outlines + dimensions', labels: 'callout labels', maths: 'maths curves', rulers: 'distance rulers', formulas: 'formulas', snake: 'snake text', floats: 'floating wireframe shapes', cubes: 'cubes', headings: '3D titles', buttons: 'floating buttons', inspect: 'inspect pills', stores: 'side dioramas (racks, kiosks, servers)', graph: 'section graphs' };
      const items = Object.entries(K.layers || {}).filter(([, v]) => v && typeof v.on === 'boolean');
      return `<p class="note">Every overlay Expo draws, from its own config (<code>__hic.look.layers</code>). Toggle to remove it from the live scene.</p><div class="chips">${items.map(([k, v]) => `<button data-layer="${k}" class="${v.on ? 'on' : ''}">${names[k] || k}</button>`).join('')}</div>
        <h4>Shadows</h4><div class="chips"><button data-shadows class="${[...G.hidden].some((l) => /cast/.test(l)) ? '' : 'on'}">shadow casters</button></div>`;
    },
    Passes() {
      const groups = [['Page mesh (the curled page + raised city)', /inception-city(?!-pick|-caster)/], ['3D titles', /inception-titles-(walls|back|top)$/], ['Products (borrowed 3D models)', /inception-product-draw/], ['Overlay fills (black garments, slabs)', /overlay-(fills|tints|cuts)/], ['Overlay lines, points, text', /overlay-(lines|wide|points|text|soft)/], ['Shadow casters', /cast/], ['Overlay shadows', /overlay-shadow/], ['Mipmaps + live patches', /mipmap|patch/], ['Pick passes', /pick/], ['Everything else', /./]];
      const labels = [...G.pipes.keys()], used = new Set();
      let html = '<p class="note">Every WebGPU pipeline Expo created, grouped. Numbers are draw calls in the last frame. Click to stop drawing it.</p>';
      groups.forEach(([title, re]) => {
        const ls = labels.filter((l) => re.test(l) && !used.has(l)); ls.forEach((l) => used.add(l));
        if (!ls.length) return;
        html += `<h4>${title}</h4>` + ls.map((l) => { const d = G.lastDraws[l] || { n: 0, v: 0 }; return `<button class="pipe ${G.hidden.has(l) ? 'off' : ''}" data-pipe="${l}"><span>${l.replace('inception-', '')}</span><span>${d.n}</span><small>${d.v.toLocaleString()} verts</small></button>`; }).join('');
      });
      return labels.length ? html : '<p class="note warn">No Expo pipelines yet. Press <b>enter / exit</b> (or ~). If the inspector was loaded after Expo started, exit and re-enter.</p>';
    },
    Look() {
      const K = hic()?.look;
      if (!K) return needGame;
      const S = [['sharpness', 'curl sharpness', 0.5, 12, 0.01], ['fold', 'fold angle °', 0, 120, 1], ['pitch', 'camera pitch °', -89, -5, 0.1], ['height', 'page height', 0.6, 1.6, 0.005], ['city', 'city height', 0, 0.03, 0.0005], ['cityGrow', 'city growth', 0, 10, 0.1], ['shade', 'bend shading', 0, 0.6, 0.005], ['texScale', 'texture scale', 0.5, 2, 0.05]];
      const L = K.layers?.light || {};
      return `<p class="note">The mode's look constants, edited live. Scroll a little after changing to re-measure.</p>
        ${S.filter(([k]) => typeof K[k] === 'number').map(([k, n, a, b, s]) => `<div class="row"><span>${n}</span><input type="range" min="${a}" max="${b}" step="${s}" value="${K[k]}" data-k="${k}"><b>${(+K[k]).toFixed(3)}</b></div>`).join('')}
        ${Array.isArray(K.fov) ? K.fov.map((v, i) => `<div class="row"><span>fov ${i ? 'end' : 'start'}</span><input type="range" min="15" max="100" step="0.5" value="${v}" data-fov="${i}"><b>${v}</b></div>`).join('') : ''}
        ${['keyAzimuth', 'keyElevation'].filter((k) => typeof L[k] === 'number').map((k) => `<div class="row"><span>light ${k.replace('key', '').toLowerCase()}</span><input type="range" min="${k === 'keyAzimuth' ? -180 : 15}" max="${k === 'keyAzimuth' ? 180 : 89}" step="1" value="${L[k]}" data-light="${k}"><b>${L[k]}</b></div>`).join('')}
        <h4>Tilt</h4><div class="row"><span>tilt speed</span><input type="range" min="0" max="1" step="0.02" value="1" data-tilt><b>1.00</b></div><p class="note">Set speed low, then press enter / exit to watch the page fold in slow motion.</p>`;
    },
    Live() {
      return `<h4>The curl (from the GPU, every frame)</h4><canvas data-c="curl" width="700" height="220"></canvas><div class="kv" data-c="cam"></div>
        <h4>Page uploads & live patches</h4><p class="note">The whole page is a texture. Blue = full re-uploads of the visible band, pink = small patches for live canvases/videos.</p><canvas data-c="up" width="700" height="260"></canvas>
        <h4>GPU pick under the pointer</h4><div class="kv" data-c="pick"></div>
        <h4>Clothes rail swing</h4><canvas data-c="rail" width="700" height="160"></canvas><p class="note" data-c="railn"></p>`;
    },
    Shader() {
      return `<p class="note">Debug views for the page-mesh shader. The choice is baked in when Expo compiles its shaders, so it re-enters the mode for you.</p><div class="chips">${Object.keys(CITY_VIEWS).map((k) => `<button data-view="${k}" class="${G.cityMode === k ? 'on' : ''}">${k}</button>`).join('')}</div>`;
    },
  };
  let cur = 'Layers';
  Object.keys(TABS).forEach((t) => { const b = document.createElement('button'); b.textContent = t; b.onclick = () => { cur = t; render(); }; tabsEl.appendChild(b); });
  function render() {
    tabsEl.querySelectorAll('button').forEach((b) => b.setAttribute('aria-selected', b.textContent === cur));
    bd.innerHTML = TABS[cur]();
    wireGame();
    bd.querySelectorAll('[data-layer]').forEach((b) => (b.onclick = () => { const L = hic().look.layers[b.dataset.layer]; L.on = !L.on; b.classList.toggle('on', L.on); dispatchEvent(new Event('resize')); scrollBy(0, 1); scrollBy(0, -1); }));
    bd.querySelectorAll('[data-shadows]').forEach((b) => (b.onclick = () => { const casts = [...G.pipes.keys()].filter((l) => /cast/.test(l)); const off = casts.some((l) => G.hidden.has(l)); casts.forEach((l) => (off ? G.hidden.delete(l) : G.hidden.add(l))); b.classList.toggle('on', off); scrollBy(0, 1); scrollBy(0, -1); }));
    bd.querySelectorAll('[data-pipe]').forEach((b) => (b.onclick = () => { const l = b.dataset.pipe; G.hidden.has(l) ? G.hidden.delete(l) : G.hidden.add(l); b.classList.toggle('off'); }));
    bd.querySelectorAll('[data-k]').forEach((i) => (i.oninput = () => { hic().look[i.dataset.k] = +i.value; i.nextElementSibling.textContent = (+i.value).toFixed(3); dispatchEvent(new Event('resize')); }));
    bd.querySelectorAll('[data-fov]').forEach((i) => (i.oninput = () => { hic().look.fov[+i.dataset.fov] = +i.value; i.nextElementSibling.textContent = i.value; }));
    bd.querySelectorAll('[data-light]').forEach((i) => (i.oninput = () => { hic().look.layers.light[i.dataset.light] = +i.value; i.nextElementSibling.textContent = i.value; dispatchEvent(new Event('resize')); }));
    bd.querySelectorAll('[data-tilt]').forEach((i) => (i.oninput = () => { hic()?.tiltRate?.(+i.value); i.nextElementSibling.textContent = (+i.value).toFixed(2); }));
    bd.querySelectorAll('[data-view]').forEach((b) => (b.onclick = () => { G.cityMode = b.dataset.view; localStorage.expoCityMode = G.cityMode; render(); toggleExpo(); setTimeout(toggleExpo, 1600); }));
  }
  render();

  // ---------------- live drawing ----------------
  const railHist = new Map();
  function live() {
    requestAnimationFrame(live);
    const active = !!document.querySelector('[data-html-in-canvas-drawn], canvas[layoutsubtree]') || G.pipes.size > 0;
    $('[data-state]').textContent = active ? `${G.pipes.size} pipelines · frame ${G.frame}` : 'waiting for Expo';
    if (cur === 'Passes' && G.frame % 15 === 0) render();
    if (cur !== 'Live') return;
    const d = G.frameData;
    const curl = bd.querySelector('[data-c=curl]');
    if (curl && d && d.length > 24 + 64 * 4) {
      const g = curl.getContext('2d'), W = curl.width, H = curl.height; g.clearRect(0, 0, W, H);
      const pts = []; for (let i = 0; i < 65; i++) pts.push([d[24 + i * 4], d[24 + i * 4 + 1]]);
      const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]); const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
      const sc = Math.min((W - 40) / (x1 - x0 || 1), (H - 40) / (y1 - y0 || 1));
      g.strokeStyle = 'rgba(255,255,255,.12)'; g.beginPath(); g.moveTo(0, H - 20); g.lineTo(W, H - 20); g.stroke();
      g.strokeStyle = '#8e9dff'; g.lineWidth = 3; g.beginPath(); pts.forEach(([x, y], i) => { const px = 20 + (x - x0) * sc, py = H - 20 - (y - y0) * sc; i ? g.lineTo(px, py) : g.moveTo(px, py); }); g.stroke();
      g.fillStyle = '#ffcf5c'; pts.forEach(([x, y], i) => i % 8 === 0 && g.fillRect(20 + (x - x0) * sc - 3, H - 20 - (y - y0) * sc - 3, 6, 6));
      g.fillStyle = '#e9ecff'; g.font = '13px ui-monospace,monospace'; g.fillText('65 profile points of the curled page, side view (yellow = every 8th)', 12, 18);
      bd.querySelector('[data-c=cam]').innerHTML = [['viewport', `${d[0] | 0} × ${d[1] | 0}`], ['strip length', d[2].toFixed(0)], ['fov', d[4].toFixed(3)], ['pitch', d[5].toFixed(3)], ['rise', d[6].toFixed(3)], ['camera y / z', `${d[8].toFixed(0)} / ${d[9].toFixed(0)}`]].map(([k, v]) => `<span>${k}</span><b>${v}</b>`).join('');
    }
    const up = bd.querySelector('[data-c=up]');
    if (up) {
      const g = up.getContext('2d'), W = up.width, H = up.height, docH = document.documentElement.scrollHeight, docW = document.documentElement.clientWidth, now = performance.now();
      g.clearRect(0, 0, W, H);
      const sx = W / docH, sy = H / docW; // page drawn sideways: x = page y
      g.fillStyle = '#0a1550'; g.fillRect(0, 0, W, H);
      g.strokeStyle = 'rgba(255,255,255,.5)'; g.strokeRect(scrollY * sx, 0, innerHeight * sx, H);
      [...G.uploads, ...G.patches].forEach((r) => { const age = (now - r.t) / 1500; if (age > 1) return; g.globalAlpha = 1 - age; g.fillStyle = r.kind === 'patch' ? '#ff5fa2' : '#5b8cff'; g.fillRect(r.y * sx, r.x * sy, Math.max(2, r.h * sx), Math.max(2, r.w * sy)); });
      g.globalAlpha = 1; G.uploads = G.uploads.filter((r) => now - r.t < 1500); G.patches = G.patches.filter((r) => now - r.t < 1500);
      g.fillStyle = '#e9ecff'; g.font = '13px ui-monospace,monospace'; g.fillText(`whole page, sideways (${docH.toLocaleString()} px) · white box = your viewport`, 10, H - 10);
    }
    const pk = bd.querySelector('[data-c=pick]');
    if (pk) pk.innerHTML = G.pick ? `<span>page point</span><b>${G.pick.x}, ${G.pick.y}</b><span>hit</span><b>${G.pick.title ? '3D title' : 'page / city'}</b><span>age</span><b>${((performance.now() - G.pick.t) / 1000).toFixed(1)} s</b>` : '<span>move the pointer over the 3D page</span><b>—</b>';
    const rail = bd.querySelector('[data-c=rail]');
    if (rail) {
      const list = hic()?.garments?.() || [];
      list.forEach((r) => { const a = railHist.get(r.key) || []; a.push(r.phi); if (a.length > 350) a.shift(); railHist.set(r.key, a); });
      const g = rail.getContext('2d'), W = rail.width, H = rail.height; g.clearRect(0, 0, W, H);
      let i = 0; railHist.forEach((a) => { g.strokeStyle = `hsl(${(i++ * 47) % 360} 80% 70%)`; g.lineWidth = 1.5; g.beginPath(); a.forEach((v, k) => (k ? g.lineTo(k * 2, H / 2 - v * H) : g.moveTo(0, H / 2 - v * H))); g.stroke(); });
      bd.querySelector('[data-c=railn]').textContent = list.length ? `${list.length} garments placed · flick one on the rail and watch its line ring down` : (hic() ? 'Scroll to Merchandising (section 04) to place the rails.' : 'Needs ?game.');
    }
  }
  live();
})();
