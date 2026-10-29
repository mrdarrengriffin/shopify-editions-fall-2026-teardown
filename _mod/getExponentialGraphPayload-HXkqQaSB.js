import { buildGraphIndex as g } from "./buildGraphIndex-C3BQu6G8.js";
import { h as y } from "./build-section-frame-DWD4QmNv.js";
import { g as b } from "./getProductAreaMatches-BMTzck5J.js";
import { g as I } from "./graphThumbnailUrl-BS_hfECj.js";
import "./frame-uyhWmNSJ.js";
import "./highlight-BjwrNyM6.js";
import "./pack-D8z7b37W.js";
import "./easing-BhDfN7yX.js";
import "./clamp-co6UzHBn.js";
import "./style-i6E2ipwK.js";
import "./colorPalette-VQpnhwit.js";
import "./wire-BRlyKbjJ.js";
import "./journey-B8CyvxC_.js";
const E = 4;
function O(i, s = {}, n = g(i)) {
  const r = new Map(),
    p = [];
  for (const { source: e, target: t, type: o } of i.edges)
    o === "contains" && (r.has(t) || r.set(t, e), p.push({ source: e, target: t, type: o }));
  const l = [],
    m = [];
  for (const e of i.nodes)
    if (e.type === "section")
      l.push({
        id: e.id,
        role: "section",
        label: e.label,
        handle: e.handle,
        prominence: "normal",
        shape: "square",
      });
    else if (e.type === "update") {
      const t = s[e.ref],
        o = t && I(t);
      l.push({
        id: e.id,
        role: "update",
        label: e.label,
        handle: e.handle,
        primarySectionId: r.get(e.id),
        prominence: "normal",
        shape: o ? "image" : "circle",
        ...(o && { thumbnailUrl: o }),
        ...(e.weight !== void 0 && { weight: e.weight }),
      });
    } else
      m.push({
        id: e.id,
        role: e.type,
        label: e.label,
        handle: e.handle,
        prominence: "normal",
        shape: "ring",
      });
  const a = Object.fromEntries([...(n.nodesByType.get("update") ?? [])].map((e) => [e, b(n, e)])),
    h = Object.fromEntries(Object.entries(a).map(([e, t]) => [e, t.map((o) => o.id)])),
    u = new Map(i.nodes.map(({ id: e, weight: t }) => [e, t])),
    d = (e) => y(u.get(e)),
    c = new Set(),
    f = Object.keys(a)
      .filter((e) => d(e) >= E)
      .sort((e, t) => d(t) - d(e));
  for (const e of f) {
    if (c.has(e)) continue;
    const t = w(
      a[e].filter(({ id: o }) => !c.has(o)),
      d,
    );
    t && (c.add(e), c.add(t), p.push({ source: e, target: t, type: "related_to" }));
  }
  return { nodes: l, concepts: m, edges: p, relatedById: h, productAreaMatchesById: a };
}
function w(i, s) {
  let n;
  for (const r of i)
    (!n || s(r.id) > s(n.id) || (s(r.id) === s(n.id) && r.productAreaIds.length > n.productAreaIds.length)) &&
      (n = r);
  return n?.id;
}
export { O as getExponentialGraphPayload };
