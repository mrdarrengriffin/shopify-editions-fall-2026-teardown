const v = new WeakSet();
function M(t) {
  let e = {
    "~standard": {
      version: 1,
      vendor: "data-schema",
      validate(r, n) {
        let i = { path: [], options: n, mutablePath: O(e) };
        return t(r, i);
      },
    },
    "~run"(r, n) {
      return n.mutablePath ? t(r, { path: [...n.path], options: n.options }) : t(r, n);
    },
    pipe(...r) {
      return r.length === 0
        ? e
        : y(e, function (i, u) {
            let s = e["~run"](i, u);
            if (s.issues) return s;
            for (let a of r)
              if (!a.check(s.value))
                return a.code
                  ? {
                      issues: [
                        m(u, {
                          code: a.code,
                          defaultMessage: a.message ?? "Check failed",
                          input: s.value,
                          values: a.values,
                        }),
                      ],
                    }
                  : { issues: [g(a.message ?? "Check failed", [...u.path])] };
            return s;
          });
    },
    refine(r, n) {
      return y(e, function (u, s) {
        let a = e["~run"](u, s);
        return a.issues || r(a.value)
          ? a
          : n !== void 0
            ? { issues: [g(n, [...s.path])] }
            : {
                issues: [
                  m(s, { code: "refine.failed", defaultMessage: "Refinement failed", input: a.value }),
                ],
              };
      });
    },
    transform(r) {
      return y(e, function (i, u) {
        let s = e["~run"](i, u);
        return s.issues ? s : { value: r(s.value) };
      });
    },
  };
  return e;
}
function O(t) {
  return v.has(t);
}
function c(t) {
  let e = M(t);
  return (e["~run"] = t), v.add(e), e;
}
function y(t, e) {
  return O(t) ? c(e) : M(e);
}
function $(t, e, r, n) {
  if (r.mutablePath !== !0 || !Array.isArray(r.path)) {
    let i = { path: k(r.path, n), options: r.options, mutablePath: !1 };
    return t["~run"](e, i);
  }
  r.path.push(n);
  try {
    return t["~run"](e, r);
  } finally {
    r.path.pop();
  }
}
function j(t) {
  let e = t?.libraryOptions?.abortEarly;
  return !!(t?.abortEarly ?? e);
}
function k(t, e) {
  return t.length === 0 ? [e] : [...t, e];
}
function _(t) {
  let e = t?.libraryOptions?.errorMap;
  if (typeof t?.errorMap == "function") return t.errorMap;
  if (typeof e == "function") return e;
}
function P(t) {
  let e = t?.libraryOptions?.locale;
  if (typeof t?.locale == "string") return t.locale;
  if (typeof e == "string") return e;
}
function S(t, e) {
  let r = _(t);
  return r ? (r(e) ?? e.defaultMessage) : e.defaultMessage;
}
function m(t, e) {
  let r = [...(e.path ?? t.path)],
    n = S(t.options, {
      code: e.code,
      defaultMessage: e.defaultMessage,
      path: r,
      values: e.values,
      input: e.input,
      locale: P(t.options),
    });
  return g(n, r);
}
function g(t, e) {
  return !e || e.length === 0 ? { message: t } : { message: t, path: e };
}
function h(t, e, r) {
  if (!r?.code) return { issues: [g(t, e)] };
  e = e && [...e];
  let n = S(r.parseOptions, {
    code: r.code,
    defaultMessage: t,
    path: e,
    values: r.values,
    input: r.input,
    locale: P(r.parseOptions),
  });
  return { issues: [g(n, e)] };
}
function w(t) {
  return c(function (r, n) {
    if (!Array.isArray(r))
      return h("Expected array", n.path, { code: "type.array", input: r, parseOptions: n.options });
    let i = j(n.options),
      u = [],
      s = new Array(r.length),
      a = 0;
    for (let l of r) {
      let p = $(t, l, n, a);
      if (p.issues) {
        if (i) return p;
        u.push(...p.issues);
      } else s[a] = p.value;
      a += 1;
    }
    return u.length > 0 ? { issues: u } : ((s.length = a), { value: s });
  });
}
function E(t) {
  return c(function (r, n) {
    for (let i of t) if (r === i) return { value: r };
    return h("Expected one of: " + t.map(String).join(", "), n.path, {
      code: "enum.invalid_value",
      input: r,
      values: { values: [...t] },
      parseOptions: n.options,
    });
  });
}
function I(t) {
  return c(function (r, n) {
    return r !== t
      ? h("Expected literal value", n.path, {
          code: "literal.invalid_value",
          input: r,
          values: { expected: t },
          parseOptions: n.options,
        })
      : { value: t };
  });
}
function C() {
  return c(function (e, r) {
    return typeof e != "number" || !Number.isFinite(e)
      ? h("Expected number", r.path, { code: "type.number", input: e, parseOptions: r.options })
      : { value: e };
  });
}
function b(t, e) {
  return c(function (n, i) {
    if (typeof n != "object" || n === null || Array.isArray(n))
      return h("Expected object", i.path, { code: "type.object", input: n, parseOptions: i.options });
    let u = j(i.options),
      s = [],
      a = {},
      l = n,
      p = e?.unknownKeys ?? "strip";
    for (let o of Object.keys(t)) {
      let f = $(t[o], l[o], i, o);
      if (f.issues) {
        if (u) return f;
        s.push(...f.issues);
      } else (Object.prototype.hasOwnProperty.call(l, o) || f.value !== void 0) && (a[o] = f.value);
    }
    if (p === "passthrough" || p === "error") {
      for (let o in l)
        if (Object.prototype.hasOwnProperty.call(l, o) && !Object.prototype.hasOwnProperty.call(t, o))
          if (p === "passthrough") a[o] = l[o];
          else {
            let f = m(i, {
              code: "object.unknown_key",
              defaultMessage: "Unknown key",
              input: l[o],
              path: k(i.path, o),
              values: { key: o },
            });
            if (u) return { issues: [f] };
            s.push(f);
          }
    }
    return s.length > 0 ? { issues: s } : { value: a };
  });
}
function N(t) {
  return c(function (r, n) {
    return r === void 0 ? { value: void 0 } : t["~run"](r, n);
  });
}
function K() {
  return c(function (e, r) {
    return typeof e != "string"
      ? h("Expected string", r.path, { code: "type.string", input: e, parseOptions: r.options })
      : { value: e };
  });
}
class T extends Error {
  issues;
  constructor(e, r = "Validation failed") {
    super(r), (this.name = "ValidationError"), (this.issues = e);
  }
}
function V(t, e, r) {
  let n = t["~standard"].validate(e, r);
  if (n.issues) throw new T(n.issues);
  return n.value;
}
const B = (t, e, r, n) => {
    const i = {
        section: "Collection",
        update: "Product",
        outcome: "Metaobject",
        theme: "Metaobject",
        persona: "Metaobject",
        product: "Metaobject",
      }[t],
      u = typeof e == "string" && /^gid:\/\/shopify\/(Collection|Product|Metaobject)\/(\d+)$/.exec(e);
    if (!u || u[1] !== i) throw new Error(`Invalid graph ${t} reference: ${String(e)}`);
    if (typeof r != "string" || !r.trim()) throw new Error(`Missing graph label for ${e}`);
    if (typeof n != "string" || !n.trim()) throw new Error(`Missing graph handle for ${e}`);
    return { id: `${t}:${u[2]}`, type: t, label: r, handle: n, ref: e };
  },
  A = ["outcome", "theme", "persona", "product"],
  D = ["section", "update", ...A],
  d = K().refine((t) => t.trim().length > 0, "Required text"),
  G = b(
    {
      schemaVersion: I(2),
      locale: d,
      nodes: w(
        b(
          {
            id: d,
            type: E(D),
            label: d,
            handle: d,
            ref: d,
            weight: N(C().refine((t) => t >= 0, "Expected non-negative weight")),
          },
          { unknownKeys: "error" },
        ).refine((t) => t.weight === void 0 || t.type === "update", "Only updates can carry weight"),
      ),
      edges: w(
        b(
          { id: d, type: E(["contains", "assigned_to", "related_to"]), source: d, target: d },
          { unknownKeys: "error" },
        ),
      ),
    },
    { unknownKeys: "error" },
  ),
  R = (t) => {
    const e = V(G, t),
      r = new Map();
    for (const i of e.nodes) {
      const u = B(i.type, i.ref, i.label, i.handle);
      if (i.id !== u.id || r.has(i.id)) throw new Error(`Invalid or duplicate graph node ${i.id} (${i.ref})`);
      r.set(i.id, i);
    }
    const n = new Set();
    for (const i of e.edges) {
      const u = r.get(i.source)?.type,
        s = r.get(i.target)?.type;
      if (
        i.type === "contains"
          ? u !== "section" || s !== "update"
          : i.type === "related_to"
            ? u !== "update" || s !== "update" || i.source === i.target
            : u !== "update" || !A.some((a) => a === s)
      )
        throw new Error(`Invalid graph endpoints for ${i.id}: ${i.source} → ${i.target}`);
      if (i.id !== `${i.type}:${i.source}:${i.target}` || n.has(i.id))
        throw new Error(`Invalid or duplicate graph edge ${i.id}`);
      n.add(i.id);
    }
    return e;
  };
export { R as validateGraph };
