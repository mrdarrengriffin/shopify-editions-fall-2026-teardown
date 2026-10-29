// Mesh viewer for the real GLBs: decodes meshopt with Shopify's own decoder module, shows parts, anchors, materials.
const PALETTE = ['#ff7a59', '#4ce0a1', '#8e9dff', '#ffcf5c', '#c06bff', '#5bd0ff', '#ff5fa2', '#b6ff6a', '#ffa94d', '#7ef0ff', '#e0e0e0', '#9a8cff'];
const hex = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16) / 255);

// ---------- GLB parsing ----------
const CT = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array };
const NORM = { 5120: 127, 5121: 255, 5122: 32767, 5123: 65535 };
const NCOMP = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 };

export async function loadGlb(url) {
  let buf = new Uint8Array(await (await fetch(url)).arrayBuffer());
  if (buf[0] === 0x1f && buf[1] === 0x8b) buf = new Uint8Array(await new Response(new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer());
  const dv = new DataView(buf.buffer, buf.byteOffset);
  const jsonLen = dv.getUint32(12, true);
  const gltf = JSON.parse(new TextDecoder().decode(buf.subarray(20, 20 + jsonLen)));
  const binStart = 20 + jsonLen + 8, binLen = dv.getUint32(20 + jsonLen, true);
  const bin = buf.subarray(binStart, binStart + binLen);
  const { MeshoptDecoder } = await import('./_mod/meshopt_decoder-BK2qI-8z.js');
  await MeshoptDecoder.ready;
  const views = gltf.bufferViews.map((bv) => {
    const ext = bv.extensions?.EXT_meshopt_compression;
    if (ext) {
      const out = new Uint8Array(ext.count * ext.byteStride);
      MeshoptDecoder.decodeGltfBuffer(out, ext.count, ext.byteStride, bin.subarray(ext.byteOffset || 0, (ext.byteOffset || 0) + ext.byteLength), ext.mode, ext.filter || 'NONE');
      return { data: out, stride: ext.byteStride };
    }
    return { data: bin.subarray(bv.byteOffset || 0, (bv.byteOffset || 0) + bv.byteLength), stride: bv.byteStride || 0 };
  });
  const read = (ai) => {
    const a = gltf.accessors[ai], v = views[a.bufferView], n = NCOMP[a.type], T = CT[a.componentType];
    const esz = T.BYTES_PER_ELEMENT, stride = v.stride || n * esz, base = a.byteOffset || 0;
    const out = new Float32Array(a.count * n), dvv = new DataView(v.data.buffer, v.data.byteOffset, v.data.byteLength);
    const get = { 5120: 'getInt8', 5121: 'getUint8', 5122: 'getInt16', 5123: 'getUint16', 5125: 'getUint32', 5126: 'getFloat32' }[a.componentType];
    for (let i = 0; i < a.count; i++) for (let c = 0; c < n; c++) {
      let x = dvv[get](base + i * stride + c * esz, true);
      if (a.normalized) x = Math.max(x / NORM[a.componentType], -1);
      out[i * n + c] = x;
    }
    return out;
  };
  // node world matrices
  const mats = [], parent = [];
  gltf.nodes.forEach((n, i) => (n.children || []).forEach((c) => (parent[c] = i)));
  const local = (n) => n.matrix ? n.matrix.slice() : compose(n.translation || [0, 0, 0], n.rotation || [0, 0, 0, 1], n.scale || [1, 1, 1]);
  const world = (i) => mats[i] ||= (parent[i] != null ? mul(world(parent[i]), local(gltf.nodes[i])) : local(gltf.nodes[i]));
  const partOf = (i) => { for (let k = i; k != null; k = parent[k]) if (/^part_/.test(gltf.nodes[k].name || '')) return k; return null; };
  const parts = new Map(), pieces = [];
  gltf.nodes.forEach((node, i) => {
    if (node.mesh == null) return;
    const M = world(i), pk = partOf(i);
    const partName = pk != null ? gltf.nodes[pk].name : '(body)';
    if (!parts.has(partName)) parts.set(partName, { name: partName, explode: pk != null ? gltf.nodes[pk].extras?.explode || [0, 0, 0] : [0, 0, 0], colour: PALETTE[parts.size % PALETTE.length], tris: 0 });
    gltf.meshes[node.mesh].primitives.forEach((p) => {
      const pos = read(p.attributes.POSITION), idx = p.indices != null ? read(p.indices) : Float32Array.from({ length: pos.length / 3 }, (_, k) => k);
      for (let k = 0; k < pos.length; k += 3) { const [x, y, z] = xform(M, pos[k], pos[k + 1], pos[k + 2]); pos[k] = x; pos[k + 1] = y; pos[k + 2] = z; }
      const mat = gltf.materials?.[p.material];
      pieces.push({ part: partName, pos, idx: Uint32Array.from(idx), material: mat?.name || '—', base: mat?.pbrMetallicRoughness?.baseColorFactor || [0.8, 0.8, 0.8, 1] });
      parts.get(partName).tris += idx.length / 3;
    });
  });
  const anchors = gltf.nodes.map((n, i) => [n, i]).filter(([n]) => /^anchor_/.test(n.name || '')).map(([n, i]) => ({ name: n.name, p: xform(world(i), 0, 0, 0) }));
  const materials = (gltf.materials || []).map((m) => ({ name: m.name, base: m.pbrMetallicRoughness?.baseColorFactor || [1, 1, 1, 1], metal: m.pbrMetallicRoughness?.metallicFactor ?? 1, rough: m.pbrMetallicRoughness?.roughnessFactor ?? 1, clearcoat: m.extensions?.KHR_materials_clearcoat?.clearcoatFactor }));
  // bounds
  let lo = [1e9, 1e9, 1e9], hi = [-1e9, -1e9, -1e9];
  pieces.forEach((pc) => { for (let k = 0; k < pc.pos.length; k += 3) for (let c = 0; c < 3; c++) { lo[c] = Math.min(lo[c], pc.pos[k + c]); hi[c] = Math.max(hi[c], pc.pos[k + c]); } });
  return { gltf, pieces, parts: [...parts.values()], anchors, materials, lo, hi, bytes: buf.length, extensions: gltf.extensionsRequired || [] };
}

function compose(t, q, s) {
  const [x, y, z, w] = q, x2 = x + x, y2 = y + y, z2 = z + z;
  const xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2, wx = w * x2, wy = w * y2, wz = w * z2;
  return [(1 - (yy + zz)) * s[0], (xy + wz) * s[0], (xz - wy) * s[0], 0, (xy - wz) * s[1], (1 - (xx + zz)) * s[1], (yz + wx) * s[1], 0, (xz + wy) * s[2], (yz - wx) * s[2], (1 - (xx + yy)) * s[2], 0, t[0], t[1], t[2], 1];
}
function mul(a, b) { const r = new Array(16).fill(0); for (let c = 0; c < 4; c++) for (let rr = 0; rr < 4; rr++) for (let k = 0; k < 4; k++) r[c * 4 + rr] += a[k * 4 + rr] * b[c * 4 + k]; return r; }
const xform = (m, x, y, z) => [m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]];

// ---------- WebGL2 viewer ----------
const VS = `#version 300 es
layout(location=0) in vec3 p; uniform mat4 uMVP; uniform vec3 uOff; out vec3 vW;
void main(){ vW = p + uOff; gl_Position = uMVP * vec4(vW, 1.0); }`;
const FS = `#version 300 es
precision highp float; in vec3 vW; out vec4 o; uniform vec3 uCol; uniform int uMode; uniform float uAlpha;
void main(){
  vec3 n = normalize(cross(dFdx(vW), dFdy(vW)));
  if (uMode == 3) { o = vec4(n * 0.5 + 0.5, 1.0); return; }
  if (uMode == 4) { o = vec4(uCol, uAlpha); return; }
  float l = 0.35 + 0.65 * max(dot(n, normalize(vec3(0.5, 0.8, 0.6))), 0.0) + 0.15 * max(dot(n, normalize(vec3(-0.6, 0.2, -0.7))), 0.0);
  o = vec4(pow(uCol * l, vec3(1.0 / 2.2)), 1.0);
}`;

export function meshViewer(host, model, { mode = 'parts', label = true } = {}) {
  host.innerHTML = '';
  host.classList.add('mv');
  const canvas = document.createElement('canvas'); host.appendChild(canvas);
  const labels = document.createElement('div'); labels.className = 'mv-labels'; host.appendChild(labels);
  const gl = canvas.getContext('webgl2', { antialias: true, alpha: true });
  const sh = (t, s) => { const x = gl.createShader(t); gl.shaderSource(x, s); gl.compileShader(x); return x; };
  const prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
  const U = (n) => gl.getUniformLocation(prog, n);
  const size = [0, 1, 2].map((c) => model.hi[c] - model.lo[c]), centre = [0, 1, 2].map((c) => (model.hi[c] + model.lo[c]) / 2), radius = Math.hypot(...size) / 2 || 1;
  const pieces = model.pieces.map((pc) => {
    const vao = gl.createVertexArray(); gl.bindVertexArray(vao);
    const vb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vb); gl.bufferData(gl.ARRAY_BUFFER, pc.pos, gl.STATIC_DRAW); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    const ib = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, pc.idx, gl.STATIC_DRAW);
    // edge list for wireframe
    const edges = new Uint32Array(pc.idx.length * 2); for (let t = 0; t < pc.idx.length; t += 3) { const [a, b, c] = [pc.idx[t], pc.idx[t + 1], pc.idx[t + 2]]; edges.set([a, b, b, c, c, a], t * 2); }
    const evao = gl.createVertexArray(); gl.bindVertexArray(evao); gl.bindBuffer(gl.ARRAY_BUFFER, vb); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    const eb = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, eb); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, edges, gl.STATIC_DRAW);
    return { ...pc, vao, evao, count: pc.idx.length, ecount: edges.length, colour: hex(model.parts.find((p) => p.name === pc.part)?.colour || '#cccccc') };
  });
  const st = { yaw: -0.6, pitch: 0.35, dist: radius * 4.4, explode: 0, mode, highlight: null, raf: 0 };
  const persp = (f, a, n, fa) => { const t = 1 / Math.tan(f / 2); return [t / a, 0, 0, 0, 0, t, 0, 0, 0, 0, (fa + n) / (n - fa), -1, 0, 0, (2 * fa * n) / (n - fa), 0]; };
  function draw() {
    st.raf = 0;
    const r = canvas.getBoundingClientRect(), d = Math.min(2, devicePixelRatio);
    if (canvas.width !== Math.round(r.width * d)) { canvas.width = Math.round(r.width * d); canvas.height = Math.round(r.height * d); }
    gl.viewport(0, 0, canvas.width, canvas.height); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); gl.enable(gl.DEPTH_TEST);
    const cy = Math.cos(st.yaw), sy = Math.sin(st.yaw), cp = Math.cos(st.pitch), sp = Math.sin(st.pitch);
    const eye = [centre[0] + st.dist * cp * sy, centre[1] + st.dist * sp, centre[2] + st.dist * cp * cy];
    const f = [centre[0] - eye[0], centre[1] - eye[1], centre[2] - eye[2]], fl = Math.hypot(...f); f.forEach((_, i) => (f[i] /= fl));
    const s = [f[1] * 0 - f[2] * 1, f[2] * 0 - f[0] * 0, f[0] * 1 - f[1] * 0], sl = Math.hypot(...s); s.forEach((_, i) => (s[i] /= sl));
    const u = [s[1] * f[2] - s[2] * f[1], s[2] * f[0] - s[0] * f[2], s[0] * f[1] - s[1] * f[0]];
    const V = [s[0], u[0], -f[0], 0, s[1], u[1], -f[1], 0, s[2], u[2], -f[2], 0, -(s[0] * eye[0] + s[1] * eye[1] + s[2] * eye[2]), -(u[0] * eye[0] + u[1] * eye[1] + u[2] * eye[2]), f[0] * eye[0] + f[1] * eye[1] + f[2] * eye[2], 1];
    const MVP = mul(persp(0.6, canvas.width / canvas.height, radius * 0.05, radius * 20), V);
    gl.useProgram(prog); gl.uniformMatrix4fv(U('uMVP'), false, MVP);
    const offOf = (name) => { const p = model.parts.find((q) => q.name === name); return (p?.explode || [0, 0, 0]).map((v) => v * st.explode * radius * 0.9); };
    pieces.forEach((pc) => {
      const off = offOf(pc.part);
      gl.uniform3f(U('uOff'), ...off);
      const dim = st.highlight && st.highlight !== pc.part;
      const col = st.mode === 'materials' ? pc.base.slice(0, 3) : st.mode === 'clay' ? [0.75, 0.76, 0.8] : pc.colour;
      if (st.mode !== 'wireframe') {
        gl.uniform1i(U('uMode'), st.mode === 'normals' ? 3 : 0); gl.uniform3f(U('uCol'), ...(dim ? col.map((c) => c * 0.25) : col));
        gl.bindVertexArray(pc.vao); gl.drawElements(gl.TRIANGLES, pc.count, gl.UNSIGNED_INT, 0);
      }
      if (st.mode === 'wireframe' || st.wire) {
        gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.uniform1i(U('uMode'), 4); gl.uniform1f(U('uAlpha'), st.mode === 'wireframe' ? (dim ? 0.12 : 0.55) : 0.25); gl.uniform3f(U('uCol'), ...(st.mode === 'wireframe' ? pc.colour : [0, 0, 0]));
        gl.bindVertexArray(pc.evao); gl.drawElements(gl.LINES, pc.ecount, gl.UNSIGNED_INT, 0); gl.disable(gl.BLEND);
      }
    });
    // labels: parts at their centroid, anchors as markers
    if (label) {
      const proj = (p) => { const x = MVP[0] * p[0] + MVP[4] * p[1] + MVP[8] * p[2] + MVP[12], y = MVP[1] * p[0] + MVP[5] * p[1] + MVP[9] * p[2] + MVP[13], w = MVP[3] * p[0] + MVP[7] * p[1] + MVP[11] * p[2] + MVP[15]; return [(x / w * 0.5 + 0.5) * r.width, (0.5 - y / w * 0.5) * r.height]; };
      let html = '';
      if (st.showParts) model.parts.forEach((p) => { if (p.name === '(body)') return; const pcs = model.pieces.filter((q) => q.part === p.name); if (!pcs.length) return; const c = [0, 0, 0]; let n = 0; pcs.forEach((q) => { for (let k = 0; k < q.pos.length; k += 300) { c[0] += q.pos[k]; c[1] += q.pos[k + 1]; c[2] += q.pos[k + 2]; n++; } }); const o = offOf(p.name); const [x, y] = proj([c[0] / n + o[0], c[1] / n + o[1], c[2] / n + o[2]]); html += `<span class="mv-part" style="left:${x}px;top:${y}px;--c:${p.colour}">${p.name.replace('part_', '')}</span>`; });
      if (st.showAnchors) model.anchors.forEach((a) => { const [x, y] = proj(a.p); html += `<span class="mv-anchor" style="left:${x}px;top:${y}px">◆ ${a.name.replace('anchor_', '')}</span>`; });
      labels.innerHTML = html;
    }
  }
  const redraw = () => (st.raf ||= requestAnimationFrame(draw));
  let drag = null;
  canvas.addEventListener('pointerdown', (e) => { drag = [e.clientX, e.clientY]; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', (e) => { if (!drag) return; st.yaw += (e.clientX - drag[0]) * 0.01; st.pitch = Math.max(-1.4, Math.min(1.4, st.pitch + (e.clientY - drag[1]) * 0.01)); drag = [e.clientX, e.clientY]; redraw(); });
  canvas.addEventListener('pointerup', () => (drag = null));
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); st.dist *= Math.exp(e.deltaY * 0.001); redraw(); }, { passive: false });
  new ResizeObserver(redraw).observe(canvas);
  // idle turntable
  let spin = true; const turn = () => { if (!host.isConnected) return; if (spin && !drag) { st.yaw += 0.004; redraw(); } requestAnimationFrame(turn); }; turn();
  host.addEventListener('pointerdown', () => (spin = false));
  return { st, redraw, set(k, v) { st[k] = v; redraw(); }, spin(v) { spin = v; } };
}
