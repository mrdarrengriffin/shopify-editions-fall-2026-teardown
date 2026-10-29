import { u as c } from "./htmlInCanvasTilt-BU1xBiHq.js";
function r(t, n) {
  return u(t, [n])[0];
}
function u(t, n) {
  const i = c(() => t.map((e) => e.getBoundingClientRect().top));
  return n.map((e) => t.findLast((a, o) => i[o] <= e + 1)?.id);
}
export { r as a, u as g };
