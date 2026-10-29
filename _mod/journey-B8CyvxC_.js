import { c as p } from "./clamp-co6UzHBn.js";
import { s as e, r as o, l as u, c as E } from "./easing-BhDfN7yX.js";
const S = 0.3,
  y = 0.5,
  O = 0.4,
  _ = (n) => E(n),
  C = (n) => 1.5 * e(o(n, 0.04, 0.3)) * (1 - e(o(n, 0.72, 0.98)));
function J(n, t, c, s) {
  const r = t - s * 0.55,
    i = Math.max(r + 1, c - s * O),
    a = o(n, r, i),
    x = o(a, 0, S),
    T = e(o(a, 0.02, 0.08)),
    m = _(a),
    l = e(o(a, y, 1));
  return {
    start: r,
    end: i,
    progress: a,
    active: n >= r && n < i,
    unfold: x,
    reveal: T,
    pan: m,
    isolate: l,
    context: T * (1 - l),
    colour: e(o(a, 0.11, 0.63)),
  };
}
const N = 0.12;
function b(n) {
  return N * (1 - p(n, 0, 1));
}
function d(n, t, c) {
  const s = u(Number(n), Number(t), c.pan);
  return n || t ? Math.max(N, u(s, 1, c.context)) : N;
}
function f(n, t, c) {
  const s = p(c, 0, 1);
  return { x: s === 1 ? t.x : u(n.x, t.x, s), y: s === 1 ? t.y : u(n.y, t.y, s), scale: n.scale };
}
export { O as S, N as a, d as b, f as c, C as d, J as e, b as s };
