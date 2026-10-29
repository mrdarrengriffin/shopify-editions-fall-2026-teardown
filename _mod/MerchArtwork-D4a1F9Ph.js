const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/sockScene.client-cCVHhDpv.js",
      "assets/clamp-co6UzHBn.js",
      "assets/frameLoop-CeLX9Qef.js",
      "assets/gltf-CF5uy7xI.js",
      "assets/preload-helper-CZudbPKK.js",
      "assets/surface-Be90gCgo.js",
      "assets/easing-BhDfN7yX.js",
      "assets/MerchScene-pXeKqqrb.js",
      "assets/clsx-B-dksMZM.js",
      "assets/Image-D_dPd3ZK.js",
      "assets/index-CRnHN5xY.js",
      "assets/jsx-CLqwgotn.js",
      "assets/ref-mixin-D6m2Cu20.js",
      "assets/mixin-CMuDUxNx.js",
      "assets/typed-event-target-DhbNxY-V.js",
      "assets/component-BWKvSpCv.js",
      "assets/on-mixin-Ci1jclOX.js",
      "assets/shader-7sCtY4bJ.js",
      "assets/disabledByUrl-iUMtXRf9.js",
      "assets/sectionJump-VOWWJQmH.js",
    ]),
) => i.map((i) => d[i]);
import { _ as X } from "./preload-helper-CZudbPKK.js";
import { w as G } from "./disabledByUrl-iUMtXRf9.js";
import { s as O } from "./sectionJump-VOWWJQmH.js";
import { W as J } from "./surface-Be90gCgo.js";
import { l as V, s as Y, r as Z } from "./easing-BhDfN7yX.js";
import { r as R } from "./ref-mixin-D6m2Cu20.js";
import { o as q } from "./on-mixin-Ci1jclOX.js";
import { j as A } from "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
import "./clamp-co6UzHBn.js";
import "./mixin-CMuDUxNx.js";
const K = (r) => {
    const f = r.trim().split(/\s+/);
    return f.length > 3 ? [f[0], f[1], f.slice(2).join(" ")] : f;
  },
  N = 0.16,
  T = ({ x: r, y: f }) => `${r.toFixed(1)} ${f.toFixed(1)}`;
function Q(r, f, y) {
  const { length: d } = r,
    M = ((((f / (2 * Math.PI)) % 1) + 1) % 1) * d,
    k = Math.floor(M),
    u = M - k,
    l = u * u,
    S = l * u,
    h = r[(k - 1 + d) % d],
    E = r[k],
    $ = r[(k + 1) % d],
    L = r[(k + 2) % d],
    s = -0.5 * S + l - 0.5 * u,
    o = 1.5 * S - 2.5 * l + 1,
    e = -1.5 * S + 2 * l + 0.5 * u,
    i = 0.5 * S - 0.5 * l,
    t = -1.5 * l + 2 * u - 0.5,
    a = 4.5 * l - 5 * u,
    c = -4.5 * l + 4 * u + 0.5,
    n = 1.5 * l - u;
  return (
    (y.x = h.x * s + E.x * o + $.x * e + L.x * i),
    (y.y = h.y * s + E.y * o + $.y * e + L.y * i),
    (y.depth = E.depth + ($.depth - E.depth) * u),
    (y.dx = ((h.x * t + E.x * a + $.x * c + L.x * n) * d) / (2 * Math.PI)),
    (y.dy = ((h.y * t + E.y * a + $.y * c + L.y * n) * d) / (2 * Math.PI)),
    y
  );
}
function ft(r) {
  let f = !1,
    y = !1,
    d,
    M = 0,
    k = [],
    u = 1,
    l = [];
  const S = { back: [], front: [] },
    h = { back: [], front: [] },
    E = { x: 0, y: 0, depth: 0, dx: 0, dy: 0 },
    $ = (s) => {
      if (f) {
        if (M !== s.size) {
          k = h.front.map((e) => e.map((i) => i.getComputedTextLength() + 1));
          const o = h.front[0]?.[0];
          o && (u = parseFloat(getComputedStyle(o).fontSize)), (M = s.size);
        }
        s.rings.forEach((o, e) => {
          const i = { back: "", front: "" };
          o.forEach((t, a) => {
            const c = o[(a + 1) % o.length],
              n = t.depth > 0 ? "front" : "back",
              p = c.depth > 0 ? "front" : "back";
            if ((a === 0 && (i[n] += `M${T(t)}`), n === p)) {
              i[n] += `L${T(c)}`;
              return;
            }
            const g = t.depth / (t.depth - c.depth),
              w = T({ x: t.x + (c.x - t.x) * g, y: t.y + (c.y - t.y) * g });
            (i[n] += `L${w}`), (i[p] += `M${w}L${T(c)}`);
          }),
            S.back[e]?.setAttribute("d", i.back),
            S.front[e]?.setAttribute("d", i.front);
        }),
          h.front.forEach((o, e) => {
            const i = s.rings.length - 1 - e,
              t = s.rings[i],
              a = s.radii[i],
              c = k[e];
            if (!t || !c?.length) return;
            let n = 0,
              p = 0;
            for (const m of t) (n += m.x / t.length), (p += m.y / t.length);
            let g = 0,
              w = 0;
            t.forEach((m, v) => {
              const x = t[(v + 1) % t.length];
              (g += (m.x - n) * (x.y - p) - (x.x - n) * (m.y - p)), m.y < t[w].y && (w = v);
            }),
              (l[e] ??= t[(w + 1) % t.length].x - t[(w - 1 + t.length) % t.length].x >= 0 ? 1 : -1);
            const P = l[e],
              C = c.reduce((m, v) => m + v, 0),
              b = (a * N) / u,
              H = (e / 3) * Math.PI * 2 - P * 0.07 * s.time;
            let j = -C / 2;
            o.forEach((m, v) => {
              const x = Q(t, H + (P * (j + c[v] / 2) * b) / a, E);
              j += c[v];
              let D = (x.dx / a) * P,
                F = (x.dy / a) * P,
                _ = (x.x - n) / a,
                z = (x.y - p) / a;
              -g * P > 0 && ((_ = -_), (z = -z));
              const U = Math.hypot(D, F),
                I = Math.hypot(_, z);
              U < 0.3 && ((D *= 0.3 / (U || 1)), (F *= 0.3 / (U || 1))),
                I < 0.3 && ((_ *= 0.3 / (I || 1)), (z *= 0.3 / (I || 1)));
              const W = `matrix(${D * b} ${F * b} ${-_ * b} ${-z * b} ${x.x} ${x.y})`,
                B = Y(Z(x.depth, -0.15, 0.15));
              m.setAttribute("transform", W),
                m.setAttribute("opacity", String(V(0.18, 1, B))),
                h.back[e][v].setAttribute("transform", W),
                h.back[e][v].setAttribute("opacity", String(1 - B));
            });
          }),
          r.props.onFrame?.(s);
      }
    },
    L = R((s, o) => {
      const e = (n) => {
        (d = void 0),
          (f = y = !1),
          !o.aborted &&
            (n && !(n instanceof J) && console.error("Fall 2026 merch artwork failed to load", n),
            r.update(),
            r.props.onReady({ canvas: s }));
      };
      let i = !1,
        t = !1;
      const a = () => {
          if (!(t || !i || O.holds(s))) {
            if (((t = !0), c.disconnect(), O.removeEventListener("change", a), !navigator.gpu || G()))
              return e();
            (async () => {
              try {
                const { mountSockScene: n } = await X(
                  async () => {
                    const { mountSockScene: b } = await import("./sockScene.client-cCVHhDpv.js");
                    return { mountSockScene: b };
                  },
                  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
                );
                if (
                  o.aborted ||
                  ((d = await n(s, o, r.props.modelUrl, r.props.specs ?? [], $, e)), o.aborted || !d)
                )
                  return;
                const p = d,
                  g = () => o.aborted || d !== p;
                p.setHeld(!0);
                const w = (b) => {
                  b.orbitDirections && (l = [...b.orbitDirections]), p.setPose(b);
                };
                if (((f = !0), await r.update(), g())) return;
                const P = h.front[0]?.[0];
                if (
                  (P &&
                    (await document.fonts.load(getComputedStyle(P).font, r.props.orbitText).catch(() => [])),
                  g() || ((M = 0), await p.redraw(), g()))
                )
                  return;
                const C = { ...p, setPose: w, getPose: () => ({ ...p.getPose(), orbitDirections: [...l] }) };
                if (((y = !0), await r.update(), g())) return;
                p.setHeld(!1), r.props.onReady({ canvas: s, scene: C });
              } catch (n) {
                o.aborted || e(n);
              }
            })();
          }
        },
        c = new IntersectionObserver(
          ([n]) => {
            (i = n.isIntersecting), a();
          },
          { rootMargin: r.props.rootMargin },
        );
      c.observe(s),
        O.addEventListener("change", a, { signal: o }),
        o.addEventListener("abort", () => c.disconnect(), { once: !0 });
    });
  return () =>
    A("span", {
      "data-merch-artwork": "",
      class: "absolute inset-0 block transition-opacity duration-500 motion-reduce:transition-none",
      style: { opacity: y ? 1 : 0 },
      children: [
        ["back", "front"].map((s) =>
          A(
            "svg",
            {
              "aria-hidden": "true",
              class:
                s === "front"
                  ? "pointer-events-none absolute inset-0 z-20 size-full overflow-visible"
                  : "pointer-events-none absolute inset-0 size-full overflow-visible",
              children: [
                Array.from({ length: 5 }, (o, e) =>
                  A(
                    "path",
                    {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "0.7",
                      "vector-effect": "non-scaling-stroke",
                      opacity: "0.55",
                      mix: R((i) => {
                        S[s][e] = i;
                      }),
                    },
                    e,
                  ),
                ),
                K(r.props.orbitText).map((o, e) =>
                  [...o.toUpperCase()].map((i, t) =>
                    A(
                      "text",
                      {
                        class: "fill-current font-sans text-merch-orbit font-medium",
                        "text-anchor": "middle",
                        "dominant-baseline": "middle",
                        transform: "translate(-999 -999)",
                        mix: R((a) => {
                          (h[s][e] ??= [])[t] = a;
                        }),
                        children: i,
                      },
                      e + "-" + t,
                    ),
                  ),
                ),
              ],
            },
            s,
          ),
        ),
        A("canvas", {
          "aria-hidden": "true",
          class: "absolute inset-0 z-10 size-full touch-pan-y cursor-grab active:cursor-grabbing",
          mix: [L, q("pointerdown", () => r.props.onPointerDown?.())],
        }),
      ],
    });
}
export { ft as MerchArtwork };
