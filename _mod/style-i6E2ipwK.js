import { c as r } from "./colorPalette-VQpnhwit.js";
import { W as m } from "./wire-BRlyKbjJ.js";
const k = {
    brand: `var(${r.blue.customProperty})`,
    graph: { background: "color(display-p3 0.0063 0.0167 0.0937)" },
    section: {
      blue: {
        DEFAULT: `var(${r.blue.customProperty})`,
        surface: `var(${r.blue.surface.customProperty})`,
        button: `var(${r.blue.button.customProperty})`,
      },
      pink: {
        DEFAULT: `var(${r.pink.customProperty})`,
        surface: `var(${r.pink.surface.customProperty})`,
        button: `var(${r.pink.button.customProperty})`,
      },
      green: {
        DEFAULT: `var(${r.green.customProperty})`,
        surface: `var(${r.green.surface.customProperty})`,
        button: `var(${r.green.button.customProperty})`,
      },
      orange: {
        DEFAULT: `var(${r.orange.customProperty})`,
        surface: `var(${r.orange.surface.customProperty})`,
        button: `var(${r.orange.button.customProperty})`,
      },
      purple: {
        DEFAULT: `var(${r.purple.customProperty})`,
        surface: `var(${r.purple.surface.customProperty})`,
        button: `var(${r.purple.button.customProperty})`,
      },
      slate: {
        DEFAULT: `var(${r.slate.customProperty})`,
        surface: `var(${r.slate.surface.customProperty})`,
        button: `var(${r.slate.button.customProperty})`,
      },
    },
  },
  u = /^color\(\s*display-p3\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+)(%?))?\s*\)$/i,
  i = h(r.blue.displayP3),
  y = {
    inkColor: "color(display-p3 0.2187 0.2992 0.9102)",
    hoverColor: "color(display-p3 0.4975 0.9331 0.5992 / 0.4)",
    sectionColor: "color(display-p3 0.4093 0.4751 0.9644)",
    updateColor: "color(display-p3 0.2578 0.3231 0.8094)",
    featuredColor: "#00ffdf",
    imageStrokeColor: "color(display-p3 1 1 1 / 0.4)",
    sectionRingColor: "color(display-p3 1 1 1 / 0.75)",
    tetherStartColor: "color(display-p3 0.0542 0.0713 0.2424)",
    tetherEndColor: "color(display-p3 0.4093 0.4751 0.9644 / 0.4)",
    relatedColor: "color(display-p3 0.7596 0.788 1)",
    sectionInk1: "color(display-p3 0.1078 0.4878 0.8202)",
    sectionInk2: "color(display-p3 0.4199 0.9855 0.7027 / 0.4)",
    sectionInk3: "color(display-p3 0.4199 0.5707 0.9855 / 0.4)",
    sectionInk1End: "color(display-p3 0.4093 0.4751 0.9644 / 0.4)",
    sectionInk2End: "color(display-p3 0.4093 0.4751 0.9644 / 0.4)",
    sectionInk3End: "color(display-p3 0.4093 0.4751 0.9644 / 0.4)",
    tetherWidth: 1,
    relatedWidth: 0.75 * 0.6,
    relatedHoverWidth: 0.75,
    flowWidth: 1,
    relatedIdleAlpha: 0.15,
    relatedHoverAlpha: 0.5,
    containsAlpha: 0.7,
    contextAlpha: 0.5,
    pageMarkAlpha: 0.55,
  };
function f(o) {
  return {
    background: [...i, 0],
    backdrop: h(k.graph.background),
    ink: e(o.inkColor),
    hover: e(o.hoverColor),
    hoverAlpha: a(o.hoverColor),
    root: i,
    section: e(o.sectionColor),
    update: e(o.updateColor),
    featured: e(o.featuredColor),
    imageStroke: e(o.imageStrokeColor),
    imageStrokeAlpha: a(o.imageStrokeColor),
    sectionRing: e(o.sectionRingColor),
    sectionRingAlpha: a(o.sectionRingColor),
    tetherStart: e(o.tetherStartColor),
    tetherEnd: e(o.tetherEndColor),
    tetherEndAlpha: a(o.tetherEndColor),
    rootTetherEnd: e("#26ff9e"),
    related: e(o.relatedColor),
    sectionInks: [e(o.sectionInk1), e(o.sectionInk2), e(o.sectionInk3)],
    sectionInkAlphas: [a(o.sectionInk1), a(o.sectionInk2), a(o.sectionInk3)],
    sectionInkEnds: [e(o.sectionInk1End), e(o.sectionInk2End), e(o.sectionInk3End)],
    sectionInkEndAlphas: [a(o.sectionInk1End), a(o.sectionInk2End), a(o.sectionInk3End)],
    tetherWidth: o.tetherWidth,
    relatedWidth: o.relatedWidth,
    relatedHoverWidth: o.relatedHoverWidth,
    relatedIdleAlpha: o.relatedIdleAlpha,
    relatedHoverAlpha: o.relatedHoverAlpha,
    containsAlpha: o.containsAlpha,
    contextAlpha: o.contextAlpha,
    pageLineAlpha: m.alpha,
    pageMarkAlpha: o.pageMarkAlpha,
    flowWidth: o.flowWidth,
  };
}
const I = f(y);
function b(o, t, n) {
  const c = p(o),
    l = p(t),
    s = p(n);
  return [
    d(0.8224621 * c + 0.177538 * l),
    d(0.0331941 * c + 0.9668058 * l),
    d(0.0170827 * c + 0.0723974 * l + 0.9105199 * s),
  ];
}
function e(o) {
  const t = u.exec(o.trim());
  if (t) return [Number(t[1]), Number(t[2]), Number(t[3])];
  const n = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(o.trim());
  return n ? b(parseInt(n[1], 16) / 255, parseInt(n[2], 16) / 255, parseInt(n[3], 16) / 255) : [0, 0, 0];
}
function a(o) {
  const t = u.exec(o.trim());
  if (!t?.[4]) return 1;
  const n = Number(t[4]) / (t[5] ? 100 : 1);
  return Math.min(1, Math.max(0, n));
}
function h(o) {
  const t = u.exec(o);
  if (!t) throw new Error(`Not a display-p3 colour: ${o}`);
  return [Number(t[1]), Number(t[2]), Number(t[3])];
}
function p(o) {
  return o <= 0.04045 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
}
function d(o) {
  return o <= 0.0031308 ? o * 12.92 : 1.055 * o ** (1 / 2.4) - 0.055;
}
export { u as D, I as G, y as S, k as a, f as c, h as p, b as s, p as t };
