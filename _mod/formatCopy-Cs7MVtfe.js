import { i as a, g as n } from "./locale-DXEWuBc6.js";
function g(t = "en") {
  return a(t) ? n(t).locale : t;
}
function c(t, r) {
  return t.replace(/\{(\w+)\}/g, (o, e) => (Object.hasOwn(r, e) ? String(r[e]) : o));
}
export { c as f, g };
