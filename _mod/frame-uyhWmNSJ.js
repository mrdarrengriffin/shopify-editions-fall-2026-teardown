const c = 16,
  _ = 12,
  a = 13,
  O = 1.5,
  e = 14,
  N = 15,
  T = 20,
  i = 6,
  t = { circle: 0, square: 1, ring: 2, image: 3 };
function D(s, n) {
  for (let o = 0; o < s.nodeCount; o++) {
    const E = o * 16;
    s.nodes[E + 3] === t.image &&
      ((s.nodes[E + 3] = t.circle), (s.nodes[E + 2] = Math.min(s.nodes[E + 2], n)), (s.nodes[E + 12] = -1));
  }
}
function d(s) {
  const n = s.fade ?? 1,
    o = Math.min(1, s.markFade ?? n);
  return n < 1 && o > n ? (o - n) / (1 - n) : 0;
}
export { T as E, c as N, t as a, _ as b, a as c, e as d, i as e, O as f, N as g, D as h, d as m };
