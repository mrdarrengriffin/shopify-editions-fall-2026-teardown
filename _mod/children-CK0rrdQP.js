import { i as e } from "./mixin-CMuDUxNx.js";
import { i as o } from "./jsx-CLqwgotn.js";
function u(r) {
  return r == null || typeof r == "boolean";
}
function a(r) {
  let t = typeof r;
  return t === "string" || t === "number" || t === "bigint";
}
function l(r) {
  for (let t = 0; t < r.length; t++) if (Array.isArray(r[t])) return r.flat(1 / 0);
  return r;
}
function m(r) {
  for (let t of r) e(i(t), "Invalid child node");
}
function i(r) {
  if (r == null) return !0;
  let t = typeof r;
  if (t === "string" || t === "number" || t === "bigint" || t === "boolean" || o(r)) return !0;
  if (!Array.isArray(r)) return !1;
  for (let n of r) if (!i(n)) return !1;
  return !0;
}
export { m as a, a as b, i as c, u as i, l as n };
