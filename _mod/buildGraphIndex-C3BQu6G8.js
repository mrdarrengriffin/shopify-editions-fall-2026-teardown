function h(c) {
  const o = new Map(),
    s = new Map(),
    r = new Map(),
    d = new Map(),
    g = new Map(),
    n = new Map();
  for (const e of c.nodes) {
    if (o.has(e.id)) throw new Error(`Duplicate graph node ${e.id}`);
    o.set(e.id, e);
    const t = s.get(e.type) ?? new Set();
    t.add(e.id), s.set(e.type, t), d.set(e.id, []), g.set(e.id, []), n.set(e.id, []);
  }
  for (const e of c.edges) {
    const t = d.get(e.source),
      i = g.get(e.target),
      p = n.get(e.source),
      u = n.get(e.target);
    if (!t || !i || !p || !u)
      throw new Error(`Invalid graph endpoints for ${e.id}: ${e.source} → ${e.target}`);
    const a = r.get(e.type) ?? [];
    a.push(e), r.set(e.type, a), t.push(e), i.push(e), p.push(e), e.source !== e.target && u.push(e);
  }
  return { nodesById: o, nodesByType: s, edgesByType: r, outgoing: d, incoming: g, undirected: n };
}
export { h as buildGraphIndex };
