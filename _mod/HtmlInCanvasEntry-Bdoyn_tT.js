const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/htmlInCanvasWebGpu.client-CCocYEXD.js",
      "assets/clamp-co6UzHBn.js",
      "assets/frameLoop-CeLX9Qef.js",
      "assets/smoothScroll-DNrjGF3X.js",
      "assets/mesh.wgsl-CahI0rXV.js",
      "assets/residentSections-BEssGc_p.js",
      "assets/rootMirror-C_uDdAx6.js",
      "assets/colorPalette-VQpnhwit.js",
      "assets/frame-uyhWmNSJ.js",
      "assets/easing-BhDfN7yX.js",
      "assets/build-section-frame-DWD4QmNv.js",
      "assets/highlight-BjwrNyM6.js",
      "assets/pack-D8z7b37W.js",
      "assets/style-i6E2ipwK.js",
      "assets/wire-BRlyKbjJ.js",
      "assets/journey-B8CyvxC_.js",
      "assets/sectionDot-BkMs301a.js",
      "assets/preload-helper-CZudbPKK.js",
      "assets/htmlInCanvasTilt-BU1xBiHq.js",
      "assets/shader-7sCtY4bJ.js",
      "assets/surface-Be90gCgo.js",
      "assets/random-CYrl7Amx.js",
    ]),
) => i.map((i) => d[i]);
import { _ as N } from "./preload-helper-CZudbPKK.js";
import { o as _ } from "./frameLoop-CeLX9Qef.js";
import { g as B } from "./heroTap-in5modXK.js";
import { r as H } from "./reportError-C6Wenmm6.js";
import { HtmlInCanvasCornerButton as R } from "./HtmlInCanvasCornerButton-DFPZ9Nom.js";
import { g as Y, f as C } from "./formatCopy-Cs7MVtfe.js";
import { g as j } from "./htmlInCanvasRegistry-Bxwl97Ch.js";
import { s as A } from "./htmlInCanvasSupport-jvDIQ00h.js";
import { c as U } from "./htmlInCanvasTilt-BU1xBiHq.js";
import { c as X } from "./client-entries-B1h-jQ5r.js";
import { F as G } from "./component-BWKvSpCv.js";
import { j as g } from "./jsx-CLqwgotn.js";
function O(r) {
  const t = new Map(r.glyphs.map((o) => [o.id, o]));
  return {
    characters: new Map(
      r.characters.map(([o, s]) => {
        const n = t.get(s);
        if (!n) throw new Error(`Stored font is missing glyph ${s}.`);
        return [o, n];
      }),
    ),
    glyphs: r.glyphs,
    ascent: r.ascent,
    descent: r.descent,
    kerning: new Map(r.kerning),
  };
}
function se(r) {
  return r.length
    ? r.reduce(
        (t, o) => ({
          minX: Math.min(t.minX, o.minX),
          minY: Math.min(t.minY, o.minY),
          maxX: Math.max(t.maxX, o.maxX),
          maxY: Math.max(t.maxY, o.maxY),
        }),
        { ...r[0] },
      )
    : { minX: 0, minY: 0, maxX: 0, maxY: 0 };
}
function K(r) {
  const t = new Map();
  return async () => {
    r.throwIfAborted();
    const o = {
        "Sohne Mono": new URL(
          "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/SohneMono-Leicht.font-DiqIq5gU.bin",
          import.meta.url,
        ),
        "PP Neue Montreal": new URL(
          "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/PPNeueMontreal-Medium.font-CUEBvbGq.bin",
          import.meta.url,
        ),
        "Noto Sans JP": new URL(
          "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/NotoSansJP-Regular.font-D3ZE1z1e.bin",
          import.meta.url,
        ),
      },
      s = new Set(
        [...document.fonts]
          .filter((n) => n.status !== "unloaded")
          .map((n) => n.family.replace(/^["']|["']$/g, "")),
      );
    return Promise.all(
      Object.entries(o)
        .filter(([n]) => s.has(n))
        .map(async ([n, l]) => {
          let a = t.get(n);
          return (
            a ||
              ((a = fetch(l, { signal: r })
                .then(async (i) => {
                  if (!i.ok) throw new Error(`Title font ${n}: ${i.status}`);
                  const m = await i.json();
                  return O(m);
                })
                .catch((i) => {
                  throw (t.delete(n), r.aborted || H(i, "HtmlInCanvas.titleFont", { fontUrl: l }), i);
                })),
              t.set(n, a)),
            [n, await a]
          );
        }),
    );
  };
}
const p = {
  active: "New Dimension on",
  failed: "New Dimension unavailable",
  ready: "New Dimension off",
  cornerLabel: "New Dimension",
  cornerBack: "Back",
  start: "start",
  closeGame: "Close the game",
  muteGame: "Mute the game",
  finished: "Finished",
  fell: "Fell in a hole",
  again: "again",
  close: "close",
  gradeLabel: "grade",
  finish: "finish",
  distance: "distance",
  size: "size",
  points: "points",
  pixels: "px",
  sum: "{nodes} nodes + {words} words",
  sumJumps: "{nodes} nodes + {words} words + {jumps} for jumps",
  breakdown: "breakdown",
  clock: "{minutes}:{seconds}",
  steerKeys: "← →   A D",
  steer: "steer",
  fasterKeys: "↑   W   scroll up",
  faster: "faster",
  brakeKeys: "↓   S   scroll down",
  brake: "brake",
  minSpeed: "v ≥ {speed} px/s",
  hopKey: "space",
  hop: "hop",
  toFinish: "↑ {distance} px to the finish",
  toFinishShort: "↑ {distance} px",
  toFinishLabel: "to the finish",
  speedLabel: "speed",
  pageWidth: "page   W = {width} px",
  hole: "hole   r = {radius} px",
  holeBox: "hole   {width} × {depth} px",
  gameOver: "fall in: game over",
  boost: "boost   jump",
  boostLine: "v → {speed} px/s   z ↑ {height} px",
  finale: "finale   jump",
  finaleLine: "z ↑ {height} px",
  push: "push   {dir}",
  pushLine: "a = {accel} px/s²",
};
function ae(r) {
  const t = { ...p, ...r?.strings },
    o = Y(r?.locale),
    s = new Intl.NumberFormat(o, { maximumFractionDigits: 0 }),
    n = new Intl.NumberFormat(o, { useGrouping: !1 }),
    l = new Intl.NumberFormat(o, {
      useGrouping: !1,
      minimumIntegerDigits: 2,
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  return {
    copy: t,
    number: (a) => s.format(Math.round(a)),
    format: (a, i) => C(t[a], i),
    clock: (a) => {
      const i = Math.round(a * 10);
      return C(t.clock, { minutes: n.format(Math.floor(i / 600)), seconds: l.format((i % 600) / 10) });
    },
  };
}
const T = "expo-mode",
  F = [
    "input",
    "textarea",
    "select",
    '[contenteditable]:not([contenteditable="false"])',
    "dialog",
    '[role="dialog"]',
    '[aria-modal="true"]',
    '[role="menu"]',
    '[role="listbox"]',
    '[role="combobox"]',
    "[popover]",
  ].join(", "),
  W = { active: p.active, failed: p.failed, ready: p.ready };
function S(r, t) {
  return r.composedPath().some((o) => o instanceof Element && o.matches(t));
}
const ie = X(import.meta.url + "#HtmlInCanvasEntry", function (t) {
  let o = "unsupported",
    s = null,
    n,
    l,
    a,
    i = 0,
    m = !1,
    d = 0,
    h = !1;
  const b = (e) => {
      e !== i && ((i = e), l?.(e));
    },
    D = () => b(n?.amount() ?? 0),
    u = (e = !1) => {
      d++, (h = m), (m = !1);
      const c = s;
      e && c ? U(() => c.abort(), "out") : c?.abort(),
        (s = null),
        (n = void 0),
        a?.(),
        (a = void 0),
        b(0),
        t.signal.aborted || t.update();
    },
    w = async (e) => {
      const c = s,
        f = ++d;
      if (c) {
        if (!n) return e === -1 ? u() : void 0;
        await n.to(e), !(d !== f || s !== c) && (e === 1 ? ((m = !0), t.update()) : u(!0));
      }
    },
    y = () => w(-1),
    v = () => {
      (o = "failed"), u();
    },
    x = K(t.signal),
    E = () =>
      N(
        () => import("./htmlInCanvasWebGpu.client-CCocYEXD.js").then((e) => e.a2),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
      ),
    I = () => {
      o !== "supported" || s || t.signal.aborted || Promise.all([E(), x()]).catch(() => {});
    },
    M = async () => {
      const e = new AbortController();
      (s = e), a?.(), (a = _(D)), t.update();
      try {
        const [{ runHtmlInCanvasWebGpu: c }, f] = await Promise.all([E(), x()]);
        if (e.signal.aborted || t.signal.aborted) return;
        const L = await c(j(t.frames.top), AbortSignal.any([t.signal, e.signal]), v, B(t.frames.top), f, {
          strings: t.props.strings,
          locale: t.props.locale,
          game: t.props.game,
        });
        if (e.signal.aborted || !L) return;
        (n = L), w(1);
      } catch (c) {
        if (e.signal.aborted) return;
        reportError(c), v();
      }
    },
    k = () => {
      s ? y() : M();
    },
    P = () => (o !== "supported" ? o : s ? (m ? "active" : "entering") : "ready");
  return (
    t.queueTask(() => {
      A() &&
        ((o = "supported"),
        window.navigation?.addEventListener(
          "navigate",
          (e) => {
            new URL(e.destination.url).pathname !== location.pathname && u();
          },
          { signal: t.signal },
        ),
        t.signal.addEventListener("abort", () => u(), { once: !0 }),
        window.addEventListener(
          "keydown",
          (e) => {
            if (!(o !== "supported" || e.isComposing || e.defaultPrevented)) {
              if (e.key === "Escape") {
                s && !S(e, F) && (e.preventDefault(), y());
                return;
              }
              (e.key !== "~" && e.code !== "Backquote") ||
                e.repeat ||
                e.metaKey ||
                ((e.ctrlKey || e.altKey) && !e.getModifierState("AltGraph")) ||
                S(e, F) ||
                (e.preventDefault(), k());
            }
          },
          { signal: t.signal },
        ),
        new URLSearchParams(location.search).has(T) && M(),
        t.update());
    }),
    () => {
      const e = P();
      return g(G, {
        children: [
          e === "unsupported" || e === "failed"
            ? null
            : g(R, {
                pressed: e === "entering" || e === "active",
                settled: e === "active",
                label: t.props.strings?.cornerLabel ?? p.cornerLabel,
                backLabel: t.props.strings?.cornerBack ?? p.cornerBack,
                onToggle: k,
                onPrefetch: I,
                connect: (c, f) => {
                  (l = c),
                    c(i),
                    f.addEventListener("abort", () => {
                      l === c && (l = void 0);
                    });
                },
              }),
          g("output", {
            class: "sr-only",
            "data-html-in-canvas-entry": "",
            "data-state": e,
            "aria-live": "polite",
            children: e === "ready" && !h ? null : (t.props.strings?.[e] ?? W[e]),
          }),
        ],
      });
    }
  );
});
export { T as E, ie as H, ae as g, se as u };
