// Exponential Socks: Shopify's real WebGPU sock engine with shader debug views and a uniform decoder.
import { gpuPanel } from '../tools.js';
import { MOD, islandProps } from '../runtime.js';

const F = 'sockScene.client-cCVHhDpv.js', S = 'sock-Cpqwfjai.wgsl', A = 'MerchArtwork-D4a1F9Ph.js', M = 'MerchModal-C6y7MVEw.js', GL = 'gltf-CF5uy7xI.js';
const GLB = 'https://cdn.shopify.com/b/shopify-brochure2-assets/8a9ad3fd4eb3977ea5d2a2cb3c71fab5.glb';
const h = (s) => { const t = document.createElement('template'); t.innerHTML = s.trim(); return t.content.firstElementChild; };
const LAB = window.__lab;

// debug views: replace the fragment shader's final return with one of its own locals
const MODES = [
  ['final', null, 'Shipping output: tonemapped, sRGB.'],
  ['normals', 'return vec4f(normal * 0.5 + 0.5, 1.0);', 'Bumped normal after the knit relief.'],
  ['stitch coords', 'return vec4f(fract(mix(footStitch, legStitch, onLeg)), onLeg, 1.0);', 'Red/green = position inside each stitch cell, blue = leg vs foot blend.'],
  ['leg/foot blend', 'return vec4f(vec3f(onLeg), 1.0);', 'Where the leg tube hands over to the foot tube at the ankle.'],
  ['knit height', 'return vec4f(vec3f(height), 1.0);', 'The jersey "V" height field.'],
  ['LOD fade', 'return vec4f(vec3f(detail), 1.0);', 'White = full stitch detail; dark = faded to the cheap rib because stitches are under a pixel.'],
  ['print mask', 'return vec4f(vec3f(art), 1.0);', 'Alpha-only calf and toe prints projected without UVs.'],
  ['occlusion', 'return vec4f(vec3f(occlusion), 1.0);', 'Cheap AO from stitch height.'],
  ['albedo', 'return vec4f(srgb(albedo), 1.0);', 'Knit colour mixed with print colour, per-stitch shade and AO.'],
  ['ambient', 'return vec4f(srgb(vec3f(ambient)), 1.0);', 'Spherical-harmonic fit of the room environment.'],
  ['key light', 'return vec4f(srgb(neutral(keyLight)), 1.0);', 'Warm key from the upper right.'],
  ['rim light', 'return vec4f(srgb(neutral(rimLight * 3.0)), 1.0);', 'Cool rim from behind, boosted ×3 to see it.'],
  ['sheen', 'return vec4f(srgb(neutral(cloth * 3.0)), 1.0);', 'Charlie cloth sheen lobe, boosted ×3.'],
];
let currentMode = 'final';
if (LAB?.gpu) LAB.gpu.shaderPatches.push((code) => {
  if (!/LEG_WALES/.test(code)) return code;
  const m = MODES.find(([n]) => n === currentMode);
  return m?.[1] ? code.replace(/return vec4f\(srgb\(neutral\(color\)\), 1\.0\);/, m[1]) : code;
});

const uniformDecode = {
  'sock uniforms (44 floats)': {
    match: (b) => b.size === 176,
    show: (d) => {
      if (!d || d.length < 43) return '';
      const v = (i, n) => [...d.slice(i, i + n)].map((x) => (+x).toFixed(3)).join(', ');
      return `matrix <span>[${v(0, 4)} …]</span><br>rotation <span>[${v(16, 3)} | ${v(20, 3)} | ${v(24, 3)}]</span><br>leg (axisX, axisZ, topY, ankleY) <span>[${v(28, 4)}]</span><br>foot (axisY, axisZ, minX, maxX) <span>[${v(32, 4)}]</span><br>center <span>[${v(36, 4)}]</span><br>calf <span>[${v(40, 4)}]</span>`;
    },
  },
};

export default {
  id: 'sock', group: 'Merch', title: 'Exponential Socks: the engine',
  blurb: 'The real WebGPU sock engine with the real model and shader. The knit is generated in the fragment shader; switch the debug views to see each stage of it.',
  ready: 'mountSockScene running · real sock.glb + sock.wgsl · drag to rotate',
  async mount(stage, side) {
    if (!navigator.gpu) throw new Error('WebGPU is required for the sock engine (the site shows a poster instead).');
    const wrap = h(`<div class="real-stage sock" style="aspect-ratio:1/1;max-height:76vh;margin-inline:auto;position:relative"><canvas style="position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:grab"></canvas><svg aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none"></svg></div>`);
    stage.appendChild(wrap);
    const svg = wrap.querySelector('svg');
    const merch = await islandProps('MerchWidget');
    const specs = merch.presentation?.specs ?? [];
    let canvas = wrap.querySelector('canvas'), scene = null, ac = null, showRings = true, frameShape = '';
    const readout = h(`<p class="readout mono"></p>`); stage.appendChild(readout);
    const onFrame = (f) => {
      if (!f?.rings) return;
      frameShape ||= `onFrame → { ${Object.keys(f).join(', ')} }`;
      svg.setAttribute('viewBox', `0 0 ${canvas.clientWidth} ${canvas.clientHeight}`);
      let out = '';
      if (showRings) f.rings.forEach((ring) => { for (let k = 1; k < ring.length; k++) { const a = ring[k - 1], b = ring[k]; out += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${a.depth > 0 ? '#6ff3ff' : '#ffd36b'}" stroke-width="1" ${a.depth > 0 ? '' : 'stroke-dasharray="3 3" opacity=".8"'}/>`; } });
      (f.anchors || []).forEach((p, i) => { if (Number.isFinite(p?.x)) out += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="none" stroke="#fff" stroke-width="1.5" opacity="${p.depth > -0.1 ? 1 : 0.3}"/><text x="${p.x + 7}" y="${p.y - 6}" fill="#fff" font-size="10" font-family="ui-monospace">${specs[i]?.label ?? i}</text>`; });
      (f.tethers || []).forEach((t) => { if (t && Number.isFinite(t.x)) out += `<circle cx="${t.x}" cy="${t.y}" r="2" fill="#ff7a59"/>`; });
      svg.innerHTML = out;
    };
    async function remount() {
      const pose = scene?.getPose?.();
      ac?.abort(); const fresh = canvas.cloneNode(); canvas.replaceWith(fresh); canvas = fresh;
      ac = new AbortController();
      const { mountSockScene } = await import(MOD.sock);
      scene = await mountSockScene(canvas, ac.signal, GLB, specs, onFrame, (e) => e && (readout.textContent = 'engine error: ' + (e.message || e)));
      if (!scene) throw new Error('mountSockScene returned no scene');
      if (pose) scene.setPose(pose);
      scene.setHeld(false);
    }
    await remount();
    // controls
    const modes = h(`<div class="dbg"><div class="dbg-row"><b>Shader view</b><span class="hint">patches the WGSL as it compiles, then remounts the engine</span></div><div class="modes"></div><p class="hint" data-desc></p></div>`);
    MODES.forEach(([name, , desc]) => { const b = h(`<button aria-pressed="${name === currentMode}">${name}</button>`); b.onclick = async () => { currentMode = name; modes.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b)); modes.querySelector('[data-desc]').textContent = desc; await remount(); }; modes.querySelector('.modes').appendChild(b); });
    modes.querySelector('[data-desc]').textContent = MODES[0][2];
    const pose = h(`<div class="dbg"><div class="dbg-row"><b>Pose</b><button data-p="hold" aria-pressed="false">Hold spin</button><button data-p="poster">Poster pose</button><button data-p="side">Side</button><button data-p="down">Look down</button><label><input type="checkbox" checked data-p="rings"> engine rings + anchors</label></div><div class="kv" data-k></div></div>`);
    pose.querySelector('[data-p=hold]').onclick = (e) => { const v = e.target.getAttribute('aria-pressed') !== 'true'; e.target.setAttribute('aria-pressed', v); scene.setHeld(v); };
    pose.querySelector('[data-p=poster]').onclick = () => scene.setPose({ yaw: -0.3, pitch: 0.18 });
    pose.querySelector('[data-p=side]').onclick = () => scene.setPose({ yaw: Math.PI / 2, pitch: 0.05 });
    pose.querySelector('[data-p=down]').onclick = () => scene.setPose({ yaw: -0.3, pitch: 0.6 });
    pose.querySelector('[data-p=rings]').onchange = (e) => (showRings = e.target.checked);
    side.append(modes, pose, gpuPanel({ decode: uniformDecode, filter: (p) => /sock/i.test(p.label) }).panel);
    const kv = pose.querySelector('[data-k]');
    const tick = () => { if (!document.body.contains(kv)) return; const p = scene?.getPose?.() || {}; kv.innerHTML = Object.entries(p).map(([k, v]) => `<span>${k}</span><b>${typeof v === 'number' ? v.toFixed(3) : JSON.stringify(v)}</b>`).join('') + `<span>frame</span><b>${frameShape}</b>`; requestAnimationFrame(tick); };
    tick();
    return {};
  },
  tour: [
    { title: 'Mount: canvas, signal, model, specs', body: `<p>The merch tile lazily imports the engine only when its IntersectionObserver fires and WebGPU exists, then calls <code>mountSockScene(canvas, signal, modelUrl, specs, onFrame, onError)</code>. Specs come from the CMS as anchors like "leg, angle 60°, 90% up". It returns a small API (<code>setPose</code>, <code>getPose</code>, <code>setHeld</code>, <code>redraw</code>, <code>getProductAnchor</code>) that the modal also uses.</p>`, src: [{ file: A, from: 160, to: 200 }, { file: F, from: 339, to: 360 }] },
    { title: 'Loading a meshopt-compressed GLB', body: `<p>The model is fetched, gunzipped if the bytes start <code>1f 8b</code>, parsed into JSON and BIN chunks, then each buffer view is decoded by the stock meshoptimizer WASM. Quantised positions (SHORT) and octahedral normals (BYTE) are expanded to floats on the CPU, and the node transform is baked in. 19,510 vertices, no UVs, no materials.</p>`, src: [{ file: F, from: 181, to: 213 }, { file: GL, from: 1, to: 60 }] },
    { title: 'Normalise the sock', body: `<p>The mesh arrives in an arbitrary pose. The engine averages the top 20% (cuff) and bottom 20% (sole), rotates so the foot points along +X, moves the cuff axis to the origin, puts the lowest point at y = 0 and scales the height to 0.9. Every later number assumes this frame.</p>`, src: { file: F, from: 222, to: 251 } },
    { title: 'Measure it for the shader', body: `<p>Using area-weighted triangle centroids it finds the leg axis (triangles above 55% height), the ankle line (0.33h), the foot axis and the mean leg radius. These become the <code>leg</code> and <code>foot</code> uniforms. Spec anchors are found by probing outward and taking the nearest surface patch; that's where the white circles come from.</p>`, src: { file: F, from: 252, to: 337 } },
    { title: 'Pipeline and uniforms', body: `<p>One render pipeline: 4× MSAA, <code>depth24plus</code>, no culling (you can see inside the cuff), premultiplied alpha, pixel ratio capped at 1.5. A single 44-float uniform buffer holds the matrix, rotation, leg, foot, centre and calf parameters; the inspector decodes it live. It only draws when something changes.</p>`, src: [{ file: F, from: 77, to: 110 }, { file: F, from: 139, to: 169 }] },
    { title: 'Stitch coordinates without UVs', body: `<p>Switch to <b>stitch coords</b>. Around the leg, the angle × 144 gives columns and height ÷ 0.0046 gives rows; around the foot it's 120 columns on the foot axis. A smoothstep at the ankle blends them (<b>leg/foot blend</b>). Whole-number stitch counts mean there's no seam where the angle wraps.</p>`, src: [{ file: S, from: 33, to: 44 }, { file: S, from: 221, to: 240 }] },
    { title: 'The jersey "V" stitch', body: `<p>Switch to <b>knit height</b>. Each cell evaluates a V-shaped yarn profile for its own row and the rows above and below, keeping the tallest, plus a per-stitch shade from a hash. The slope of that height field bends the normal (<b>normals</b>).</p>`, src: [{ file: S, from: 86, to: 120 }, { file: S, from: 240, to: 258 }] },
    { title: 'Fading detail before it shimmers', body: `<p>Switch to <b>LOD fade</b> and zoom the browser out or in. The shader measures how many stitch rows fall in one pixel. Between 0.2 and 0.35 the V's fade to a cheap sine rib, and fuzz octaves fade too. This is why the sock never sparkles when small.</p>`, src: [{ file: S, from: 155, to: 170 }, { file: S, from: 241, to: 248 }] },
    { title: 'Prints projected by angle', body: `<p>Switch to <b>print mask</b>. The calf print is an alpha-only PNG placed by angle-from-the-back and distance-below-the-cuff; the toe print is a planar projection. The alpha mixes knit blue toward off-white and is modulated by stitch height so the print sits in the knit.</p>`, src: [{ file: S, from: 68, to: 74 }, { file: S, from: 260, to: 280 }] },
    { title: 'Fabric lighting', body: `<p>Step through <b>ambient</b>, <b>key light</b>, <b>rim light</b> and <b>sheen</b>. A spherical-harmonic fit of an environment, a warm key, a cool rim, very rough GGX specular (0.94) and a Charlie sheen lobe for fuzz, then Khronos Neutral tonemapping and manual sRGB. Inside faces are darkened to 30%.</p>`, src: [{ file: S, from: 46, to: 60 }, { file: S, from: 172, to: 218 }, { file: S, from: 280, to: 311 }] },
    { title: 'Rings handed to SVG each frame', body: `<p>The engine projects five tilted orbit rings, the anchors and the tethers with the same matrix, and passes them to <code>onFrame</code>. MerchArtwork splits each ring where its depth crosses zero: the back part goes in an SVG under the canvas, the front part in one over it. Cyan/yellow here are those exact points. Letters ride a Catmull-Rom curve and fade with depth.</p>`, src: [{ file: F, from: 214, to: 221 }, { file: A, from: 40, to: 110 }] },
    { title: 'Drag, fling, idle spin', body: `<p>Dragging turns 0.012 rad per pixel horizontally and 0.006 vertically (pitch clamped −0.3 to 0.6). Releasing keeps the velocity, decaying at <code>e^(−3dt)</code>, unless the pointer had stopped for 80 ms. A 0.25 rad/s idle spin ramps back in 1 to 1.5 s later.</p>`, src: { file: F, from: 540, to: 610 } },
    { title: 'Tile to modal without a jump', body: `<p>Opening the modal moves the live stage into the top layer with <code>popover</code>, FLIP-animates it over 840 ms, and copies the pose between engine instances with <code>getPose</code>/<code>setPose</code>. Closing returns yaw along the shortest arc to the poster angle so it lines up with the static image again.</p>`, src: { file: M, from: 1, to: 60 } },
  ],
};
