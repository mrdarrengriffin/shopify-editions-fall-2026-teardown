// New Dimension (the 3D site): the real page in an instrumented frame, auto-entered, with live controls.
import { gpuPanel } from '../tools.js';

const W = 'htmlInCanvasWebGpu.client-CCocYEXD.js', E = 'HtmlInCanvasEntry-Bdoyn_tT.js', S = 'htmlInCanvasSupport-jvDIQ00h.js', G = 'index-CDrXm2i4.js';
const h = (s) => { const t = document.createElement('template'); t.innerHTML = s.trim(); return t.content.firstElementChild; };

export function supportReport(win) {
  const c = win.document.createElement('canvas');
  const checks = [
    ['WebGPU (navigator.gpu)', !!win.navigator.gpu],
    ['canvas.requestPaint', 'requestPaint' in win.HTMLCanvasElement.prototype],
    ['ctx.drawElementImage', !!c.getContext('2d')?.drawElementImage],
    ['GPUQueue.copyElementImageToTexture', !!(win.GPUQueue && ('copyElementImageToTexture' in win.GPUQueue.prototype || 'drawElementImageToTexture' in win.GPUQueue.prototype))],
  ];
  return { ok: checks.every(([, v]) => v), checks };
}
export const enableHelp = `<p>New Dimension uses Chrome's experimental <b>HTML-in-Canvas</b> API, which isn't on by default. To run it here:</p>
  <ol><li>Open <code>chrome://flags</code>, search for <b>canvas draw element</b> (HTML-in-Canvas) and set it to <b>Enabled</b>. If you don't see it, use Chrome Canary or Dev.</li><li>Relaunch Chrome, then reload this page.</li></ol>
  <p>The source walkthrough below works without it.</p>`;

// mount the instrumented page; resolves with the frame window once it's interactive
export function mountSite(stage, query) {
  stage.closest('.bench').style.gridTemplateColumns = 'minmax(0, 1fr)';
  const frame = h(`<iframe class="site-frame" title="Shopify Editions Fall '26 in New Dimension mode" src="../shop/?lab=1&${query}"></iframe>`);
  stage.appendChild(frame);
  return new Promise((res) => frame.addEventListener('load', () => res(frame), { once: true }));
}

// live config sliders bound to __hic.look (the mode's K object)
export function lookPanel(win) {
  const panel = h(`<div class="dbg"><div class="dbg-row"><b>Look</b><span class="hint">edits <code>__hic.look</code> live (the K constants, W L440-557); scroll the page to re-measure</span></div><div class="look"></div>
    <div class="dbg-row"><b>Tilt</b><button data-t="toggle">Tilt in / out (~)</button><label>speed <input type="range" min="0" max="1" step="0.05" value="1" data-t="rate"></label></div>
    <div class="dbg-row"><b>Layers</b></div><div class="modes" data-l></div></div>`);
  const hic = () => win.__hic;
  const sliders = [['pitch', -89, -10, 0.1], ['sharpness', 0.5, 12, 0.01], ['fold', 0, 120, 1], ['height', 0.6, 1.6, 0.005], ['shade', 0, 0.6, 0.005], ['city', 0, 0.03, 0.0005], ['cityGrow', 0, 10, 0.1]];
  const look = panel.querySelector('.look');
  const build = () => {
    const K = hic()?.look; if (!K) return false;
    look.innerHTML = '';
    sliders.forEach(([k, lo, hi, st]) => { if (typeof K[k] !== 'number') return; const row = h(`<label class="kv"><span>${k}</span><span><input type="range" min="${lo}" max="${hi}" step="${st}" value="${K[k]}"> <b>${(+K[k]).toFixed(3)}</b></span></label>`); row.querySelector('input').oninput = (e) => { K[k] = +e.target.value; row.querySelector('b').textContent = (+e.target.value).toFixed(3); win.dispatchEvent(new Event('resize')); }; look.appendChild(row); });
    if (Array.isArray(K.fov)) K.fov.forEach((v, i) => { const row = h(`<label class="kv"><span>fov[${i}]</span><span><input type="range" min="20" max="90" step="0.5" value="${v}"> <b>${v}</b></span></label>`); row.querySelector('input').oninput = (e) => { K.fov[i] = +e.target.value; row.querySelector('b').textContent = e.target.value; }; look.appendChild(row); });
    const L = panel.querySelector('[data-l]'); L.innerHTML = '';
    Object.entries(K.layers || {}).forEach(([name, cfg]) => { if (typeof cfg?.on !== 'boolean') return; const b = h(`<button aria-pressed="${cfg.on}">${name}</button>`); b.onclick = () => { cfg.on = !cfg.on; b.setAttribute('aria-pressed', cfg.on); win.dispatchEvent(new Event('resize')); }; L.appendChild(b); });
    return true;
  };
  const wait = () => (build() ? null : setTimeout(wait, 500)); wait();
  panel.querySelector('[data-t=toggle]').onclick = () => win.document.dispatchEvent(new KeyboardEvent('keydown', { key: '`', code: 'Backquote', bubbles: true }));
  panel.querySelector('[data-t=rate]').oninput = (e) => hic()?.tiltRate?.(+e.target.value);
  return panel;
}

// WGSL debug views for the curled page ("inception city" module)
export function cityShaderModes(win, frame) {
  const modes = [['final', null], ['normals', 'return vec4f(normalize(cross(dpdx(in.position.xyz), dpdy(in.position.xyz))) * 0.5 + 0.5, 1.0);'], ['shadow term', 'return vec4f(vec3f(key), 1.0);'], ['UV grid', 'return vec4f(fract(in.uv / 100.0), 0.0, 1.0);']];
  const panel = h(`<div class="dbg"><div class="dbg-row"><b>Shader</b><span class="hint">replaces the last <code>return</code> of the page-mesh fragment shader (W L9557) as it compiles; applying reloads the frame</span></div><div class="modes"></div></div>`);
  const box = panel.querySelector('.modes');
  modes.forEach(([name, ret]) => { const b = h(`<button aria-pressed="${name === (sessionStorage.cityMode || 'final')}">${name}</button>`); b.onclick = () => { sessionStorage.cityMode = name; frame.contentWindow.location.reload(); }; box.appendChild(b); });
  const mode = modes.find(([n]) => n === (sessionStorage.cityMode || 'final'));
  if (mode?.[1] && win.__lab?.gpu) win.__lab.gpu.shaderPatches.push((code, label) => (label === 'inception city' ? code.replace(/return vec4f\(colour \* in\.light \* key, 1\.0\);/, mode[1]) : code));
  return panel;
}

export const frameDecode = {
  'inception-frame': {
    match: (b) => b.label === 'inception-frame' || (b.size > 1000 && b.size < 4096),
    show: (d) => {
      if (!d || d.length < 24) return '';
      const n = (i, p = 2) => (+d[i]).toFixed(p);
      const prof = []; for (let i = 0; i < 65 && 24 + i * 4 + 1 < d.length; i++) prof.push([d[24 + i * 4], d[24 + i * 4 + 1]]);
      const xs = prof.map((p) => p[0]), ys = prof.map((p) => p[1]);
      const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
      const path = prof.map(([x, y], i) => `${i ? 'L' : 'M'}${((x - x0) / (x1 - x0 || 1)) * 220 + 5},${55 - ((y - y0) / (y1 - y0 || 1)) * 50}`).join('');
      return `W <span>${n(0, 0)}</span> H <span>${n(1, 0)}</span> T <span>${n(2, 0)}</span> fov <span>${n(4)}</span> pitch <span>${n(5)}</span> rise <span>${n(6)}</span> camY <span>${n(8, 0)}</span> camZ <span>${n(9, 0)}</span>
        <svg viewBox="0 0 230 60" width="230" height="60" style="display:block;margin-top:6px"><path d="${path}" fill="none" stroke="#8e9dff" stroke-width="1.5"/></svg><span>64-node curl profile (y, z)</span>`;
    },
  },
};

export default {
  id: 'site3d', group: 'New Dimension (3D site)', title: 'The 3D site', needs: 'flag',
  blurb: 'The whole page copied into a WebGPU texture every frame, bent along a 64-node curl, extruded into a city of sections with 3D glyph titles, lit with a shadow map, and still clickable thanks to GPU picking.',
  needsNote: 'Needs Chrome’s experimental HTML-in-Canvas API (details in the panel).',
  async mount(stage, side) {
    const frame = await mountSite(stage, 'expo-mode&game');
    const win = frame.contentWindow;
    const sup = supportReport(win);
    side.appendChild(h(`<div class="dbg"><div class="dbg-row"><b>Support</b></div><div class="kv">${sup.checks.map(([k, v]) => `<span>${k}</span><b style="color:${v ? '#7ef0b0' : '#ff9a8a'}">${v ? 'yes' : 'missing'}</b>`).join('')}</div>${sup.ok ? '' : enableHelp}</div>`));
    if (!sup.ok) return {};
    side.appendChild(lookPanel(win));
    side.appendChild(cityShaderModes(win, frame));
    side.appendChild(gpuPanel({ lab: win.__lab, decode: frameDecode, filter: (p) => /inception/.test(p.label) }).panel);
    side.style.gridTemplateColumns = 'repeat(auto-fit, minmax(320px, 1fr))';
    return { win };
  },
  tour: [
    { title: 'The support gate', body: `<p>Four checks, all required: WebGPU, <code>canvas.requestPaint</code>, the newer shape of <code>texElementImage2D</code>, and a GPU queue method that copies a DOM element straight into a texture. If any fails, the corner button never renders, which is why most visitors never see this mode.</p>`, src: { file: S, from: 1, to: 9 } },
    { title: 'Getting in: button, ~ key, ?expo-mode', body: `<p>An entry island owns a small state machine (unsupported, ready, entering, active, failed). It lazy-loads the 450 KB engine plus glyph-outline fonts, then calls the runner. The <code>~</code> key toggles, Escape exits, and <code>?expo-mode</code> enters on load. The lab uses that flag.</p>`, src: [{ file: E, from: 203, to: 266 }, { file: E, from: 283, to: 301 }] },
    { title: 'The tilt is an Animation used as a clock', body: `<p>The runner creates a Web Animation with an empty KeyframeEffect: 800 ms, linear, no target. Its progress is the master amount that every system reads. Playing it forwards tilts the page into 3D, reversing it flattens back. That's how <code>__hic.tiltRate()</code> gives you slow motion.</p>`, src: { file: W, from: 12980, to: 13059 } },
    { title: 'Three canvases and a slotted page', body: `<p>For the page wrapper it builds a sticky WebGPU canvas with <code>layoutsubtree</code>, slots the live page into a <code>&lt;div drawable&gt;</code> inside it, adds a 2D overlay canvas for the final composite, and a third canvas for the background grid on its own GPU device.</p>`, src: { file: W, from: 13060, to: 13121 } },
    { title: 'Page to texture, with dirty rects', body: `<p>On each <code>paint</code> event the visible band of the page is copied into an <code>rgba8unorm</code> texture with a full mip chain, using <code>copyElementImageToTexture</code>. Full uploads are throttled to once a second; in between, only live canvases, videos and animating stages are re-copied as small patches and blitted into place. A 3 s watchdog fails the mode if the first paint never arrives.</p>`, src: [{ file: W, from: 82, to: 98 }, { file: W, from: 13803, to: 13860 }, { file: W, from: 10468, to: 10514 }] },
    { title: 'Bending the page: a 64-node curl', body: `<p>The side view of the page is a polyline of 64 segments. Each segment's angle grows as <code>expm1(sharpness·u)</code>, so the page stays flat near you and curls away into the distance. The camera rig eases pitch from −90° (looking straight down, which is the flat page) to −30.2°. The same profile goes to the GPU as 65 vec4s and the vertex shader's <code>bend()</code> places every point. Drag <b>sharpness</b> and <b>pitch</b> in the Look panel.</p>`, src: [{ file: W, from: 565, to: 644 }, { file: W, from: 9201, to: 9215 }] },
    { title: 'A city of sections', body: `<p>A time-sliced DOM scan (3 ms per slice, up to 900 blocks) keeps elements with backgrounds, media or titles and measures their rows. Each becomes an extruded block whose height grows with distance down the page. Buttons float and tilt; phone mockups become tilted slabs. Clicking a card raises it on a spring.</p>`, src: [{ file: W, from: 1711, to: 1760 }, { file: W, from: 1166, to: 1216 }, { file: W, from: 2059, to: 2118 }] },
    { title: '3D titles with Slug glyphs', body: `<p>Headings are rebuilt from glyph-outline fonts: walls tessellated from the outlines, faces filled using the Slug coverage algorithm in WGSL. They stand up 90° and float 60 px; letters spin on hover and wave on click.</p>`, src: [{ file: W, from: 10875, to: 10937 }, { file: W, from: 11638, to: 11670 }] },
    { title: 'Key light and a cached shadow map', body: `<p>A fixed key light (azimuth −41°, elevation 35°) renders an oblique orthographic depth16 shadow map of the flat strip at half a texel per pixel. City and title casters are cached and only re-rendered when stale; product shadows are drawn on top each frame. The fragment shader samples it with 3×3 PCF. Try the <b>shadow term</b> shader view.</p>`, src: [{ file: W, from: 9407, to: 9486 }, { file: W, from: 9379, to: 9406 }] },
    { title: 'GPU picking keeps the DOM clickable', body: `<p>On pointer move, a 1×1 scissored pass draws pick variants that encode the page-texture coordinate into RGBA8, copies that one pixel to a buffer and reads it back with <code>mapAsync</code>. The live <code>&lt;div drawable&gt;</code> is then translated so the real element sits under your real pointer. Hover, click and focus all work on the actual DOM, in 3D.</p>`, src: [{ file: W, from: 12101, to: 12145 }, { file: W, from: 13512, to: 13571 }] },
    { title: 'Pass order and the frame uniform', body: `<p>Per frame: shadow passes, then one 4× MSAA pass drawing city, titles, product and overlays, resolved and copied to the canvas, then composited in 2D over the grid. A single <code>inception-frame</code> uniform carries size, camera, light, the 65-entry profile and 16 section colour bands. The inspector decodes it live.</p>`, src: [{ file: W, from: 12047, to: 12097 }, { file: W, from: 9316, to: 9376 }] },
    { title: 'The ball game at the bottom', body: `<p>Scroll past the end of the page and a ball appears. Roll it up the page: steer, brake and hop, eat graph nodes and words to grow (radius is the cube root of what you've eaten), avoid holes. It has 120 Hz roll physics, oriented-box collisions, a follow camera and a Web Audio score with beat-quantised pickup ticks.</p>`, src: [{ file: W, from: 161, to: 231 }, { file: W, from: 3158, to: 3192 }, { file: G, from: 90, to: 129 }] },
  ],
};
