// Fall '26 lab: mounts Shopify's real modules (from the local mirror) one feature at a time, with live inspectors.
// Every module path below is resolved by lab/server.py from src-pretty/ by basename.
const MOD = {
  mountWidget: './_mod/mountWidget.client-BVGwFRGg.js',
  sock: './_mod/sockScene.client-cCVHhDpv.js',
  roomAssets: './_mod/assets-CA9n78aZ.js',
};
const SOCK_GLB = 'https://cdn.shopify.com/b/shopify-brochure2-assets/8a9ad3fd4eb3977ea5d2a2cb3c71fab5.glb';
const PRODUCT_GLBS = ['63862047674286025ecfd47299409384', '01a19c36bdf203ffdd184f131e009f69', '4f1440c14d0b1a908ce40a7d20d3aaf4', 'b5c02ef3e879e5ec2a98b3bdde10b9a9'].map((h) => `https://cdn.shopify.com/b/shopify-brochure2-assets/${h}.glb`);
const SECTION_WIDGETS = [
  ['payments-globe', 'Globe', 'Payments', '#051daa'],
  ['payments-doorstep', 'Doorstep', 'Payments', '#051daa'],
  ['online-cocotte', 'Cocotte', 'Online', '#b2005b'],
  ['online-inbox-ana', 'Inbox', 'Online', '#b2005b'],
  ['operations-pull-back', 'Pull back', 'Operations', '#0f0f0f'],
  ['marketing-campaign', 'Campaign', 'Marketing', '#7000a9'],
  ['fulfillment-ripple', 'Ripple', 'Fulfillment', '#00632e'],
  ['retail-lines', 'Lines', 'Retail', '#b03400'],
  ['sidekick-timebase', 'Timebase', 'Sidekick', '#7000a9'],
];

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, attrs = {}, html = '') => { const e = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v)); e.innerHTML = html; return e; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// ---- real island props, read from the page's own hydration manifest ----
let islandsP;
function islands() {
  return (islandsP ??= fetch('./shop/').then((r) => r.text()).then((html) => {
    const m = html.match(/<script[^>]*id="rmx-data"[^>]*>([\s\S]*?)<\/script>/);
    return Object.values(JSON.parse(m[1]).h);
  }));
}
async function stageProps(widget) {
  const all = await islands();
  return all.find((i) => i.exportName === 'PrototypeStage' && i.props?.visual?.widget === widget)?.props ?? {};
}
async function fragmentProps(key) {
  try {
    const html = await (await fetch(`https://www.shopify.com/editions/fall2026/widgets/${key}?handle=${key}`)).text();
    const m = html.match(/<script[^>]*id="rmx-data"[^>]*>([\s\S]*?)<\/script>/);
    if (!m) return {};
    const found = Object.values(JSON.parse(m[1]).h).find((i) => i.props?.visual?.widget === key || i.props?.widget === key || i.props?.strings);
    return found?.props ?? {};
  } catch { return {}; }
}

// ---- mount a real widget through Shopify's own registry ----
async function mountReal(key, host, props) {
  const { default: mount } = await import(MOD.mountWidget);
  const ac = new AbortController();
  await mount(key, host, ac.signal, props);
  return ac;
}

const status = (id, msg, bad) => { const s = $(`[data-status="${id}"]`); if (s) { s.textContent = msg; s.classList.toggle('bad', !!bad); } };

// =================== tabs ===================
const started = {};
const starters = {
  async plaza() {
    const host = $('#room-host');
    const props = await stageProps('room');
    await mountReal('room', host, { strings: props.strings, locale: 'en' });
    status('plaza', 'mountRoom running · real atlas + plaza JPG from the mirror');
    // layers: the actual images the widget composites, URLs taken from Shopify's own asset module
    const A = await import(MOD.roomAssets);
    const urls = Object.values(A).filter((v) => typeof v === 'string' && /\.(jpe?g|webp|svg)/.test(v));
    const grid = $('#room-layers');
    urls.forEach((u) => {
      const name = u.split('./shop/').pop().split('?')[0];
      const fig = el('figure', { class: 'layer' }, `<img loading="lazy" alt="${esc(name)}" src="${u}"><figcaption>${esc(name)}</figcaption>`);
      grid.appendChild(fig);
    });
  },

  async sock() {
    const stage = $('#sock-stage'), canvas = $('#sock-canvas'), svg = $('#sock-svg');
    if (!navigator.gpu) { status('sock', 'This browser has no WebGPU, so the real sock engine refuses to mount (the site shows its poster here).', true); return; }
    const all = await islands();
    const merch = all.find((i) => i.exportName === 'MerchWidget')?.props ?? {};
    const specs = merch.presentation?.specs ?? [];
    const ac = new AbortController();
    let frames = 0, lastShape = '';
    const onFrame = (f) => {
      frames++;
      // draw Shopify's own projected rings (computed by the engine on the CPU) as an inspector overlay
      if (!f || !f.rings) return;
      if (!lastShape) { lastShape = describe(f); $('#sock-frame-shape').textContent = lastShape; }
      svg.setAttribute('viewBox', `0 0 ${canvas.clientWidth} ${canvas.clientHeight}`);
      const showRings = $('#sock-rings').checked;
      let out = '';
      if (showRings) f.rings.forEach((ring, ri) => {
        const pts = ring.points ?? ring;
        if (!Array.isArray(pts)) return;
        for (let k = 1; k < pts.length; k++) {
          const a = pts[k - 1], b = pts[k];
          const ax = a.x ?? a[0], ay = a.y ?? a[1], az = a.depth ?? a.z ?? a[2] ?? 0, bx = b.x ?? b[0], by = b.y ?? b[1];
          out += `<line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" class="${az > 0 ? 'front' : 'back'}"/>`;
        }
      });
      (f.anchors ?? f.specs ?? []).forEach?.((p) => { const x = p.x ?? p[0], y = p.y ?? p[1]; if (Number.isFinite(x)) out += `<circle cx="${x}" cy="${y}" r="4" class="anchor"/>`; });
      svg.innerHTML = out;
    };
    const onError = (e) => { if (e) status('sock', 'Sock engine error: ' + (e.message || e), true); };
    try {
      const { mountSockScene } = await import(MOD.sock);
      const scene = await mountSockScene(canvas, ac.signal, SOCK_GLB, specs, onFrame, onError);
      if (!scene) { status('sock', 'mountSockScene returned no scene (WebGPU unavailable or failed).', true); return; }
      scene.setHeld?.(false);
      status('sock', 'mountSockScene running · real sock.glb + sock.wgsl · drag to rotate');
      const readout = $('#sock-readout');
      const tick = () => {
        if (!document.body.contains(canvas)) return;
        const p = scene.getPose?.() ?? {};
        readout.textContent = Object.entries(p).map(([k, v]) => `${k} ${typeof v === 'number' ? v.toFixed(3) : JSON.stringify(v)}`).join(' · ') + ` · frames ${frames}`;
        requestAnimationFrame(tick);
      };
      tick();
      $('#sock-hold').onclick = (e) => { const held = e.currentTarget.getAttribute('aria-pressed') !== 'true'; e.currentTarget.setAttribute('aria-pressed', held); scene.setHeld?.(held); };
      $('#sock-reset').onclick = () => scene.setPose?.({ yaw: -0.3, pitch: 0.18 });
      $('#sock-side').onclick = () => scene.setPose?.({ yaw: Math.PI / 2, pitch: 0.05 });
      $('#sock-top').onclick = () => scene.setPose?.({ yaw: -0.3, pitch: 0.6 });
      // pointer drag (the engine exposes pose; MerchArtwork owns pointer handling on the site, so the lab drives it the same way)
      let drag = null;
      canvas.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, y: e.clientY, p: scene.getPose() }; canvas.setPointerCapture(e.pointerId); scene.setHeld?.(true); });
      canvas.addEventListener('pointermove', (e) => { if (!drag) return; scene.setPose({ ...drag.p, yaw: drag.p.yaw + (e.clientX - drag.x) * 0.012, pitch: Math.min(0.6, Math.max(-0.3, drag.p.pitch + (e.clientY - drag.y) * 0.006)) }); });
      const up = () => { if (drag) { drag = null; if ($('#sock-hold').getAttribute('aria-pressed') !== 'true') scene.setHeld?.(false); } };
      canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    } catch (e) { status('sock', 'Failed: ' + e.message, true); console.error(e); }
  },

  async surfacing() {
    const props = await stageProps('surfacing');
    await mountReal('surfacing', $('#surf-host'), { strings: props.strings, locale: 'en' });
    status('surfacing', navigator.gpu ? 'mountSurfacing running · hover to explode, drag to spin, click for next product' : 'No WebGPU in this browser: the real widget shows its error state.', !navigator.gpu);
    const box = $('#glb-inspect');
    for (const url of PRODUCT_GLBS) box.appendChild(await inspectGlb(url));
  },

  async checkpoint() {
    const host = $('#cp-host');
    const props = await stageProps('checkpoint');
    await mountReal('checkpoint', host, { strings: props.strings, locale: 'en' });
    status('checkpoint', 'mountCheckpointLedger running · its telemetry below is read live from the data-* attributes it writes each frame');
    const out = $('#cp-telemetry');
    const tick = () => {
      if (!document.body.contains(host)) return;
      const nodes = [host, ...host.querySelectorAll('*')].filter((n) => Object.keys(n.dataset || {}).length);
      const rows = [];
      nodes.forEach((n) => Object.entries(n.dataset).forEach(([k, v]) => rows.push([k, v])));
      out.innerHTML = rows.slice(0, 40).map(([k, v]) => `<tr><td>data-${esc(k.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()))}</td><td>${esc(v).slice(0, 80)}</td></tr>`).join('');
      setTimeout(() => requestAnimationFrame(tick), 120);
    };
    tick();
  },

  async widgets() {
    const grid = $('#widget-grid');
    for (const [key, name, section, colour] of SECTION_WIDGETS) {
      const card = el('article', { class: 'wcard' }, `<div class="wface" style="--card:${colour}"><div class="whost content-rail-item"></div></div><h3>${esc(name)} <span>${esc(section)} · <code>${key}</code></span></h3><p class="wstatus" data-status="w-${key}">mounting…</p>`);
      grid.appendChild(card);
      const host = card.querySelector('.whost');
      host.addEventListener('pointerenter', () => host.setAttribute('data-hover-intent', 'true'));
      host.addEventListener('pointerleave', () => host.setAttribute('data-hover-intent', 'false'));
      try {
        const props = await fragmentProps(key);
        await mountReal(key, host, { ...props, locale: 'en' });
        status('w-' + key, 'real module mounted · hover to play');
      } catch (e) { status('w-' + key, 'failed: ' + e.message, true); console.error(key, e); }
    }
  },

  async hero() {
    const g = await (await fetch('./editions/fall2026/graph-data')).json();
    const nodes = g.nodes ?? g.data?.nodes ?? [], edges = g.edges ?? g.data?.edges ?? [];
    const count = (arr, f) => arr.reduce((m, x) => ((m[f(x)] = (m[f(x)] || 0) + 1), m), {});
    const byType = count(nodes, (n) => n.type), byEdge = count(edges, (e) => e.type);
    const sections = nodes.filter((n) => n.type === 'section');
    const updates = nodes.filter((n) => n.type === 'update');
    const perSection = sections.map((s) => [s.label ?? s.title ?? s.id, edges.filter((e) => e.type === 'contains' && (e.source ?? e.from) === s.id).length]).sort((a, b) => b[1] - a[1]);
    const weights = count(updates, (u) => u.weight ?? '—');
    $('#graph-stats').innerHTML = `
      <table class="k"><tr><td>schema</td><td>${esc(g.schemaVersion ?? '—')}</td></tr>
      <tr><td>nodes</td><td>${nodes.length} · ${Object.entries(byType).map(([k, v]) => `${v} ${k}`).join(' · ')}</td></tr>
      <tr><td>edges</td><td>${edges.length} · ${Object.entries(byEdge).map(([k, v]) => `${v} ${k}`).join(' · ')}</td></tr>
      <tr><td>update weights</td><td>${Object.entries(weights).sort().map(([k, v]) => `w${k}: ${v}`).join(' · ')}</td></tr></table>
      <h4>Updates per section (the hubs)</h4>
      <div class="bars">${perSection.map(([n, c]) => `<div class="bar"><span>${esc(n)}</span><i style="--w:${(c / perSection[0][1]) * 100}%"></i><b>${c}</b></div>`).join('')}</div>
      <h4>First node record, as the hero receives it</h4>
      <pre class="code">${esc(JSON.stringify(updates[0] ?? nodes[0], null, 2)).slice(0, 1400)}</pre>`;
    status('hero', 'graph-data loaded from runtime/data/graph.json · the live hero runs in the frame on the left');
  },
};

function describe(f) {
  const keys = Object.keys(f);
  const r0 = f.rings?.[0];
  const p0 = (r0?.points ?? r0)?.[0];
  return `onFrame(frame) → { ${keys.join(', ')} } · rings: ${f.rings?.length} · ring[0]: ${Array.isArray(r0) ? 'array' : Object.keys(r0 || {}).join(', ')} · point: ${p0 ? JSON.stringify(p0).slice(0, 80) : '—'}`;
}

// glTF inspector: read the JSON chunk of the real GLBs (gunzip if the CDN stored them gzipped)
async function inspectGlb(url) {
  const card = el('div', { class: 'glb' });
  try {
    let buf = new Uint8Array(await (await fetch(url)).arrayBuffer());
    if (buf[0] === 0x1f && buf[1] === 0x8b) buf = new Uint8Array(await new Response(new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer());
    const dv = new DataView(buf.buffer);
    const jsonLen = dv.getUint32(12, true);
    const gltf = JSON.parse(new TextDecoder().decode(buf.subarray(20, 20 + jsonLen)));
    const parts = (gltf.nodes || []).filter((n) => n.extras?.explode);
    const anchors = (gltf.nodes || []).filter((n) => /^anchor_/.test(n.name || ''));
    const tris = (gltf.meshes || []).reduce((s, m) => s + m.primitives.reduce((t, p) => t + (p.indices != null ? gltf.accessors[p.indices].count / 3 : 0), 0), 0);
    const has = (p) => parts.some((n) => n.name === p);
    const name = has('part_lens_barrel') ? 'Instant camera' : has('part_shade') ? 'Mushroom lamp' : has('part_lid') ? 'Dutch oven' : has('part_grille') ? 'Portable radio' : gltf.scenes?.[0]?.name || url.split('./shop/').pop();
    card.innerHTML = `
      <h4>${esc(name)} <span>${esc(url.split('./shop/').pop())} · ${(buf.length / 1024).toFixed(0)} KB · ${Math.round(tris).toLocaleString()} tris</span></h4>
      <p class="mono">extensions: ${esc((gltf.extensionsRequired || []).join(', ') || 'none')}</p>
      <table class="k">
        ${parts.map((n) => `<tr><td>${esc(n.name)}</td><td>explode [${n.extras.explode.map((v) => (+v).toFixed(2)).join(', ')}]</td></tr>`).join('')}
        ${anchors.map((n) => `<tr><td>${esc(n.name)}</td><td>wire anchor at [${(n.translation || [0, 0, 0]).map((v) => (+v).toFixed(2)).join(', ')}]</td></tr>`).join('')}
        ${(gltf.materials || []).map((m) => { const p = m.pbrMetallicRoughness || {}; return `<tr><td>material ${esc(m.name)}</td><td>${p.baseColorFactor ? 'rgb ' + p.baseColorFactor.slice(0, 3).map((v) => v.toFixed(2)).join(' ') : ''} · metal ${p.metallicFactor ?? 1} · rough ${p.roughnessFactor ?? 1}${m.extensions?.KHR_materials_clearcoat ? ' · clearcoat ' + m.extensions.KHR_materials_clearcoat.clearcoatFactor : ''}</td></tr>`; }).join('')}
      </table>`;
  } catch (e) { card.textContent = `${url}: ${e.message}`; }
  return card;
}

// =================== routing ===================
const tabs = [...document.querySelectorAll('[role=tab]')];
function show(name) {
  if (!document.getElementById('p-' + name)) name = 'site';
  document.querySelectorAll('[data-panel]').forEach((p) => (p.hidden = p.dataset.panel !== name));
  tabs.forEach((t) => t.setAttribute('aria-selected', t.getAttribute('href') === '#' + name));
  if (!started[name] && starters[name]) { started[name] = true; starters[name]().catch((e) => { status(name, 'Failed: ' + e.message, true); console.error(e); }); }
  // iframes load lazily on first view
  document.querySelectorAll(`#p-${name} iframe[data-src]`).forEach((f) => { f.src = f.dataset.src; f.removeAttribute('data-src'); });
}
addEventListener('hashchange', () => show(location.hash.slice(1)));
show(location.hash.slice(1));
