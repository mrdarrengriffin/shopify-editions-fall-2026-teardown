import { g as p } from "./getProductAreaMatches-BMTzck5J.js";
function u(o) {
  return (e) => {
    const n = o.nodesById.get(e);
    if (!n) return;
    const r = o.outgoing.get(e) ?? [],
      s = o.incoming.get(e) ?? [],
      c =
        n.type === "update"
          ? [
              ...s.filter(({ type: t }) => t === "contains"),
              ...r.filter(({ type: t }) => t === "assigned_to"),
            ]
          : n.type === "section"
            ? r.filter(({ type: t }) => t === "contains")
            : s.filter(({ type: t }) => t === "assigned_to"),
      g = p(o, e),
      a = new Set(c.map(({ source: t, target: i }) => (t === e ? i : t)));
    for (const t of g) a.add(t.id);
    return { id: e, type: n.type, neighbors: [...a], edges: c, productAreaMatches: g };
  };
}
export { u as createGraphExplorer };
