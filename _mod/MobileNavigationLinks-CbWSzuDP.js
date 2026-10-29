import { n as R } from "./frameLoop-CeLX9Qef.js";
import { W as p } from "./wire-BRlyKbjJ.js";
import { r as N } from "./ref-mixin-D6m2Cu20.js";
import { j as t } from "./jsx-CLqwgotn.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const P = p.alpha * 0.8,
  L = 6;
function _(u, h, w) {
  const o = Math.hypot(u, h),
    d = 2 * w + Math.hypot(u - 2 * w, h);
  return (2 * o + d) / 3;
}
function I(u) {
  let h;
  const w = (o, d) => {
    const r = o.closest("[data-mobile-menu-scrollport]"),
      b = o.querySelector("[data-mobile-navigation-origin]"),
      n = b.firstElementChild;
    let i = [],
      a = 0,
      m = 0,
      y = 0,
      S = 0,
      s = 0,
      T = NaN,
      A,
      f;
    const E = (e) => {
        if (e.pulsesD !== e.d) {
          e.pulsesD = e.d;
          for (const v of e.pulses) v.setAttribute("d", e.d);
          e.group.style.setProperty("--wire-pulse-step", String(e.step));
        }
      },
      q = () => {
        if (!a || !s) return;
        const e = r
          ? Math.min(m + (i.length - 0.5) * a, Math.max(m + a / 2, r.scrollTop + s / 2 - y))
          : S / 2;
        if (e === T) return;
        T = e;
        const v = Math.min(1, Math.max(0, u.props.curvature ?? 0.5));
        for (const [$, g] of i.entries()) {
          const { line: c, gradient: M, width: l } = g,
            k = m + ($ + 0.5) * a - e,
            C = v * l;
          (g.d = `M0 0C${C} 0 ${l - C} ${k} ${l} ${k}`),
            c.setAttribute("d", g.d),
            M.setAttribute("x2", String(l)),
            M.setAttribute("y2", String(k)),
            (g.step = Math.min(100 / L, 400 / Math.max(_(l, k, C), 1))),
            f || E(g);
        }
      },
      H = () => {
        f = void 0;
        for (const e of i) E(e);
        n.removeAttribute("data-scrolling");
      },
      B = () => {
        f || n.setAttribute("data-scrolling", ""),
          clearTimeout(f),
          (f = setTimeout(H, 150)),
          !A &&
            (A = R(() => {
              (A = void 0), q();
            }));
      };
    h = () => {
      if (((s = r?.clientHeight ?? o.clientHeight), !s)) return;
      const e = o.getBoundingClientRect(),
        v = o.querySelector("ol").getBoundingClientRect(),
        $ = Array.from(o.querySelectorAll("[data-mobile-navigation-anchor]")),
        g = o.querySelectorAll("[data-mobile-navigation-branch]");
      for (const c of i) $.includes(c.anchor) || x.unobserve(c.anchor);
      (i = $.map((c, M) => {
        const l = g[M];
        return {
          anchor: c,
          line: l.querySelector("[data-mobile-navigation-line]"),
          pulses: Array.from(l.querySelectorAll(".wire-pulse")),
          group: l,
          gradient: l.querySelector("linearGradient"),
          width: c.getBoundingClientRect().width,
          d: "",
          step: 0,
          pulsesD: "",
        };
      })),
        (S = e.height),
        (a = v.height / i.length),
        (m = v.top - e.top),
        (y = r ? e.top - r.getBoundingClientRect().top - r.clientTop + r.scrollTop : 0),
        (b.style.top = `${r ? m + a / 2 : S / 2}px`),
        (b.style.height = `${r ? (i.length - 1) * a : 0}px`),
        (n.style.top = `${r ? s / 2 : 0}px`);
      for (const { anchor: c } of i) x.observe(c);
      (T = NaN), q();
    };
    const x = new ResizeObserver(h);
    x.observe(o),
      r && (x.observe(r), r.addEventListener("scroll", B, { passive: !0, signal: d })),
      d.addEventListener(
        "abort",
        () => {
          x.disconnect(), A?.(), clearTimeout(f), (h = void 0);
        },
        { once: !0 },
      );
  };
  return () => {
    u.queueTask((n) => {
      n.aborted || h?.();
    });
    const { sections: o, homeHref: d = "", id: r = "mobile-navigation", animated: b = !0 } = u.props;
    return o.length
      ? t("nav", {
          "aria-label": u.props.label ?? "Sections",
          class:
            "mobile-navigation-links relative bg-nav-menu px-16 py-32 text-white contain-content @2xl:px-32",
          mix: N(w),
          children: [
            t("ol", {
              class: "grid auto-rows-fr",
              children: o.map((n) =>
                t(
                  "li",
                  {
                    class: "grid",
                    children: t("a", {
                      class: "focus-ring group flex min-h-64 gap-12",
                      href: `${d}#${n.handle}`,
                      "data-component-name": "menu-item-link",
                      "data-component-extra-section-handle": n.handle,
                      "aria-current": u.props.activeHref === `${d}#${n.handle}` ? "location" : void 0,
                      "data-rmx-document": d ? void 0 : "",
                      children: [
                        t("span", {
                          "aria-hidden": "true",
                          "data-mobile-navigation-anchor": !0,
                          class: "min-w-0 flex-1",
                        }),
                        t("span", {
                          "data-mobile-navigation-title": !0,
                          class:
                            "relative z-10 max-w-3/4 self-center bg-nav-menu py-12 text-right text-h2 wrap-anywhere",
                          children: t("span", {
                            class: "underline-metrics group-aria-[current=location]:underline",
                            children: n.title,
                          }),
                        }),
                      ],
                    }),
                  },
                  n.handle,
                ),
              ),
            }),
            t("div", {
              "aria-hidden": "true",
              "data-mobile-navigation-origin": !0,
              class: "pointer-events-none absolute inset-x-16 top-1/2 h-0 @2xl:inset-x-32",
              children: t("div", {
                class: "sticky top-0 h-0 will-change-transform",
                children: t("svg", {
                  class: "absolute left-0 top-0 h-px w-full overflow-visible",
                  children: [
                    o.map((n, i) => {
                      const a = `${r}-${n.handle}-gradient`;
                      return t(
                        "g",
                        {
                          "data-mobile-navigation-branch": !0,
                          children: [
                            t("defs", {
                              children: t("linearGradient", {
                                id: a,
                                gradientUnits: "userSpaceOnUse",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "0",
                                children: [
                                  t("stop", {
                                    offset: "0",
                                    "stop-color": "currentColor",
                                    "stop-opacity": p.fade.start * p.alpha,
                                  }),
                                  t("stop", {
                                    offset: "0.5",
                                    "stop-color": "currentColor",
                                    "stop-opacity": p.fade.mid * p.alpha,
                                  }),
                                  t("stop", {
                                    offset: "1",
                                    "stop-color": "currentColor",
                                    "stop-opacity": p.fade.end * p.alpha,
                                  }),
                                ],
                              }),
                            }),
                            t("path", {
                              "data-mobile-navigation-line": !0,
                              "data-mobile-navigation-tether": !0,
                              pathLength: "1",
                              d: "M0 0",
                              fill: "none",
                              stroke: `url(#${a})`,
                              "stroke-width": p.width,
                              "vector-effect": "non-scaling-stroke",
                            }),
                            b
                              ? t("g", {
                                  "data-mobile-navigation-flows": !0,
                                  class: "mobile-navigation-pulses",
                                  children: Array.from({ length: p.pulses }, (m, y) =>
                                    t(
                                      "g",
                                      {
                                        class: "wire-pulse-group",
                                        style: { "--wire-pulse-index": String(y + ((i * 0.618) % 1)) },
                                        children: Array.from({ length: L }, (S, s) =>
                                          t(
                                            "path",
                                            {
                                              d: "M0 0",
                                              pathLength: "100",
                                              fill: "none",
                                              "vector-effect": "non-scaling-stroke",
                                              class: "wire-pulse",
                                              stroke: "currentColor",
                                              "stroke-opacity": (1 - s / L) * P,
                                              style: { "--wire-pulse-segment": String(s) },
                                            },
                                            s,
                                          ),
                                        ),
                                      },
                                      y,
                                    ),
                                  ),
                                })
                              : null,
                          ],
                        },
                        n.handle,
                      );
                    }),
                    t("circle", {
                      "data-mobile-navigation-dot": !0,
                      cx: "0",
                      cy: "0",
                      class: "mobile-navigation-dot fill-nav-menu stroke-white",
                    }),
                  ],
                }),
              }),
            }),
          ],
        })
      : null;
  };
}
export { I as MobileNavigationLinks };
