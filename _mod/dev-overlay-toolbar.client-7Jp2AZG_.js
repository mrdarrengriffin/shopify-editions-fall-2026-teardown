import { captureHydrationLabels as de } from "./dev-overlay-labels-C9lgWr1Z.js";
import { n as ce } from "./frameLoop-CeLX9Qef.js";
const Q = 500,
  Z = 200,
  ee = "/[truncated]";
function le(e) {
  const t = e.trim();
  if (/^blob:/i.test(t)) return "blob:";
  if (/^data:/i.test(t)) return "data:";
  if (!t) return;
  let n;
  try {
    n = new URL(t, document.baseURI);
  } catch {
    return;
  }
  if (n.protocol !== "http:" && n.protocol !== "https:") return;
  const r = n.pathname
    .split("../shop/")
    .map((c) => {
      let l = c;
      try {
        l = decodeURIComponent(c);
      } catch {
        return "[redacted]";
      }
      return /^(?:[0-9a-f]{24,}|[0-9a-f]{8}-[0-9a-f-]{27,}|[a-z0-9_-]{32,}|[a-z0-9_-]{8,}\.[a-z0-9_-]{8,}\.[a-z0-9_-]{8,})$|(?:^|[^a-z0-9])(?:access[_-]?token|api[_-]?key|token|key|secret|auth|sig|session|j?sessionid)=.+/i.test(
        l,
      )
        ? "[redacted]"
        : c;
    })
    .join("../shop/");
  if (r.length <= Z) return `${n.origin}${r}`;
  const i = r.slice(0, Z - ee.length),
    a = i.lastIndexOf("../shop/");
  return `${n.origin}${a > 0 ? i.slice(0, a) : i}${ee}`;
}
function ue() {
  const e = [],
    t = new Set();
  let n = 0,
    r = !1,
    i = !1;
  const a = () => {
      r = !0;
      for (const g of t) g.bufferFull = !0;
    },
    c = (g) => {
      if (!i)
        for (const b of g) {
          const w = b,
            N = le(w.name);
          if (!N) continue;
          const S = {
            url: N,
            initiatorType: w.initiatorType,
            startTime: w.startTime,
            duration: w.duration,
            confidence: "unattributed",
          };
          Number.isFinite(w.transferSize) && w.transferSize > 0 && (S.transferSize = w.transferSize),
            e.push(S),
            e.length > Q && (e.shift(), n++);
          for (const A of t)
            S.startTime < A.baseline ||
              (A.resources.push(S), A.resources.length > Q && (A.resources.shift(), A.dropped++));
        }
    },
    l = typeof PerformanceObserver > "u" ? void 0 : new PerformanceObserver((g) => c(g.getEntries())),
    f = () => {
      !i && l && c(l.takeRecords());
    };
  try {
    l?.observe({ type: "resource", buffered: !0 });
  } catch {
    f(), l?.disconnect();
  }
  performance.addEventListener("resourcetimingbufferfull", a);
  const u = () => (f(), { total: e.length, dropped: n, bufferFull: r });
  return {
    snapshot: () => {
      const g = u();
      return { resources: e.map((b) => ({ ...b })), resourceSummary: g };
    },
    summary: u,
    startRecording(g) {
      const b = { baseline: g, resources: [], dropped: 0, bufferFull: r };
      return (
        i || t.add(b),
        () => (
          f(),
          t.delete(b),
          {
            resources: b.resources.map((w) => ({ ...w })),
            resourceSummary: { total: b.resources.length, dropped: b.dropped, bufferFull: b.bufferFull },
          }
        )
      );
    },
    stop() {
      f(),
        (i = !0),
        l?.disconnect(),
        performance.removeEventListener("resourcetimingbufferfull", a),
        t.clear();
    },
  };
}
const B = "rmx:h:",
  fe = "/rmx:h",
  pe = 220,
  me = 300,
  he = 50,
  ge = 1e3;
function be(e) {
  const t = Number.isFinite(e.width) ? Math.max(0, e.width) : 0,
    n = Number.isFinite(e.height) ? Math.max(0, e.height) : 0,
    r = Math.max(0, Math.min(e.right, window.innerWidth) - Math.max(e.left, 0)),
    i = Math.max(0, Math.min(e.bottom, window.innerHeight) - Math.max(e.top, 0)),
    a = t > 0 && n > 0 ? Math.min(1, (r / t) * (i / n)) : 0,
    c = t > 0 || n > 0,
    l = c && e.right >= 0 && e.left <= window.innerWidth && e.bottom >= 0 && e.top <= window.innerHeight,
    f = Math.hypot(
      Math.max(0, -e.right, e.left - window.innerWidth),
      Math.max(0, -e.bottom, e.top - window.innerHeight),
    ),
    u = Number.isFinite(f) ? f : 0;
  return {
    viewport:
      a > 0 || l
        ? "visible"
        : u <= me && c
          ? "near"
          : e.bottom < 0
            ? "passed-above"
            : e.top > window.innerHeight
              ? "passed-below"
              : "offscreen",
    intersectionRatio: a,
    distancePx: u,
  };
}
function we(e, t) {
  const n = (e.length > 0 ? e : [t]).map(be),
    r = Math.max(...n.map((a) => a.intersectionRatio)),
    i = Math.min(...n.map((a) => a.distancePx));
  return n.some((a) => a.viewport === "visible")
    ? { viewport: "visible", intersectionRatio: r, distancePx: i }
    : n.some((a) => a.viewport === "near")
      ? { viewport: "near", intersectionRatio: r, distancePx: i }
      : n.every((a) => a.viewport === "passed-above")
        ? { viewport: "passed-above", intersectionRatio: r, distancePx: i }
        : n.every((a) => a.viewport === "passed-below")
          ? { viewport: "passed-below", intersectionRatio: r, distancePx: i }
          : { viewport: "offscreen", intersectionRatio: r, distancePx: i };
}
function V(e, t = 0, n = new WeakSet()) {
  if (typeof e == "number") return Number.isFinite(e) ? e : null;
  if (typeof e == "boolean" || e === null) return e;
  if (typeof e == "string") {
    const i = e.trim();
    return /(?:https?:\/\/|\b(?:blob:|data:)|\S+@\S+\.[a-z]{2,}|^(?:\.{0,2}[\\/]|[a-z]:[\\/])|^(?:[\w@.-]+[\\/])+\S+$|^[\w@.-]+\.[a-z][a-z0-9]{0,9}$)/i.test(
      i,
    )
      ? "[redacted]"
      : e.slice(0, 200);
  }
  if (typeof e != "object" || t >= 3 || n.has(e)) return null;
  if ((n.add(e), Array.isArray(e))) return e.slice(0, 20).map((i) => V(i, t + 1, n));
  const r = {};
  for (const [i, a] of Object.entries(Object.getOwnPropertyDescriptors(e)).slice(0, 20))
    /url|path|src|href|stack|token|secret|authorization|cookie|module|password|email|address|phone|customer/i.test(
      i,
    ) ||
      ("value" in a && (r[i] = V(a.value, t + 1, n)));
  return r;
}
function ye(e, t) {
  const n = [],
    r = [],
    i = document.createTreeWalker(document, NodeFilter.SHOW_COMMENT);
  let a = i.nextNode();
  for (; a; ) {
    const c = a,
      l = c.data.trim();
    if (l.startsWith(B)) n.push(c);
    else if (l === fe) {
      const f = n.pop();
      if (f) {
        const u = f.data.trim().slice(B.length).trim();
        if (u) {
          const R = ve(f, c);
          if (R) {
            const g = e.get(u);
            r.push({
              id: u,
              start: f,
              end: c,
              range: R,
              hiddenRoots: [],
              label: t.get(u) ?? g?.label ?? u,
              commits: g?.commits ?? 0,
              flashUntil: g?.flashUntil ?? 0,
            });
          }
        }
      }
    }
    a = i.nextNode();
  }
  return r;
}
function ve(e, t) {
  if (!(!e.isConnected || !t.isConnected))
    try {
      const n = document.createRange();
      return n.setStartAfter(e), n.setEndBefore(t), n;
    } catch {
      return;
    }
}
function X(e) {
  if (!e.start.isConnected || !e.end.isConnected) return !1;
  try {
    return e.range.setStartAfter(e.start), e.range.setEndBefore(e.end), !0;
  } catch {
    return !1;
  }
}
function xe(e) {
  if (e instanceof Comment) return e.data.trim().startsWith(B);
  if (!(e instanceof Element || e instanceof DocumentFragment)) return !1;
  const t = document.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  let n = t.nextNode();
  for (; n; ) {
    if (n.data.trim().startsWith(B)) return !0;
    n = t.nextNode();
  }
  return !1;
}
function Se(e) {
  return e.type === "childList" && Array.from(e.addedNodes).some(xe);
}
function Ee(e, t, n) {
  if (e.target === n || n.contains(e.target)) return !1;
  try {
    if (t.range.comparePoint(e.target, 0) === 0) return !0;
    if (e.type !== "childList") return !1;
    const r = e.target.childNodes,
      i = e.nextSibling ? Array.prototype.indexOf.call(r, e.nextSibling) : -1,
      a = e.previousSibling ? Array.prototype.indexOf.call(r, e.previousSibling) : -1,
      c = i >= 0 ? i : a >= 0 ? a + 1 : r.length;
    return t.range.comparePoint(e.target, c) === 0;
  } catch {
    return !1;
  }
}
const Re = "[hidden], .invisible, .opacity-0";
function Ae(e) {
  const t = getComputedStyle(e);
  return e.hasAttribute("hidden") || t.visibility === "hidden" || t.opacity === "0";
}
function te(e) {
  for (const t of e) t.hiddenRoots = [];
  for (const t of document.querySelectorAll(Re))
    if (!t.closest("[data-remix-dev-overlay], [data-remix-dev-toolbar]") && Ae(t))
      for (const n of e) {
        try {
          if (
            n.range.comparePoint(t, 0) !== 0 ||
            !n.range.intersectsNode(t) ||
            n.hiddenRoots.some((r) => r.contains(t))
          )
            continue;
        } catch {
          continue;
        }
        n.hiddenRoots.push(t);
      }
}
function De(e, t) {
  return e.left >= t.left && e.top >= t.top && e.right <= t.right && e.bottom <= t.bottom;
}
function Me(e) {
  return `${Math.round(e.width)}×${Math.round(e.height)}`;
}
function G(e, t, n, r) {
  const i = document.createElement("div");
  return (
    (i.dataset.kind = n),
    (i.dataset.islandId = e.id),
    (i.dataset.label = e.label),
    (i.dataset.flashing = String(r)),
    (i.dataset.hidden = String(n === "hidden")),
    Object.assign(i.style, {
      position: "fixed",
      left: `${t.left}px`,
      top: `${t.top}px`,
      width: `${t.width}px`,
      height: `${t.height}px`,
      boxSizing: "border-box",
      border: `2px ${n === "hidden" ? "dashed" : "solid"} ${n === "pulse" ? "#ff3b30" : "#00a8ff"}`,
      background: n === "pulse" ? "rgba(255, 59, 48, 0.14)" : "rgba(0, 168, 255, 0.06)",
      opacity: n === "hidden" ? "0.45" : "1",
    }),
    i
  );
}
function Oe(e, t, n) {
  const r = document.createElement("div");
  return (
    (r.dataset.kind = "label"),
    (r.dataset.islandId = e.id),
    (r.dataset.label = e.label),
    (r.dataset.flashing = String(n)),
    (r.textContent = `${e.label} · ${Me(t)} · ${e.commits} DOM commits`),
    Object.assign(r.style, {
      position: "fixed",
      left: `${Math.max(0, t.left)}px`,
      top: `${Math.max(0, t.top - 22)}px`,
      maxWidth: "min(520px, calc(100vw - 8px))",
      overflow: "hidden",
      padding: "3px 6px",
      borderRadius: "3px",
      background: "#006ea8",
      color: "#fff",
      font: "11px/16px ui-monospace, SFMono-Regular, Menlo, monospace",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
    }),
    r
  );
}
function oe() {
  globalThis.__remixDevOverlay?.stop();
}
function Ce(e = { showBoundaries: !0, showHidden: !0, flashUpdates: !0 }, t = de()) {
  oe();
  const n = globalThis,
    r = document.createElement("div");
  (r.dataset.remixDevOverlay = ""),
    r.setAttribute("aria-hidden", "true"),
    Object.assign(r.style, {
      position: "fixed",
      inset: "0",
      zIndex: "2147483646",
      pointerEvents: "none",
      overflow: "visible",
    }),
    document.documentElement.append(r);
  const i = ue();
  let a = [],
    c,
    l = !1,
    f = !0,
    u = !1,
    R = e.showBoundaries,
    g = e.showHidden,
    b = e.flashUpdates;
  const w = new Set(),
    N = [],
    S = new Set();
  let A,
    L,
    M = !0;
  function D(s) {
    for (const d of S) d.events.length < ge ? d.events.push(structuredClone(s)) : (d.droppedEvents += 1);
    for (const d of w)
      try {
        d(structuredClone(s));
      } catch {}
  }
  function v(s) {
    const d = s.range.getBoundingClientRect(),
      m = Array.from(s.range.getClientRects()).filter((h) => h.width > 0 && h.height > 0),
      y = s.hiddenRoots.map((h) => h.getBoundingClientRect()).filter((h) => h.width > 0 && h.height > 0),
      x = (m.length > 0 ? m : [d]).filter((h) => h.width > 0 && h.height > 0 && !y.some((_) => De(h, _)));
    return { island: s, boundingRect: d, rects: x, hiddenRects: y };
  }
  function U({ island: s, boundingRect: d, rects: m, hiddenRects: y }) {
    const { x, y: h, width: _, height: C, top: E, right: o, bottom: p, left: F } = d;
    return {
      id: s.id,
      label: s.label,
      commits: s.commits,
      flashing: s.flashUntil > performance.now(),
      ...we(m, d),
      boundingRect: { x, y: h, width: _, height: C, top: E, right: o, bottom: p, left: F },
      rectCount: m.length,
      hiddenRectCount: y.length,
    };
  }
  function z(s) {
    return {
      options: { showBoundaries: R, showHidden: g, flashUpdates: b },
      lifecycleEvents: [...N],
      islands: s,
      resourceSummary: i.summary(),
    };
  }
  function O(s) {
    return { ...z(s), ...i.snapshot() };
  }
  function I() {
    u || c || (c = ce(re));
  }
  function P() {
    const s = new Map(a.map((m) => [m.id, m])),
      d = ye(s, t);
    for (const m of a) m.range.detach();
    (a = d), (f = !0);
  }
  function J() {
    (M = !0), (l = !1), P(), I();
  }
  function W() {
    (l = !0), I();
  }
  function re() {
    if (((c = void 0), u)) return;
    l && ((l = !1), P());
    for (const o of a)
      if (!X(o)) {
        W();
        return;
      }
    f && (te(a), (f = !1));
    const s = a.map((o) => {
        const p = v(o);
        return { measurement: p, snapshot: U(p) };
      }),
      d = z(s.map(({ snapshot: o }) => o)),
      m = A,
      y = M;
    y && (D({ type: "refresh", at: Date.now() }), (M = !1));
    const x = new Map(m?.islands.map((o) => [o.id, o]));
    let h = !m || y || JSON.stringify(m.options) !== JSON.stringify(d.options);
    for (const o of d.islands) {
      const p = x.get(o.id),
        F = { id: o.id, label: o.label, commits: o.commits, viewport: o.viewport };
      p || D({ type: "island-added", at: Date.now(), island: F }),
        p &&
          p.commits !== o.commits &&
          D({ type: "island-update", at: Date.now(), island: F, commitDelta: o.commits - p.commits }),
        p &&
          p.viewport !== o.viewport &&
          D({ type: "viewport-change", at: Date.now(), island: F, from: p.viewport }),
        (!p || p.commits !== o.commits || p.viewport !== o.viewport) && (h = !0),
        x.delete(o.id);
    }
    for (const o of x.values())
      D({
        type: "island-removed",
        at: Date.now(),
        island: { id: o.id, label: o.label, commits: o.commits, viewport: o.viewport },
      }),
        (h = !0);
    h && D({ type: "snapshot", at: Date.now(), snapshot: d }), (A = d);
    const _ = performance.now();
    let C = !1;
    const E = document.createDocumentFragment();
    for (const {
      measurement: { island: o, boundingRect: p, rects: F, hiddenRects: se },
      snapshot: ae,
    } of s) {
      const H = o.flashUntil > _,
        k = ae.viewport;
      if (((C ||= H), (k === "visible" || k === "near") && R)) {
        for (const K of F) E.append(G(o, K, "boundary", H));
        if (g) for (const K of se) E.append(G(o, K, "hidden", H));
      }
      H && p.width > 0 && p.height > 0 && E.append(G(o, p, "pulse", !0)),
        (k === "visible" || k === "near" || H) && (p.width > 0 || p.height > 0) && E.append(Oe(o, p, H));
    }
    r.replaceChildren(E), C && I();
  }
  function ie(s) {
    return (
      s.type === "childList" ||
      (s.type === "attributes" &&
        (s.attributeName === "hidden" || s.attributeName === "class" || s.attributeName === "style"))
    );
  }
  const q = new MutationObserver((s) => {
    if (u) return;
    const d = s.filter((y) => y.target !== r && !r.contains(y.target));
    if (d.length === 0) return;
    let m = !1;
    d.some(Se) && W();
    for (const y of a) {
      if (!X(y)) {
        W();
        continue;
      }
      d.some((x) => Ee(x, y, r)) &&
        ((y.commits += 1), (y.flashUntil = b ? performance.now() + pe : 0), (m = !0));
    }
    d.some(ie) && ((f = !0), (m = !0)), m && I();
  });
  q.observe(document, { subtree: !0, childList: !0, attributes: !0, characterData: !0 });
  function j(s) {
    (s?.target instanceof Node && (s.target === r || r.contains(s.target))) || ((f = !0), I());
  }
  const Y = new AbortController(),
    { signal: $ } = Y;
  window.addEventListener("scroll", I, { capture: !0, passive: !0, signal: $ }),
    window.addEventListener("resize", j, { signal: $ }),
    document.addEventListener("transitionend", j, { capture: !0, signal: $ }),
    document.addEventListener("animationend", j, { capture: !0, signal: $ }),
    document.addEventListener(
      "remix-overlay:lifecycle",
      (s) => {
        let d;
        try {
          d = V(s.detail);
        } catch {
          d = null;
        }
        const m = { at: Date.now(), detail: d };
        N.push(m), N.length > he && N.shift(), D({ type: "lifecycle", ...m });
      },
      { signal: $ },
    );
  const T = {
    refresh: J,
    getSnapshot() {
      return u
        ? O([])
        : ((l || a.some((s) => !X(s))) && ((l = !1), P()), f && (te(a), (f = !1)), O(a.map(v).map(U)));
    },
    subscribe(s) {
      return u || w.add(s), () => w.delete(s);
    },
    startRecording() {
      const s = Date.now(),
        d = performance.now(),
        m = i.startRecording(d),
        y = T.getSnapshot(),
        x = { events: [], droppedEvents: 0 };
      u || S.add(x);
      let h;
      return {
        stop() {
          if (h) return h;
          S.delete(x);
          const _ = Date.now(),
            { events: C } = x,
            E = new Map();
          for (const o of C)
            o.type === "island-update" &&
              o.island &&
              E.set(o.island.id, (E.get(o.island.id) ?? 0) + (o.commitDelta ?? 0));
          return (
            (h = {
              startedAt: s,
              startedAtPerformance: d,
              endedAt: _,
              durationMs: _ - s,
              initialSnapshot: y,
              finalSnapshot: u ? (L ?? T.getSnapshot()) : T.getSnapshot(),
              events: [...C],
              droppedEvents: x.droppedEvents,
              ...m(),
              summary: {
                updatedIslands: Array.from(E, ([o, p]) => ({ id: o, commits: p })),
                enteredViewport: [
                  ...new Set(
                    C.filter((o) => o.type === "viewport-change" && o.island?.viewport === "visible").map(
                      (o) => o.island.id,
                    ),
                  ),
                ],
                exitedViewport: [
                  ...new Set(
                    C.filter((o) => o.type === "viewport-change" && o.from === "visible").map(
                      (o) => o.island.id,
                    ),
                  ),
                ],
                noisyIslands: [...E].filter(([, o]) => o > 1).map(([o]) => o),
                lifecycleEvents: C.filter((o) => o.type === "lifecycle").map(({ at: o, detail: p }) => ({
                  at: o,
                  detail: p,
                })),
              },
            }),
            h
          );
        },
      };
    },
    setOptions(s) {
      (R === s.showBoundaries && g === s.showHidden && b === s.flashUpdates) ||
        ((R = s.showBoundaries),
        (g = s.showHidden),
        (b = s.flashUpdates),
        b || a.forEach((d) => (d.flashUntil = 0)),
        D({ type: "options-change", at: Date.now(), options: { ...s } }),
        I());
    },
    stop() {
      if (!u) {
        (L = T.getSnapshot()), (u = !0), q.disconnect(), i.stop();
        for (const s of a) s.range.detach();
        (a = []),
          Y.abort(),
          w.clear(),
          S.clear(),
          c?.(),
          r.remove(),
          n.__remixDevOverlay === T && delete n.__remixDevOverlay;
      }
    },
  };
  return (n.__remixDevOverlay = T), J(), T;
}
const ne = "fall2026:remix-overlay";
function Ie(e) {
  if (window.top !== window) return;
  const t = globalThis;
  t.__remixDevToolbarCleanup?.(),
    document.querySelectorAll("[data-remix-dev-toolbar]").forEach((v) => v.remove()),
    oe();
  let n = {};
  try {
    n = JSON.parse(localStorage.getItem(ne) ?? "{}") ?? {};
  } catch {}
  const r = new URLSearchParams(location.search).get("remix-overlay");
  let i = r === "0" ? !1 : r === "" || r === "1" ? !0 : n.enabled === !0,
    a = n.boundaries !== !1,
    c = n.hidden !== !1,
    l = n.flash !== !1,
    f;
  const u = document.createElement("div");
  (u.dataset.remixDevToolbar = ""), (u.dataset.rmxPreserveDom = "");
  const R = u.attachShadow({ mode: "open" }),
    g = document.createElement("style");
  g.textContent = `
    :host { all: initial; position: fixed; bottom: 16px; right: 16px; z-index: 2147483647; font: 12px/1.4 system-ui, sans-serif; color: #fff; }
    nav { display: flex; align-items: center; gap: 6px; padding: 6px; border-radius: 24px; background: #152936; box-shadow: 0 2px 12px #0008; }
    button { color: inherit; background: transparent; border: 1px solid #81949f; border-radius: 16px; padding: 5px 9px; font: inherit; cursor: pointer; }
    button[aria-pressed="true"] { background: #006ea8; border-color: #62c4f3; }
    button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
  `;
  const b = document.createElement("nav");
  b.setAttribute("aria-label", "Remix development overlay"), b.setAttribute("role", "toolbar");
  function w(v, U, z) {
    const O = document.createElement("button");
    return (
      (O.type = "button"),
      (O.textContent = v),
      (O.title = U),
      O.setAttribute("aria-label", U),
      O.addEventListener("click", z),
      b.append(O),
      O
    );
  }
  const N = w("Remix", "Toggle Remix development overlay (Alt+Shift+R)", () => {
      (i = !i), M();
    }),
    S = w("Bounds", "Show boundary outlines", () => {
      (a = !a), M();
    }),
    A = w("Hidden", "Show hidden regions", () => {
      (c = !c), M();
    }),
    L = w("Flash", "Flash on DOM updates", () => {
      (l = !l), M();
    });
  function M() {
    N.setAttribute("aria-pressed", String(i)),
      S.setAttribute("aria-pressed", String(a)),
      A.setAttribute("aria-pressed", String(c)),
      L.setAttribute("aria-pressed", String(l)),
      (S.hidden = !i),
      (A.hidden = !i),
      (L.hidden = !i),
      i
        ? ((f ??= Ce({ showBoundaries: a, showHidden: c, flashUpdates: l }, e)),
          f.setOptions({ showBoundaries: a, showHidden: c, flashUpdates: l }))
        : (f?.stop(), (f = void 0));
    try {
      localStorage.setItem(ne, JSON.stringify({ enabled: i, boundaries: a, hidden: c, flash: l }));
    } catch {}
  }
  function D(v) {
    v.code !== "KeyR" ||
      !v.altKey ||
      !v.shiftKey ||
      v.ctrlKey ||
      v.metaKey ||
      v.repeat ||
      (v.target instanceof Element && v.target.closest("input, textarea, select, [contenteditable]")) ||
      (v.preventDefault(), (i = !i), M());
  }
  R.append(g, b),
    document.documentElement.append(u),
    window.addEventListener("keydown", D),
    M(),
    (t.__remixDevToolbarCleanup = () => {
      window.removeEventListener("keydown", D), f?.stop(), u.remove(), delete t.__remixDevToolbarCleanup;
    });
}
export { Ie as mountDevOverlayToolbar };
