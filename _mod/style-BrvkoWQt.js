const a = new Map();
function c(t) {
  let e = a.get(t);
  if (e === void 0) {
    if (((e = t.replace(/[A-Z]/g, (n) => `-${n.toLowerCase()}`)), a.size >= 256)) {
      let n = a.keys().next();
      n.done || a.delete(n.value);
    }
    a.set(t, e);
  }
  return e;
}
const W = new Set([
  "aspect-ratio",
  "z-index",
  "opacity",
  "flex-grow",
  "flex-shrink",
  "flex-order",
  "grid-area",
  "grid-row",
  "grid-column",
  "font-weight",
  "line-height",
  "order",
  "orphans",
  "widows",
  "zoom",
  "columns",
  "column-count",
]);
function m(t, e) {
  if (e == null) return String(e);
  if (typeof e == "number" && e !== 0) {
    let n = c(t);
    if (!W.has(n) && !n.startsWith("--")) return `${e}px`;
  }
  return String(e);
}
function g(t) {
  return (
    t.startsWith("&") || t.startsWith("@") || t.startsWith(":") || t.startsWith("[") || t.startsWith(".")
  );
}
function x(t) {
  if (!t.startsWith("@")) return !1;
  let e = t.toLowerCase();
  return (
    e.startsWith("@keyframes") ||
    e.startsWith("@-webkit-keyframes") ||
    e.startsWith("@-moz-keyframes") ||
    e.startsWith("@-o-keyframes")
  );
}
function A(t) {
  let e = Object.entries(t).sort(([i], [r]) => i.localeCompare(r)),
    n = JSON.stringify(e),
    l = 2166136261,
    s = 3421674724;
  for (let i = 0; i < n.length; i++) {
    let r = n.charCodeAt(i);
    (l = Math.imul(l ^ r, 16777619) >>> 0), (s = Math.imul(s ^ r, 16777619) >>> 0);
  }
  return l.toString(36) + s.toString(36);
}
function y(t, e = "") {
  let n = [],
    l = [],
    s = [],
    i = [];
  for (let [o, u] of Object.entries(t))
    if (g(o)) {
      if (o.startsWith("@")) {
        let d = $(u);
        if (!d) continue;
        if (o.startsWith("@function")) {
          let f = S(d);
          f.trim().length > 0
            ? i.push(`${o} {
${p(f, 2)}
}`)
            : i.push(`${o} {
}`);
        } else if (x(o)) {
          let f = w(d);
          f.trim().length > 0
            ? i.push(`${o} {
${p(f, 2)}
}`)
            : i.push(`${o} {
}`);
        } else {
          let f = y(d, e);
          f.trim().length > 0
            ? s.push(`${o} {
${p(f, 2)}
}`)
            : s.push(`${o} {
  ${e} {
  }
}`);
        }
        continue;
      }
      let h = $(u);
      if (!h) continue;
      let C = b(h, 4);
      C.trim().length > 0 &&
        l.push(`  ${o} {
${C}
  }`);
    } else if (u != null) {
      let h = m(o, u);
      n.push(`  ${c(o)}: ${h};`);
    }
  let r = "";
  return (
    i.length > 0 &&
      (r += i.join(`
`)),
    e &&
      (n.length > 0 || l.length > 0) &&
      ((r +=
        (r
          ? `
`
          : "") +
        `${e} {
`),
      n.length > 0 &&
        (r +=
          n.join(`
`) +
          `
`),
      l.length > 0 &&
        (r +=
          l.join(`
`) +
          `
`),
      (r += "}")),
    s.length > 0 &&
      (r +=
        (r
          ? `
`
          : "") +
        s.join(`
`)),
    r
  );
}
function b(t, e) {
  let n = " ".repeat(e),
    l = [],
    s = [];
  for (let [i, r] of Object.entries(t))
    if (g(i)) {
      let o = $(r);
      if (!o) continue;
      let u = b(o, e + 2);
      u.trim().length > 0 &&
        s.push(`${n}${i} {
${u}
${n}}`);
    } else if (r != null) {
      let o = m(i, r);
      l.push(`${n}${c(i)}: ${o};`);
    }
  return [...l, ...s].join(`
`);
}
function p(t, e) {
  let n = " ".repeat(e);
  return t
    .split(
      `
`,
    )
    .map((l) => (l.length ? n + l : l)).join(`
`);
}
function j(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function $(t) {
  return j(t) ? t : null;
}
function w(t) {
  let e = [];
  for (let [n, l] of Object.entries(t)) {
    if (!j(l)) continue;
    let s = [];
    for (let [i, r] of Object.entries(l)) {
      if (r == null || g(i)) continue;
      let o = m(i, r);
      s.push(`  ${c(i)}: ${o};`);
    }
    s.length > 0
      ? e.push(`${n} {
${s.join(`
`)}
}`)
      : e.push(`${n} {
}`);
  }
  return e.join(`
`);
}
function S(t) {
  let e = [],
    n = [];
  for (let [s, i] of Object.entries(t))
    if (g(s))
      if (s.startsWith("@")) {
        let r = $(i);
        if (!r) continue;
        let o = S(r);
        o.trim().length > 0
          ? n.push(`${s} {
${p(o, 2)}
}`)
          : n.push(`${s} {
}`);
      } else continue;
    else if (i != null) {
      let r = m(s, i);
      e.push(`  ${c(s)}: ${r};`);
    }
  let l = "";
  return (
    e.length > 0 &&
      (l += e.join(`
`)),
    n.length > 0 &&
      (l +=
        (l
          ? `
`
          : "") +
        n.join(`
`)),
    l
  );
}
function k(t, e) {
  if (Object.keys(t).length === 0) return { selector: "", css: "" };
  let n = A(t),
    l = `rmxc-${n}`,
    s = e.get(n);
  if (s) return s;
  let i = y(t, `.${l}`),
    r = { selector: l, css: i };
  return e.set(n, r), r;
}
export { m as n, k as p };
