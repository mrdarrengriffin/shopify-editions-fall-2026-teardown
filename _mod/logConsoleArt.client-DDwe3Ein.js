import { s as k } from "./htmlInCanvasSupport-jvDIQ00h.js";
const C = `
███████╗ █████╗ ██╗     ██╗        ██╗ ██████╗  ██████╗
██╔════╝██╔══██╗██║     ██║        ╚█║ ╚════██╗██╔════╝
█████╗  ███████║██║     ██║         ╚╝  █████╔╝███████╗
██╔══╝  ██╔══██║██║     ██║            ██╔═══╝ ██╔═══██╗
██║     ██║  ██║███████╗███████╗       ███████╗╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝       ╚══════╝ ╚═════╝
`,
  g = 360,
  x = 300,
  a = 0,
  p = 320,
  c = 28,
  i = 236,
  l = -3,
  $ = 3,
  v = (p - a) / ($ - l),
  f = 2.4,
  d = $ - l + 2,
  E = "ui-monospace, SFMono-Regular, Menlo, monospace",
  h = (t) => a + (t - l) * v,
  u = (t) => i - ((i - c) * Math.exp(t)) / Math.exp($),
  A = (t) => `${h(t).toFixed(1)}px,${u(t).toFixed(1)}px`,
  y = (t, n, s) =>
    `@keyframes ${t}{${Array.from({ length: n + 1 }, (m, e) => `${((e / n) * 100).toFixed(2)}%{${s(e / n)}}`).join("")}}`;
function M() {
  const t = Array.from({ length: 121 }, (e, o) => {
      const r = l + (o / 120) * ($ - l);
      return `${o ? "L" : "M"}${h(r).toFixed(1)} ${u(r).toFixed(1)}`;
    }).join(""),
    n = Array.from({ length: $ - l + 3 }, (e, o) => {
      const r = h(l + o);
      return `<line x1="${r}" y1="${c}" x2="${r}" y2="${i}"/>`;
    }).join(""),
    s = Array.from({ length: 11 }, (e, o) => {
      const r = u($ - 9 + o).toFixed(1);
      return `<line x1="${a}" y1="${r}" x2="${p}" y2="${r}" vector-effect="non-scaling-stroke"/>`;
    }).join(""),
    m = Array.from(
      { length: d },
      (e, o) => `<circle r="3.5" style="animation-delay:-${(o * f).toFixed(1)}s"/>`,
    ).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${g}" height="${x}" viewBox="0 0 ${g} ${x}">
<style>:root{color-scheme:light dark}
.g{stroke:CanvasText;stroke-opacity:.18;stroke-width:1}
text{fill:CanvasText;font-family:${E}}
.v{animation:pan ${f}s linear infinite}
.h{transform-origin:0 ${i}px;animation:zoom ${f}s linear infinite}
circle{fill:CanvasText;animation:ride ${d * f}s linear infinite}
@keyframes pan{from{transform:translateX(${-v}px)}}
${y("zoom", 12, (e) => `transform:scaleY(${Math.exp(e - 1).toFixed(4)})`)}
${y("ride", 40, (e) => `transform:translate(${A(l - 1 + d * e)})`)}</style>
<defs><clipPath id="plot"><rect x="${a}" y="${c}" width="${p - a}" height="${i - c}"/></clipPath></defs>
<g clip-path="url(#plot)"><g class="g v">${n}</g><g class="g h">${s}</g>
<path d="${t}" fill="none" stroke="CanvasText" stroke-width="2.5"/>${m}</g>
<path d="M${h(0)} ${c - 8}V${i}" fill="none" stroke="CanvasText" stroke-opacity=".4" stroke-width="1.5"/>
<path d="M${a} ${i}H${p + 10}" fill="none" stroke="CanvasText" stroke-width="1.5"/>
<path d="M${p + 10} ${i - 4}l8 4-8 4z" fill="CanvasText"/>
<text x="${a + 8}" y="${c + 4}" font-size="13">y = eˣ</text>
<text x="${a}" y="278" font-size="14" letter-spacing="1">Fall ’26 Edition | Exponential</text>
</svg>`;
}
const S = (t) =>
    `data:image/svg+xml;base64,${btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, (n, s) => String.fromCharCode(parseInt(s, 16))))}`,
  w = "Take it to the next level. Press Shift + ~ to open Expo Mode, or head straight there: {url}",
  F =
    "Take it to the next level. Open this link {url} in the latest Chrome on desktop to experience Expo Mode";
let T = !1;
function z(t) {
  if (T) return;
  T = !0;
  const n = navigator.userAgent.toLowerCase();
  if (
    ((n.includes("safari") && !n.includes("chrome")) || matchMedia("(prefers-reduced-motion: reduce)").matches
      ? console.log(`%c${C}`, "font-family: monospace; font-size: 11px; line-height: 1;")
      : console.log(
          "%c ",
          `color: transparent; display: inline-block; font-size: 1px; line-height: 0;
      padding: 0 0 ${x}px ${g}px;
      background: url(${S(M())}) left top / ${g}px ${x}px no-repeat;`,
        ),
    !t)
  )
    return;
  const s = k(),
    e = (s ? t.message : t.messageUnsupported)?.trim() || (s ? w : F),
    o = new URL(t.href, location.origin).href;
  console.log(
    "%c%s",
    "font-family: monospace; font-size: 14px;",
    e.includes("{url}") ? e.replaceAll("{url}", () => o) : `${e} ${o}`,
  );
}
export { z as logConsoleArt };
