let i;
const r = new Promise((o) => (i = o)),
  c = { promise: r, resolve: i };
function s(o) {
  const t = document.querySelector(`[data-section-dot="#${CSS.escape(o)}"]`);
  if (!t) return null;
  const e = t.getBoundingClientRect();
  return {
    x: e.left + e.width / 2,
    y: e.top + e.height / 2,
    alpha: t.checkVisibility({ visibilityProperty: !0 })
      ? Number(getComputedStyle(t.closest("li") ?? t).opacity)
      : 0,
    active: t.closest("a")?.getAttribute("aria-current") === "location",
  };
}
export { c as h, s };
