import { c as o } from "./clamp-co6UzHBn.js";
function p(n, a, t, c) {
  return `color(display-p3 ${r(n)} ${r(a)} ${r(t)} / ${o(c, 0, 1)})`;
}
function r(n) {
  return Math.round(o(n, 0, 1) * 1e4) / 1e4;
}
export { p as d };
