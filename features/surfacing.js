// Product explode ("surfacing"): real widget, WebGPU inspector, GLB node inspector.
import { gpuPanel } from '../tools.js';
import { mountReal, stageProps } from '../runtime.js';

const F = 'surfacing-Di5esi6_.js', MW = 'mesh.wgsl-CahI0rXV.js', SF = 'surface-Be90gCgo.js', GL = 'gltf-CF5uy7xI.js';
const GLBS = ['63862047674286025ecfd47299409384', '01a19c36bdf203ffdd184f131e009f69', '4f1440c14d0b1a908ce40a7d20d3aaf4', 'b5c02ef3e879e5ec2a98b3bdde10b9a9'].map((x) => `https://cdn.shopify.com/b/shopify-brochure2-assets/${x}.glb`);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export async function inspectGlb(url) {
  const card = document.createElement('div'); card.className = 'glb';
  let buf = new Uint8Array(await (await fetch(url)).arrayBuffer());
  if (buf[0] === 0x1f && buf[1] === 0x8b) buf = new Uint8Array(await new Response(new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer());
  const len = new DataView(buf.buffer).getUint32(12, true);
  const g = JSON.parse(new TextDecoder().decode(buf.subarray(20, 20 + len)));
  const parts = (g.nodes || []).filter((n) => n.extras?.explode), anchors = (g.nodes || []).filter((n) => /^anchor_/.test(n.name || ''));
  const has = (p) => parts.some((n) => n.name === p);
  const name = has('part_lens_barrel') ? 'Instant camera' : has('part_shade') ? 'Mushroom lamp' : has('part_lid') ? 'Dutch oven' : has('part_grille') ? 'Portable radio' : 'Model';
  const tris = (g.meshes || []).reduce((s, m) => s + m.primitives.reduce((t, p) => t + (p.indices != null ? g.accessors[p.indices].count / 3 : 0), 0), 0);
  const f2 = (a) => a.map((v) => (+v).toFixed(2)).join(', ');
  card.innerHTML = `<h4>${name} <span>${esc(url.split('../shop/').pop())} · ${(buf.length / 1024).toFixed(0)} KB unpacked · ${Math.round(tris).toLocaleString()} tris · ${g.nodes.length} nodes · ${g.materials?.length || 0} materials</span></h4>
    <p class="mono">requires: ${esc((g.extensionsRequired || []).join(', ') || 'none')}</p>
    <table class="k">${parts.map((n) => `<tr><td>${esc(n.name)}</td><td>explode [${f2(n.extras.explode)}]</td></tr>`).join('')}
    ${anchors.map((n) => `<tr><td>${esc(n.name)}</td><td>wire anchor [${f2(n.translation || [0, 0, 0])}]</td></tr>`).join('')}
    ${(g.materials || []).map((m) => { const p = m.pbrMetallicRoughness || {}; const cc = m.extensions?.KHR_materials_clearcoat; return `<tr><td>${esc(m.name)}${/^body/.test(m.name) ? ' ★' : ''}</td><td>${p.baseColorFactor ? 'rgb ' + f2(p.baseColorFactor.slice(0, 3)) : ''} · metal ${(+(p.metallicFactor ?? 1)).toFixed(2)} · rough ${(+(p.roughnessFactor ?? 1)).toFixed(2)}${cc ? ' · clearcoat ' + (+cc.clearcoatFactor).toFixed(2) : ''}${m.doubleSided ? ' · double-sided' : ''}</td></tr>`; }).join('')}</table>`;
  return card;
}

export default {
  id: 'surfacing', group: 'Hero rail', title: 'Product explode',
  blurb: 'Real-time glTF products in a custom WebGPU renderer: node names drive the explode and the wires, every motion is a spring, and the lighting is an analytic studio rather than an HDRI.',
  ready: 'mountSurfacing running · hover to explode · drag to spin · click for the next product · use the Data / AI Chats buttons',
  html: '<h3 class="sub">Inside the real GLBs <span class="hint">★ = recolourable body material</span></h3><div class="glbs" id="glbs"></div>',
  async mount(stage, side) {
    const host = document.createElement('div'); host.className = 'real-stage surf'; stage.appendChild(host);
    const props = await stageProps('surfacing');
    await mountReal('surfacing', host, { strings: props.strings, locale: 'en' });
    side.appendChild(gpuPanel({
      filter: (p) => !/merch-sock|inception/.test(p.label),
      decode: { 'per-draw uniforms (256 B dynamic offsets)': { match: (b) => b.size >= 256 && b.size % 256 === 0 && b.size <= 8192, show: (d) => d ? `first draw world matrix <span>[${[...d.slice(0, 4)].map((v) => v.toFixed(2)).join(', ')} …]</span><br>${Math.floor(d.length / 64)} draw slots written this frame` : '' } },
    }).panel);
    return {};
  },
  async after(page) { const box = page.querySelector('#glbs'); for (const u of GLBS) { try { box.appendChild(await inspectGlb(u)); } catch (e) { box.insertAdjacentHTML('beforeend', `<p class="bad">${u}: ${e.message}</p>`); } } },
  tour: [
    { title: 'Device and canvas', body: `<p>A shared helper requests an adapter and device, configures a <code>webgpu</code> context with premultiplied alpha, and throws a dedicated <code>WebGPUUnavailable</code> error that callers treat as a quiet fallback. An HDR path exists (rgba16float, extended tonemapping) but isn't enabled here.</p>`, src: { file: SF, from: 1, to: 60 } },
    { title: 'Products and their files', body: `<p>Four products, each a GLB on the brochure CDN with a category, colours and price. Strings are localisable. The GLBs use meshopt compression and quantisation, decoded on load into one float32 buffer per attribute (positions and normals only; no textures).</p>`, src: [{ file: F, from: 813, to: 837 }, { file: GL, from: 1, to: 60 }] },
    { title: 'The renderer: one pipeline, dynamic offsets', body: `<p>4× MSAA, depth24plus, no culling. Per-frame data (view-projection, camera, light, environment) is one bind group; every draw gets a 256-byte slot in a dynamic-offset uniform buffer for its world matrix, normal matrix, colour and metallic/roughness/clearcoat. Click a pipeline in the inspector to skip it.</p>`, src: { file: F, from: 66, to: 165 } },
    { title: 'An analytic studio instead of an HDRI', body: `<p>Lighting is maths, not an image: a room term with an <code>erf</code> floor horizon plus up to eight rectangular light panels. Diffuse from each panel uses Lambert's polygon form factor; specular is the panel blurred in angle space by roughness. Then GGX with clearcoat and the Khronos Neutral tonemap.</p>`, src: [{ file: F, from: 297, to: 357 }, { file: MW, from: 43, to: 140 }] },
    { title: 'Node names are behaviour', body: `<p>Scroll down to the GLB tables. Groups named <code>part_*</code> carry an <code>extras.explode</code> vector, <code>anchor_*</code> empties mark where wires attach, and materials named <code>body*</code> get recoloured. Artists control the interaction from Blender without touching code.</p>`, src: { file: F, from: 1270, to: 1325 } },
    { title: 'Springs at 240 Hz', body: `<p>Every animated value is a damped spring with stiffness <code>k</code> and damping <code>2ζ√k</code>, integrated with semi-implicit Euler in fixed 1/240 s sub-steps so stiff springs stay stable at any frame rate. The loop stops when every spring is within 1e-4 of its target.</p>`, src: [{ file: F, from: 909, to: 950 }, { file: F, from: 1033, to: 1043 }] },
    { title: 'Explode with a cascade', body: `<p>Hover and each part springs out by 0.55× its explode vector. Stiffness falls from 150 to 85 with distance, so far parts arrive later: the cascade you see. The yaw also eases from −10° to −42° to show the parts.</p>`, src: { file: F, from: 1159, to: 1200 } },
    { title: 'Recolour in linear light', body: `<p>Swatch colours are converted to linear RGB and the body colour springs there (critically damped, k 90), so blends never pass through muddy greys. Gloss gets a small HSL bump and the inside is darkened to 36%.</p>`, src: { file: F, from: 838, to: 908 } },
    { title: 'Wires that draw themselves', body: `<p>The ring and leaders are SVG. Each leader is a path with <code>pathLength="1"</code>, so <code>dashoffset = 1 − progress</code> draws it on regardless of its real length. Packets ride <code>getPointAtLength(length·smoothstep(t))</code> with opacity fading at both ends.</p>`, src: [{ file: F, from: 385, to: 527 }, { file: F, from: 588, to: 647 }] },
    { title: 'The orbit ring and its dots', body: `<p>Six dots orbit the ring at slightly different speeds. When a side panel opens they steer toward that port and respawn on the far side, which reads as a flow of data into the wires.</p>`, src: { file: F, from: 660, to: 812 } },
    { title: 'Drag, inertia, click', body: `<p>Dragging adds 0.012 rad per pixel of yaw with <code>e^(−3.2t)</code> inertia; 1.4 s after release the offset relaxes back. Under 4 px of movement counts as a click and swaps to the next product with a swap spring (k 170, ζ 0.72).</p>`, src: { file: F, from: 1630, to: 1680 } },
  ],
};
