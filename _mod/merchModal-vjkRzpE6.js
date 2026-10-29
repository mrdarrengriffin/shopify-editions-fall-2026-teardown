const E = "merch-modal",
  n = "merch:open",
  s = "merch:prepare";
function a(e, t) {
  e.dispatchEvent(new CustomEvent(s, { bubbles: !0, detail: { dialogId: t } }));
}
function r(e) {
  e.launcher.dispatchEvent(new CustomEvent(n, { bubbles: !0, detail: e }));
}
export { n as M, E as a, s as b, r as o, a as p };
