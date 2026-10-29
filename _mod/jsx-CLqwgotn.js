function f(e, t, r) {
  return { $rmx: !0, key: r, props: u(t), type: e };
}
function o(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Reflect.get(e, "type"),
    r = Reflect.get(e, "props");
  return (
    Reflect.get(e, "$rmx") === !0 &&
    (typeof t == "string" || typeof t == "function") &&
    typeof r == "object" &&
    r !== null
  );
}
function u(e) {
  if (!e) return {};
  if (!("mix" in e) || l(e.mix)) return e;
  let { mix: t, ...r } = e,
    n = a(t);
  return n === void 0 ? r : { ...r, mix: n };
}
function l(e) {
  if (!Array.isArray(e) || e.length === 0) return !1;
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (!r || Array.isArray(r)) return !1;
  }
  return !0;
}
function a(e) {
  if (!e) return;
  let t = [];
  return i(e, t), t.length === 0 ? void 0 : t;
}
function i(e, t) {
  if (e) {
    if (!Array.isArray(e)) {
      t.push(e);
      return;
    }
    for (let r of e) i(r, t);
  }
}
function c(e, t, r) {
  return f(e, t, r);
}
export { o as i, c as j };
