import { a as E, c as I, d as S } from "./frame-uyhWmNSJ.js";
const T = 1.5,
  h = 6,
  l = 4,
  A = 4;
function D(i) {
  return i === E.circle || i === E.ring;
}
function H(i, r, n, _ = h) {
  if (n <= 0 || !D(i[r + 3])) return;
  const c = i[r + 2];
  (i[r + 2] = c + (_ - c) * n), (i[r + 3] = E.ring);
}
function L(i, r, n, _, c, R = n) {
  const N = i[r + 3] === E.image;
  N || (i[r + 2] = i[r + 2] + T * R);
  for (let a = 0; a < 3; a++) {
    const O = i[r + 4 + a];
    i[r + 4 + a] = O + (_[a] - O) * n;
  }
  (i[r + I] = N ? c : 0), (i[r + S] = N ? n : 0);
}
function U(i, r, n, _ = 1) {
  for (let c = 0; c < 3; c++) i[r + 8 + c] = i[r + 12 + c] = n[c];
  (i[r + 11] = i[r + 11] * _), (i[r + 15] = i[r + 15] * _);
}
export { h as H, A as R, l as S, D as a, U as b, L as h, H as r };
