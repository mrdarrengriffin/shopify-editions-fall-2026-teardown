import { _ as L } from "./preload-helper-CZudbPKK.js";
function g() {
  const e = new Float32Array(16);
  return (e[0] = e[5] = e[10] = e[15] = 1), e;
}
const B = new Float32Array(16);
function I(e, t, n) {
  for (let s = 0; s < 4; s++)
    for (let o = 0; o < 4; o++) {
      let r = 0;
      for (let i = 0; i < 4; i++) r += t[i * 4 + o] * n[s * 4 + i];
      B[s * 4 + o] = r;
    }
  return e.set(B), e;
}
function j(e) {
  const t = [
      e[5] * e[10] - e[6] * e[9],
      e[6] * e[8] - e[4] * e[10],
      e[4] * e[9] - e[5] * e[8],
      e[2] * e[9] - e[1] * e[10],
      e[0] * e[10] - e[2] * e[8],
      e[1] * e[8] - e[0] * e[9],
      e[1] * e[6] - e[2] * e[5],
      e[2] * e[4] - e[0] * e[6],
      e[0] * e[5] - e[1] * e[4],
    ],
    n = Math.sign(e[0] * t[0] + e[1] * t[1] + e[2] * t[2]) || 1;
  for (let s = 0; s < t.length; s++) t[s] *= n;
  return t;
}
function O(e, [t, n, s], [o, r, i, a], [c, h, f]) {
  const u = o * o * 2,
    l = r * r * 2,
    y = i * i * 2,
    d = o * r * 2,
    p = o * i * 2,
    w = r * i * 2,
    m = a * o * 2,
    E = a * r * 2,
    M = a * i * 2;
  return (
    (e[0] = (1 - l - y) * c),
    (e[1] = (d + M) * c),
    (e[2] = (p - E) * c),
    (e[3] = 0),
    (e[4] = (d - M) * h),
    (e[5] = (1 - u - y) * h),
    (e[6] = (w + m) * h),
    (e[7] = 0),
    (e[8] = (p + E) * f),
    (e[9] = (w - m) * f),
    (e[10] = (1 - u - l) * f),
    (e[11] = 0),
    (e[12] = t),
    (e[13] = n),
    (e[14] = s),
    (e[15] = 1),
    e
  );
}
function U(e, t, [n, s, o]) {
  return (
    (e[0] = t[0] * n + t[4] * s + t[8] * o + t[12]),
    (e[1] = t[1] * n + t[5] * s + t[9] * o + t[13]),
    (e[2] = t[2] * n + t[6] * s + t[10] * o + t[14]),
    e
  );
}
function nt(e, t, n, s) {
  const o = Math.cos(t / 2),
    r = Math.sin(t / 2),
    i = Math.cos(n / 2),
    a = Math.sin(n / 2),
    c = Math.cos(s / 2),
    h = Math.sin(s / 2);
  return (
    (e[0] = r * i * c + o * a * h),
    (e[1] = o * a * c - r * i * h),
    (e[2] = o * i * h - r * a * c),
    (e[3] = o * i * c + r * a * h),
    e
  );
}
class A {
  static fromGltf(t) {
    const n = (o) => {
        const r = t.nodes[o],
          i = new A(r.name, r.mesh, r.extras);
        i.position.splice(0, 3, ...r.translation),
          i.quaternion.splice(0, 4, ...r.rotation),
          i.scale.splice(0, 3, ...r.scale);
        for (const a of r.children) i.add(n(a));
        return i;
      },
      s = new A("");
    for (const o of t.roots) s.add(n(o));
    return s;
  }
  name;
  mesh;
  extras;
  position = [0, 0, 0];
  quaternion = [0, 0, 0, 1];
  scale = [1, 1, 1];
  world = g();
  children = [];
  parent;
  constructor(t, n, s = {}) {
    (this.name = t), (this.mesh = n), (this.extras = s);
  }
  add(t) {
    t.parent?.remove(t), (t.parent = this), this.children.push(t);
  }
  remove(t) {
    const n = this.children.indexOf(t);
    n < 0 || (this.children.splice(n, 1), (t.parent = void 0));
  }
  traverse(t) {
    t(this);
    for (const n of this.children) n.traverse(t);
  }
  updateWorld() {
    O(this.world, this.position, this.quaternion, this.scale),
      this.parent && I(this.world, this.parent.world, this.world);
    for (const t of this.children) t.updateWorld();
  }
  getWorldPosition(t) {
    return (t[0] = this.world[12]), (t[1] = this.world[13]), (t[2] = this.world[14]), t;
  }
}
class _ {
  static fromPositions(t) {
    const n = new _(),
      s = [0, 0, 0];
    for (let o = 0; o < t.length; o += 3)
      (s[0] = t[o]), (s[1] = t[o + 1]), (s[2] = t[o + 2]), n.expandByPoint(s);
    return n;
  }
  min = [1 / 0, 1 / 0, 1 / 0];
  max = [-1 / 0, -1 / 0, -1 / 0];
  makeEmpty() {
    return this.min.fill(1 / 0), this.max.fill(-1 / 0), this;
  }
  isEmpty() {
    return this.max[0] < this.min[0] || this.max[1] < this.min[1] || this.max[2] < this.min[2];
  }
  expandByPoint([t, n, s]) {
    return (
      (this.min[0] = Math.min(this.min[0], t)),
      (this.min[1] = Math.min(this.min[1], n)),
      (this.min[2] = Math.min(this.min[2], s)),
      (this.max[0] = Math.max(this.max[0], t)),
      (this.max[1] = Math.max(this.max[1], n)),
      (this.max[2] = Math.max(this.max[2], s)),
      this
    );
  }
  expandByTransformedBox(t, n) {
    if (t.isEmpty()) return this;
    const s = [0, 0, 0];
    for (let o = 0; o < 8; o++)
      (s[0] = o & 1 ? t.max[0] : t.min[0]),
        (s[1] = o & 2 ? t.max[1] : t.min[1]),
        (s[2] = o & 4 ? t.max[2] : t.min[2]),
        this.expandByPoint(U(s, n, s));
    return this;
  }
  getSize(t) {
    if (this.isEmpty()) return t.fill(0);
    for (let n = 0; n < 3; n++) t[n] = this.max[n] - this.min[n];
    return t;
  }
  getCenter(t) {
    if (this.isEmpty()) return t.fill(0);
    for (let n = 0; n < 3; n++) t[n] = (this.min[n] + this.max[n]) / 2;
    return t;
  }
}
function v(e) {
  const t = Math.hypot(e[0], e[1], e[2]) || 1;
  return [e[0] / t, e[1] / t, e[2] / t];
}
class st {
  position = [0, 0, 1];
  target = [0, 0, 0];
  viewProjection = g();
  aspect = 1;
  #e;
  #t;
  #n;
  #s = g();
  #r = g();
  constructor(t, n, s) {
    (this.#e = t), (this.#t = n), (this.#n = s);
  }
  update() {
    const t = this.position,
      n = v(t.map((f, u) => f - this.target[u])),
      s = v([n[2], 0, -n[0]]),
      o = [n[1] * s[2], n[2] * s[0] - n[0] * s[2], -n[1] * s[0]],
      r = (f) => f[0] * t[0] + f[1] * t[1] + f[2] * t[2],
      i = this.#s;
    i.set([s[0], o[0], n[0], 0, s[1], o[1], n[1], 0]),
      i.set([s[2], o[2], n[2], 0, -r(s), -r(o), -r(n), 1], 8);
    const a = 1 / Math.tan((this.#e * Math.PI) / 360),
      c = this.#n / (this.#t - this.#n),
      h = this.#r;
    h.fill(0),
      (h[0] = a / this.aspect),
      (h[5] = a),
      (h[10] = c),
      (h[11] = -1),
      (h[14] = c * this.#t),
      I(this.viewProjection, h, i);
  }
  project(t, n) {
    const s = this.viewProjection,
      [o, r, i] = t,
      a = s[3] * o + s[7] * r + s[11] * i + s[15];
    return U(n, s, t), (n[0] /= a), (n[1] /= a), (n[2] /= a), n;
  }
}
const V = 1179937895,
  k = 1313821514,
  q = 5130562,
  z = new Set(["EXT_meshopt_compression", "KHR_mesh_quantization"]),
  D = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 },
  Y = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  $ = { 5120: 127, 5121: 255, 5122: 32767, 5123: 65535 };
class X {
  static async load(t, n) {
    const [s, o] = await Promise.all([S(t, n), N()]),
      r = F(s);
    return G(C(r, o), r.json.meshes[0].primitives[0], void 0, Q(r.json, 0));
  }
  #e;
  #t;
  constructor(t, n) {
    (this.#e = t), (this.#t = n);
  }
  read(t) {
    const n = this.#e.get(t);
    if (!n) throw new Error(`glTF primitive has no ${t}`);
    return n;
  }
  readIndices() {
    return this.#t;
  }
  createMesh(t, n, s) {
    const o = (a, c) => {
        const h = t.createBuffer({
          label: s,
          size: a.byteLength,
          usage: c | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
        });
        return t.queue.writeBuffer(h, 0, a), h;
      },
      r = Object.keys(n),
      i = r.map((a) => o(this.read(a), GPUBufferUsage.VERTEX));
    return new K(
      t,
      H(n),
      i,
      o(this.#t, GPUBufferUsage.INDEX),
      this.#t.length,
      i[r.indexOf("POSITION")],
      i[r.indexOf("NORMAL")],
    );
  }
}
function H(e) {
  return Object.values(e).map((t) => ({
    arrayStride: 3 * Float32Array.BYTES_PER_ELEMENT,
    attributes: [{ shaderLocation: t, offset: 0, format: "float32x3" }],
  }));
}
class R {
  static async load(t, n, s) {
    const [o, r] = await Promise.all([S(t, n), N()]);
    return n.throwIfAborted(), new R(F(o), r, s);
  }
  roots;
  nodes;
  meshes;
  materials;
  constructor(t, n, s) {
    const { json: o } = t,
      r = C(t, n);
    (this.roots = o.scenes?.[o.scene ?? 0]?.nodes ?? []),
      (this.nodes = (o.nodes ?? []).map((i, a) => {
        if (i.matrix) throw new Error(`glTF node ${i.name ?? a} uses a matrix`);
        return {
          name: i.name ?? "",
          children: i.children ?? [],
          mesh: i.mesh,
          translation: i.translation ?? [0, 0, 0],
          rotation: i.rotation ?? [0, 0, 0, 1],
          scale: i.scale ?? [1, 1, 1],
          extras: i.extras ?? {},
        };
      })),
      (this.meshes = o.meshes.map((i) =>
        i.primitives.map((a) => ({ geometry: G(r, a, s), material: a.material })),
      )),
      (this.materials = (o.materials ?? []).map((i) => {
        const a = i.pbrMetallicRoughness,
          c = i.extensions?.KHR_materials_clearcoat;
        return {
          name: i.name ?? "",
          baseColor: a?.baseColorFactor ?? [1, 1, 1, 1],
          metallic: a?.metallicFactor ?? 1,
          roughness: a?.roughnessFactor ?? 1,
          clearcoat: c?.clearcoatFactor ?? 0,
          clearcoatRoughness: c?.clearcoatRoughnessFactor ?? 0,
          doubleSided: i.doubleSided ?? !1,
        };
      }));
  }
}
class K {
  layouts;
  #e;
  #t;
  #n;
  #s;
  #r;
  #o;
  #i;
  #a;
  constructor(t, n, s, o, r, i, a) {
    (this.#s = t),
      (this.layouts = n),
      (this.#e = s),
      (this.#t = o),
      (this.#n = r),
      (this.#r = i),
      (this.#o = a);
  }
  get geometry() {
    return this.#a;
  }
  readGeometry() {
    const t = this.#r,
      n = this.#o;
    return !t || !n
      ? Promise.resolve(void 0)
      : ((this.#i ??= Promise.all([t, n, this.#t].map((s) => W(this.#s, s))).then(
          ([s, o, r]) => (this.#a = J(new Float32Array(s), new Float32Array(o), new Uint32Array(r))),
          () => {
            this.#i = void 0;
          },
        )),
        this.#i);
  }
  draw(t) {
    this.#e.forEach((n, s) => t.setVertexBuffer(s, n)),
      t.setIndexBuffer(this.#t, "uint32"),
      t.drawIndexed(this.#n);
  }
  dispose() {
    this.#e.forEach((t) => t.destroy()), this.#t.destroy();
  }
}
async function W(e, t) {
  const n = e.createBuffer({
    label: "gltf-read-back",
    size: t.size,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
  });
  try {
    const s = e.createCommandEncoder();
    return (
      s.copyBufferToBuffer(t, 0, n, 0, t.size),
      e.queue.submit([s.finish()]),
      await n.mapAsync(GPUMapMode.READ),
      n.getMappedRange().slice(0)
    );
  } finally {
    n.destroy();
  }
}
function J(e, t, n) {
  const s = [1 / 0, 1 / 0, 1 / 0],
    o = [-1 / 0, -1 / 0, -1 / 0];
  for (let r = 0; r + 2 < e.length; r += 3)
    for (let i = 0; i < 3; i++) (s[i] = Math.min(s[i], e[r + i])), (o[i] = Math.max(o[i], e[r + i]));
  return { positions: e, normals: t, indices: n, min: s, max: o };
}
const Z = (e) => {
  const [t, n] = new Uint8Array(e, 0, Math.min(2, e.byteLength));
  return t === 31 && n === 139;
};
async function S(e, t) {
  const n = await fetch(e, { signal: t });
  if (!n.ok) throw new Error(`Failed to load ${e}: ${n.status} ${n.statusText}`);
  const s = await n.arrayBuffer();
  return Z(s)
    ? new Response(new Response(s).body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()
    : s;
}
function F(e) {
  const t = new DataView(e);
  if (t.getUint32(0, !0) !== V || t.getUint32(4, !0) !== 2) throw new Error("Not a glTF 2.0 binary");
  let n, s;
  for (let r = 12; r + 8 <= e.byteLength; ) {
    const i = t.getUint32(r, !0),
      a = new Uint8Array(e, r + 8, i),
      c = t.getUint32(r + 4, !0);
    c === k ? (n = JSON.parse(new TextDecoder().decode(a))) : c === q && (s = a), (r += 8 + i);
  }
  if (!n || !s) throw new Error("glTF binary is missing a chunk");
  const o = n.extensionsRequired?.filter((r) => !z.has(r));
  if (o?.length) throw new Error(`glTF requires ${o.join(", ")}`);
  return { json: n, bin: s };
}
let b;
function N() {
  return (
    (b ??= L(() => import("./meshopt_decoder-BK2qI-8z.js"), [])
      .then(async ({ MeshoptDecoder: e }) => (await e.ready, e))
      .catch((e) => {
        throw ((b = void 0), e);
      })),
    b
  );
}
function C({ json: e, bin: t }, n) {
  const s = new Map(),
    o = (r) => {
      const i = s.get(r);
      if (i) return i;
      const a = e.bufferViews[r],
        c = a.extensions?.EXT_meshopt_compression,
        { buffer: h, byteOffset: f = 0, byteLength: u } = c ?? a;
      if (h !== 0) throw new Error(`glTF buffer view ${r} is outside the binary chunk`);
      let l = t.subarray(f, f + u);
      if (c) {
        const { byteStride: y, count: d, mode: p, filter: w } = c,
          m = l;
        (l = new Uint8Array(d * y)), n.decodeGltfBuffer(l, d, y, m, p, w);
      }
      return s.set(r, l), l;
    };
  return (r, i) => {
    const {
        bufferView: a,
        byteOffset: c = 0,
        componentType: h,
        normalized: f,
        count: u,
        type: l,
      } = e.accessors[r],
      y = Y[h],
      d = D[l],
      p = o(a),
      w = (e.bufferViews[a].byteStride ?? d * y.BYTES_PER_ELEMENT) / y.BYTES_PER_ELEMENT,
      m = new y(p.buffer, p.byteOffset + c, (u - 1) * w + d),
      E = f ? $[h] : void 0,
      M = new i(u * d);
    for (let x = 0; x < u; x++)
      for (let P = 0; P < d; P++) {
        const T = m[x * w + P];
        M[x * d + P] = E ? Math.max(T / E, -1) : T;
      }
    return M;
  };
}
function G(e, t, n, s) {
  if (t.indices === void 0) throw new Error("glTF primitive has no indices");
  const o = n ?? Object.keys(t.attributes),
    r = new Map(
      o.map((i) => {
        const a = t.attributes[i];
        if (a === void 0) throw new Error(`glTF primitive has no ${i}`);
        return [i, e(a, Float32Array)];
      }),
    );
  return s && tt(r, s), new X(r, e(t.indices, Uint32Array));
}
function Q(e, t) {
  const n = e.nodes ?? [],
    s = new Map();
  n.forEach((i, a) => i.children?.forEach((c) => s.set(c, a)));
  let o = n.findIndex((i) => i.mesh === t);
  if (o < 0) return;
  const r = g();
  for (; o !== void 0; o = s.get(o)) {
    const { matrix: i, translation: a, rotation: c, scale: h } = n[o],
      f = i ? new Float32Array(i) : O(g(), a ?? [0, 0, 0], c ?? [0, 0, 0, 1], h ?? [1, 1, 1]);
    I(r, f, r);
  }
  return r;
}
function tt(e, t) {
  const n = e.get("POSITION");
  for (let r = 0; n && r < n.length; r += 3) {
    const [i, a, c] = [n[r], n[r + 1], n[r + 2]];
    (n[r] = t[0] * i + t[4] * a + t[8] * c + t[12]),
      (n[r + 1] = t[1] * i + t[5] * a + t[9] * c + t[13]),
      (n[r + 2] = t[2] * i + t[6] * a + t[10] * c + t[14]);
  }
  const s = j(t),
    o = e.get("NORMAL");
  for (let r = 0; o && r < o.length; r += 3) {
    const [i, a, c] = [o[r], o[r + 1], o[r + 2]],
      h = s[0] * i + s[3] * a + s[6] * c,
      f = s[1] * i + s[4] * a + s[7] * c,
      u = s[2] * i + s[5] * a + s[8] * c,
      l = Math.hypot(h, f, u) || 1;
    (o[r] = h / l), (o[r + 1] = f / l), (o[r + 2] = u / l);
  }
}
export { _ as B, X as G, st as P, A as S, j as a, R as b, v as n, nt as q, H as v };
