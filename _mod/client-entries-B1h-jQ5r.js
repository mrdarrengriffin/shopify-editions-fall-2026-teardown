function e(n, t) {
  if (!n) throw new Error("clientEntry() requires an entry ID");
  return (t.$entry = !0), (t.$entryId = n), t;
}
function i(n) {
  return !!(n && typeof n == "function" && n.$entry === !0);
}
function r(...n) {
  console.error("Hydration mismatch:", ...n);
}
function a(n) {
  for (; n && n.nodeType === Node.COMMENT_NODE; ) n = n.nextSibling;
  return n;
}
export { e as c, i, r as l, a as s };
