import { c as X } from "./clamp-co6UzHBn.js";
import { c as z } from "./clsx-B-dksMZM.js";
import { Image as et } from "./Image-D_dPd3ZK.js";
import { l as U, s as L, r as R } from "./easing-BhDfN7yX.js";
import { MerchArtwork as ot } from "./MerchArtwork-D4a1F9Ph.js";
import { r as w } from "./ref-mixin-D6m2Cu20.js";
import { F as st } from "./component-BWKvSpCv.js";
import { o as A } from "./on-mixin-Ci1jclOX.js";
import { j as n } from "./jsx-CLqwgotn.js";
const gt = "merch",
  it = "merch:scene",
  rt = "https://cdn.shopify.com/b/shopify-brochure2-assets/8a9ad3fd4eb3977ea5d2a2cb3c71fab5.glb",
  bt = 0.9;
function Y(e, p) {
  const u = Math.max(80, (p.x - e.x) * 0.5);
  return `M${p.x} ${p.y}C${p.x - u} ${p.y} ${e.x + u * 0.6} ${e.y} ${e.x} ${e.y}`;
}
function nt(e) {
  let p = !1,
    u = -1,
    h = -1,
    $,
    F = 0,
    T;
  const N = { back: [], front: [] },
    O = [],
    y = [],
    _ = [],
    P = [],
    D = [];
  let W = [];
  const J = () => {
      (F = 0), $?.redraw();
    },
    v = (o) => {
      clearTimeout(T);
      const t = u !== o;
      (u = o),
        $?.setHeld(h >= 0),
        t &&
          e.update().then((a) => {
            a.aborted || $?.redraw();
          });
    },
    q = () => {
      clearTimeout(T), h < 0 && (T = setTimeout(() => v(-1), 400));
    };
  e.signal.addEventListener("abort", () => clearTimeout(T), { once: !0 }),
    e.queueTask(() => {
      document.addEventListener(
        "keydown",
        (o) => {
          o.key !== "Escape" || (u < 0 && h < 0) || ((h = -1), v(-1));
        },
        { signal: e.signal },
      );
    });
  const Q = (o) => {
    if (!p) return;
    F !== o.width && ((W = D.map((i) => ({ width: i.offsetWidth, height: i.offsetHeight }))), (F = o.width));
    const t = e.props.getPanelGeometry?.(),
      a = [];
    t && t.top < o.height && a.push(t);
    const s = (o.width - o.size) / 2,
      d = (o.height - o.size) / 2;
    o.anchors.forEach((i, c) => {
      const r = o.tethers[c],
        M = D[c],
        H = P[c];
      if (!M || !H) return;
      const K = Math.hypot(r.x - o.width / 2, r.y - o.height / 2) || 1,
        k = (r.x - o.width / 2) / K,
        G = (r.y - o.height / 2) / K,
        l = W[c],
        j = c === u || c === h,
        m = 0.5 - 0.5 * k;
      let f = r.x + k * 18,
        g = r.y + G * 18;
      (f = X(f, s + 16 + m * l.width, s + o.size - 16 - (1 - m) * l.width)),
        (g = X(g, d + l.height / 2 + 16, d + o.size - l.height / 2 - 16)),
        j &&
          t &&
          t.top < o.height &&
          g + l.height / 2 > t.top &&
          g - l.height / 2 < t.bottom &&
          (f = Math.max(8 + m * l.width, Math.min(f, t.left - 8 - (1 - m) * l.width)));
      const S = {
        left: f - m * l.width,
        right: f + (1 - m) * l.width,
        top: g - l.height / 2,
        bottom: g + l.height / 2,
      };
      let I = 1;
      for (const b of a) {
        const tt = Math.min(S.right, b.right) - Math.max(S.left, b.left);
        Math.min(S.bottom, b.bottom) - Math.max(S.top, b.top) > 0 && (I = Math.min(I, 1 - L(R(tt, -24, 0))));
      }
      const E = j ? 1 : I * U(0.18, 1, L(R(r.depth, -0.5, 0.3)));
      (M.style.transform = `translate(${f}px, ${g}px) translate(${-m * 100}%, -50%)`),
        (M.style.textAlign = k < 0 ? "right" : "left"),
        (M.style.opacity = String(E)),
        (M.style.pointerEvents = E > 0.5 ? "auto" : "none"),
        (H.style.transform = `translate(${i.x}px, ${i.y}px) translate(-50%, -50%)`),
        (H.style.opacity = String(j ? 1 : U(0.18, 1, L(R(i.depth, -0.3, 0.1))))),
        (H.style.pointerEvents = i.depth < -0.1 && !j ? "none" : "auto");
      const V = Math.hypot(r.x - i.x, r.y - i.y),
        Z = `M${i.x} ${i.y}C${i.x + (r.x - i.x) * 0.35} ${i.y + (r.y - i.y) * 0.35} ${r.x - k * V * 0.35} ${r.y - G * V * 0.35} ${r.x} ${r.y}L${r.x + k * 12} ${r.y + G * 12}`;
      for (const b of ["back", "front"]) N[b][c].setAttribute("d", Z), (N[b][c].style.opacity = String(E));
      _[c].setAttribute("cx", String(r.x)),
        _[c].setAttribute("cy", String(r.y)),
        (_[c].style.opacity = String(E)),
        E > 0.25 && a.push(S);
    });
    const x = t && t.y > 0 && t.y < o.height && t.x > o.width / 2,
      C = o.productAnchor;
    if (x) {
      const i = Y(C, t);
      O.forEach((c) => c.setAttribute("d", i)),
        y[0].setAttribute("cx", String(C.x)),
        y[0].setAttribute("cy", String(C.y)),
        y[1].setAttribute("cx", String(t.x)),
        y[1].setAttribute("cy", String(t.y));
    }
    const B = x ? String(U(0.18, 1, L(R(C.depth, -0.4, 0.1)))) : "0";
    for (const i of O) i.style.opacity = B;
    for (const i of y) i.style.opacity = B;
  };
  return () => {
    const o = e.props.decorative ? "span" : "button";
    return n("div", {
      class: z(
        "flex min-w-0 flex-col",
        e.props.decorative
          ? "absolute inset-0"
          : "relative self-stretch global-lg:absolute global-lg:inset-0",
      ),
      role: "group",
      "aria-label": e.props.title,
      children: n("div", {
        class: "relative isolate min-h-0 flex-1 overflow-hidden",
        "data-merch-viewport": "",
        children: [
          n(ot, {
            modelUrl: rt,
            orbitText: e.props.presentation.orbitText,
            specs: e.props.presentation.specs,
            onFrame: Q,
            rootMargin: e.props.rootMargin ?? "200px",
            onPointerDown: () => {
              h >= 0 && P[h].blur(), (h = -1), v(-1);
            },
            onReady: (t) => {
              ($ = t.scene),
                (p = !!$),
                e.update().then((a) => {
                  a.aborted || J();
                }),
                t.canvas.dispatchEvent(new CustomEvent(it, { bubbles: !0, detail: t })),
                e.props.onReady?.(t);
            },
          }),
          n("div", {
            class: "absolute inset-0 flex items-center justify-center p-64",
            hidden: p || e.props.decorative,
            children: n(et, {
              data: e.props.image,
              alt: e.props.image?.altText ?? e.props.title,
              loading: "eager",
              fetchpriority: "high",
              className: "max-h-full w-auto max-w-full object-contain",
              sizes: "(min-width: 940px) 60vw, 100vw",
            }),
          }),
          ["back", "front"].map((t, a) =>
            n(
              "svg",
              {
                "aria-hidden": "true",
                class: z(
                  "pointer-events-none absolute inset-0 size-full overflow-visible",
                  t === "front" && "z-20",
                ),
                hidden: !p,
                "data-merch-annotations": "",
                children: [
                  e.props.presentation.specs.map((s, d) =>
                    n(
                      "path",
                      {
                        fill: "none",
                        "stroke-width": "1",
                        "vector-effect": "non-scaling-stroke",
                        class: z(
                          "transition-colors duration-300 motion-reduce:transition-none",
                          d === u ? "stroke-white" : t === "back" ? "stroke-white/55" : "stroke-white/15",
                        ),
                        mix: w((x) => {
                          N[t][d] = x;
                        }),
                      },
                      s.id,
                    ),
                  ),
                  n("path", {
                    fill: "none",
                    class: t === "back" ? "stroke-white/55" : "stroke-white/15",
                    "stroke-width": "1",
                    "vector-effect": "non-scaling-stroke",
                    pathLength: 1,
                    "data-merch-connector": "",
                    mix: w((s) => {
                      O[a] = s;
                    }),
                  }),
                  t === "front"
                    ? n(st, {
                        children: [
                          e.props.presentation.specs.map((s, d) =>
                            n(
                              "circle",
                              {
                                r: "2",
                                class: "fill-current",
                                mix: w((x) => {
                                  _[d] = x;
                                }),
                              },
                              s.id,
                            ),
                          ),
                          [0, 1].map((s) =>
                            n(
                              "circle",
                              {
                                r: s === 0 ? 4 : 2.5,
                                class: "fill-current",
                                "data-merch-connector-end": s === 1 ? "" : void 0,
                                mix: w((d) => {
                                  y[s] = d;
                                }),
                              },
                              s,
                            ),
                          ),
                        ],
                      })
                    : null,
                ],
              },
              t,
            ),
          ),
          n("div", {
            class: z("pointer-events-none absolute inset-0", !e.props.decorative && "*:pointer-events-auto"),
            hidden: !p,
            inert: e.props.decorative,
            "data-merch-annotations": "",
            children: e.props.presentation.specs.map((t, a) =>
              n(
                "div",
                {
                  mix: [
                    A("pointerenter", (s) => {
                      s.pointerType !== "touch" && v(a);
                    }),
                    A("pointerleave", q),
                  ],
                  children: [
                    n(o, {
                      type: e.props.decorative ? void 0 : "button",
                      "aria-hidden": e.props.decorative ? "true" : void 0,
                      "aria-label": t.value ? `${t.label}: ${t.value} ${t.unit ?? ""}`.trim() : t.label,
                      class:
                        "group absolute top-0 left-0 z-30 grid size-44 place-items-center rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-2 global-lg:size-24",
                      style: { transform: "translate(-999px, -999px)" },
                      mix: [
                        w((s) => {
                          P[a] = s;
                        }),
                        A("focus", (s) => {
                          (h = a), s.currentTarget.matches(":focus-visible") && v(a);
                        }),
                        A("blur", () => {
                          (h = -1), q();
                        }),
                        A("click", () => v(a)),
                      ],
                      children: n("span", {
                        class: z(
                          "size-8 rounded-full border border-white/70 transition-colors duration-200 motion-reduce:transition-none group-hover:bg-white group-focus-visible:bg-white",
                          a === u ? "bg-white" : "bg-brand",
                        ),
                      }),
                    }),
                    n("div", {
                      "aria-hidden": "true",
                      class:
                        "absolute top-0 left-0 z-30 grid w-max max-w-170 gap-2 font-mono text-mono-sm text-white",
                      style: { transform: "translate(-999px, -999px)" },
                      mix: w((s) => {
                        D[a] = s;
                      }),
                      children: [
                        n("p", {
                          class: "text-white/70",
                          children: [String(a + 1).padStart(2, "0"), " · ", t.label],
                        }),
                        t.value
                          ? n("p", {
                              class: "font-sans text-body font-medium leading-none tabular-nums",
                              children: [
                                t.value,
                                t.unit
                                  ? n("span", {
                                      class: "ml-4 font-mono text-mono-sm font-light text-white/80",
                                      children: t.unit,
                                    })
                                  : null,
                              ],
                            })
                          : null,
                      ],
                    }),
                  ],
                },
                t.id,
              ),
            ),
          }),
        ],
      }),
    });
  };
}
const yt = Object.freeze(
  Object.defineProperty({ __proto__: null, MerchScene: nt, connectorPath: Y }, Symbol.toStringTag, {
    value: "Module",
  }),
);
export { nt as M, bt as S, it as a, gt as b, Y as c, yt as d, rt as s };
