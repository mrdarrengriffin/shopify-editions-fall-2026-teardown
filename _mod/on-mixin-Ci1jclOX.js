import { c as f } from "./mixin-CMuDUxNx.js";
const u = (e) => {
    let n = () => {},
      t = "",
      o = !1,
      r = null,
      l = null,
      s = (i) => {
        l?.abort(new DOMException("", "EventReentry")), (l = new AbortController()), n(i, l.signal);
      };
    return (
      e.addEventListener("insert", (i) => {
        (r = i.node), r.addEventListener(t, s, o);
      }),
      e.addEventListener("remove", () => {
        r?.removeEventListener(t, s, o), (r = null), l?.abort(new DOMException("", "AbortError"));
      }),
      (i, d, a = !1) => {
        let v = t,
          c = o,
          E = t !== i || o !== a;
        return (
          (t = i),
          (n = d),
          (o = a),
          E && r && (r.removeEventListener(v, s, c), r.addEventListener(i, s, a)),
          e.element
        );
      }
    );
  },
  p = f(u);
function x(e) {
  if (!e || typeof e != "object") return !1;
  let n = e;
  return n.type === u && Array.isArray(n.args);
}
function y(e, n, t) {
  return p(e, n, t);
}
export { x as i, y as o };
