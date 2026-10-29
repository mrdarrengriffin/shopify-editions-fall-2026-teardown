import { c as o } from "./mixin-CMuDUxNx.js";
const l = o((r) => {
  let e;
  r.addEventListener("insert", (t) => {
    (e = new AbortController()), n(t.node, e.signal);
  }),
    r.addEventListener("remove", () => {
      e?.abort(new DOMException("", "AbortError")), (e = void 0);
    });
  let n = () => {};
  return (t) => ((n = t), r.element);
});
export { l as r };
