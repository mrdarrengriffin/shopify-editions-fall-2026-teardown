import { i as r } from "./mixin-CMuDUxNx.js";
class c {
  #n;
  constructor(e) {
    this.#n = e;
  }
  static read(e) {
    return e.#n;
  }
}
function t(n) {
  let e = new c(n);
  return Object.freeze(e), e;
}
function u(n) {
  return n instanceof c ? c.read(n) : void 0;
}
function a(n) {
  let e = u(n.innerHTML);
  r(n.innerHTML === void 0 || e !== void 0, "Invalid innerHTML prop");
  let d = u(n.srcDoc);
  r(n.srcDoc === void 0 || d !== void 0, "Invalid srcDoc prop");
  let i = u(n.srcdoc);
  return (
    r(n.srcdoc === void 0 || i !== void 0, "Invalid srcdoc prop"),
    r(n.outerHTML === void 0, "Invalid outerHTML prop"),
    e === void 0 && d === void 0 && i === void 0
      ? n
      : {
          ...n,
          ...(e === void 0 ? {} : { innerHTML: e }),
          ...(d === void 0 ? {} : { srcDoc: d }),
          ...(i === void 0 ? {} : { srcdoc: i }),
        }
  );
}
export { a as n, t as u };
