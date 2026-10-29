function g(e, s) {
  const n = new Map();
  if (e.nodesById.get(s)?.type !== "update") return [];
  for (const { type: c, target: t } of e.outgoing.get(s) ?? [])
    if (!(c !== "assigned_to" || e.nodesById.get(t)?.type !== "product"))
      for (const o of e.incoming.get(t) ?? []) {
        if (o.type !== "assigned_to" || o.source === s) continue;
        const r = n.get(o.source) ?? [];
        r.push(t), n.set(o.source, r);
      }
  return [...n].map(([c, t]) => ({ id: c, productAreaIds: t }));
}
export { g };
