const n = new Map();
function i(t, e) {
  if (
    typeof document.startViewTransition != "function" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return t();
  if (typeof ViewTransition != "function" || !("types" in ViewTransition.prototype)) {
    document.startViewTransition(t);
    return;
  }
  document.startViewTransition({ update: t, types: ["html-in-canvas", `html-in-canvas-${e}`] });
}
function o(t) {
  for (const e of n.values()) e(!1);
  try {
    return t();
  } finally {
    for (const e of n.values()) e(!0);
  }
}
export { i as c, n as t, o as u };
