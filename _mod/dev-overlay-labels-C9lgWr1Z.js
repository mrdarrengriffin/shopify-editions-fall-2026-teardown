function i() {
  const t = new Map(),
    a = document.querySelector("script#rmx-data");
  if (!a) return t;
  try {
    const r = JSON.parse(a.textContent || "{}");
    if (!r || typeof r != "object" || Array.isArray(r)) return t;
    const e = r.h;
    if (!e || typeof e != "object" || Array.isArray(e)) return t;
    for (const [c, o] of Object.entries(e)) {
      if (!o || typeof o != "object" || Array.isArray(o)) continue;
      const n = o.exportName;
      typeof n == "string" && t.set(c, n);
    }
  } catch {}
  return t;
}
export { i as captureHydrationLabels };
