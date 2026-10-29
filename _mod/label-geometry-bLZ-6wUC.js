const c = 4,
  o = 4,
  G = 8,
  n = 14,
  e = 16,
  N = 2,
  i = 8;
function g(A, h, E, _, t, L) {
  const B = _ === "above" ? A - t.width / 2 : _ === "right" ? A + E + 2 : A - E - 2 - t.width,
    I = _ === "above" ? h - E - 8 - t.height + 4 : h - (t.lineHeight ?? 14) / 2 - 16 - 4;
  return L
    ? {
        left: a(B, L.left + 8, L.left + L.width - 8 - t.width),
        top: a(I, L.top + 8, L.top + L.height - 8 - t.height),
        width: t.width,
        height: t.height,
      }
    : { left: B, top: I, width: t.width, height: t.height };
}
function a(A, h, E) {
  return Math.max(h, Math.min(E, A));
}
export { G as L, n as a, c as b, o as c, N as d, i as e, e as f, g as s };
