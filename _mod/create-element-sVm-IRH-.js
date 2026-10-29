import { j as i } from "./jsx-CLqwgotn.js";
import { a as l, n as m } from "./children-CK0rrdQP.js";
function x(e, t, ...r) {
  let n = { ...(t ?? {}) };
  if (
    (f(e)
      ? r.length > 0 && console.error(new Error("mixin elements must not receive children"))
      : (l(r), (n.children = m(r))),
    n.key != null)
  ) {
    let { key: o, ...s } = n;
    return i(e, s, o);
  }
  return i(e, n);
}
function f(e) {
  return typeof e == "function" && "__rmxMixinElementType" in e;
}
export { x as c };
