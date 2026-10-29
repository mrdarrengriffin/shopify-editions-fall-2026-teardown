import { t as de } from "./index-CRnHN5xY.js";
import { n as me, o as he } from "./frameLoop-CeLX9Qef.js";
import { W as g } from "./wire-BRlyKbjJ.js";
import { c as be } from "./client-entries-B1h-jQ5r.js";
import { r as ve } from "./ref-mixin-D6m2Cu20.js";
import { j as o } from "./jsx-CLqwgotn.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const ge = { originDrop: 24 };
function ye(r, f) {
  const n = (i) => i.toFixed(2);
  return `M${n(r.x)} ${n(r.y)}L${n(f.x)} ${n(f.y)}`;
}
function we(r, f, n) {
  const i = { x: f.right - r.left, y: f.top + ge.originDrop - r.top },
    e = { x: n.left + n.width / 2 - r.left, y: n.top + n.height / 2 - r.top };
  return { start: i, end: { x: Math.max(i.x, e.x), y: e.y } };
}
function Fe(r) {
  return () => o("div", { class: de("content-rail min-w-0", r.props.className), children: r.props.children });
}
function Te(r) {
  return () => {
    const { label: f } = r.props,
      n = r.id;
    return o("div", {
      "aria-label": f,
      class: de(
        "content-rail-item relative min-w-0 focus-visible:outline focus-visible:outline-current",
        r.props.className,
      ),
      "data-rail-for": r.props.railFor,
      role: f ? "group" : void 0,
      children: [
        r.props.railFor
          ? o("svg", {
              "aria-hidden": "true",
              class: "content-rail-wire",
              "data-rail-wire": "",
              fill: "none",
              children: [
                o("defs", {
                  children: o("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `rail-wire-${n}`,
                    children: [
                      o("stop", {
                        offset: "0",
                        "stop-color": "currentColor",
                        "stop-opacity": g.fade.start * g.alpha,
                      }),
                      o("stop", {
                        offset: "0.5",
                        "stop-color": "currentColor",
                        "stop-opacity": g.fade.mid * g.alpha,
                      }),
                      o("stop", {
                        offset: "1",
                        "stop-color": "currentColor",
                        "stop-opacity": g.fade.end * g.alpha,
                      }),
                    ],
                  }),
                }),
                o("path", { stroke: `url(#rail-wire-${n})`, "vector-effect": "non-scaling-stroke" }),
                Array.from({ length: g.pulses }, (i, e) =>
                  o(
                    "g",
                    {
                      class: "content-rail-pulse wire-pulse-group",
                      style: { "--wire-pulse-index": String(e) },
                      children: Array.from({ length: 6 }, (l, c) =>
                        o(
                          "path",
                          {
                            class: "wire-pulse",
                            pathLength: "100",
                            stroke: "currentColor",
                            "stroke-opacity": (1 - c / 6) * g.alpha * 0.8,
                            style: { "--wire-pulse-segment": String(c) },
                            "vector-effect": "non-scaling-stroke",
                          },
                          c,
                        ),
                      ),
                    },
                    e,
                  ),
                ),
                o("circle", { "data-rail-wire-origin": "", fill: "currentColor", r: "2" }),
                o("circle", { "data-rail-wire-dot": "", fill: "currentColor", r: "2" }),
              ],
            })
          : null,
        o("div", {
          class: "content-rail-surface relative min-w-0",
          children: [
            r.props.railFor
              ? o("span", {
                  "aria-hidden": "true",
                  "data-rail-marker": "",
                  class: "absolute -left-10 top-28 hidden size-4 border border-current global-lg:block",
                })
              : null,
            r.props.children,
          ],
        }),
        o(Ae, {}),
      ],
    });
  };
}
const xe = 50,
  Se = [
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    'input:not([disabled]):not([type="hidden"])',
    "select:not([disabled])",
    "summary",
    "textarea:not([disabled])",
    '[contenteditable]:not([contenteditable="false"])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(","),
  Ae = be(import.meta.url + "#ContentRailBehavior", function () {
    const f = ve((n, i) => {
      const e = n.closest(".content-rail-item"),
        l = e?.querySelector(":scope > .content-rail-surface");
      if (!e || !l) return;
      const c = e.ownerDocument;
      let Y = !1;
      const y = e.hasAttribute("aria-label") ? e : l.querySelector(':scope > [role="group"][aria-label]'),
        j = () => {
          if (!y) return;
          const t = [...y.querySelectorAll(Se)].some((d) => !d.closest("[inert]"));
          Y && !t
            ? y.tabIndex !== 0 && (y.tabIndex = 0)
            : y.hasAttribute("tabindex") && y.removeAttribute("tabindex");
        },
        k = e.dataset.railFor,
        E = e.closest(".content-rail"),
        p = k ? (E?.parentElement?.querySelector(`[id="${CSS.escape(k)}"]`) ?? c.getElementById(k)) : null,
        G = e.querySelector("[data-rail-wire]"),
        T = e.querySelector("[data-rail-wire] > path"),
        ue = e.querySelectorAll(".content-rail-pulse path"),
        J = e.querySelector("[data-rail-marker]"),
        I = e.querySelector("[data-rail-wire] linearGradient"),
        K = e.querySelector("[data-rail-wire-dot]"),
        O = e.querySelector("[data-rail-wire-origin]"),
        fe = !k || E?.querySelector(`[data-rail-for="${CSS.escape(k)}"]`) === e,
        Q = () => new DOMMatrixReadOnly(getComputedStyle(l).transform).m41;
      let a = 0,
        v = 0;
      const pe = () =>
          p && T && J?.offsetWidth
            ? {
                item: e.getBoundingClientRect(),
                card: p.getBoundingClientRect(),
                mark: J.getBoundingClientRect(),
                shift: Q(),
                offset: a,
              }
            : void 0,
        X = c.createElementNS("http://www.w3.org/2000/svg", "path");
      let Z = "",
        ee = "";
      const P = (t, d = 0, m = 0, U = !0) => {
          if (!T) return;
          const { start: h, end: b } = we(
              t.item,
              t.card,
              new DOMRect(t.mark.x + d, t.mark.y + m, t.mark.width, t.mark.height),
            ),
            u = ye(h, b);
          if (U && u !== ee) {
            (ee = u), X.setAttribute("d", u);
            const L = X.getTotalLength();
            G?.style.setProperty("--wire-pulse-step", String(Math.min(100 / 6, 400 / Math.max(L, 1))));
          }
          if (u !== Z) {
            (Z = u), T.setAttribute("d", u);
            for (const L of ue) L.setAttribute("d", u);
            I?.setAttribute("x1", String(h.x)),
              I?.setAttribute("y1", String(h.y)),
              I?.setAttribute("x2", String(b.x)),
              I?.setAttribute("y2", String(b.y)),
              K?.setAttribute("cx", String(b.x)),
              K?.setAttribute("cy", String(b.y)),
              G?.setAttribute("data-drawn", ""),
              O?.setAttribute("cx", String(h.x)),
              O?.setAttribute("cy", String(h.y)),
              O?.setAttribute("visibility", fe ? "visible" : "hidden");
          }
        },
        $ = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
      let x = !1,
        w = $.matches,
        R = window.scrollY,
        te = innerHeight,
        B = 0,
        re = 0,
        s,
        S = 0,
        q;
      const C = () => {
          (R = window.scrollY),
            (te = innerHeight),
            (s = pe()),
            (B = s?.shift ?? 0),
            (re = (s?.card.top ?? e.getBoundingClientRect().top) + R),
            s && P(s);
        },
        z = () => {
          q?.(), (q = void 0);
        },
        ie = () => (w ? (te / 2 - (re - R)) * 0.14 : 0),
        A = (t = !1, d = !0) => {
          !x ||
            c.hidden ||
            q ||
            ((d || !s) && C(),
            t &&
              ((a = ie()),
              (v = 0),
              s && P(s, 0, a - s.offset),
              (l.style.translate = a ? `0 ${a.toFixed(2)}px` : "")),
            (q = he(
              (m, U) => {
                const h = ie(),
                  b = Math.min(U / 1e3, 0.05);
                w ? ((v += (h - a) * 70 * b), (v *= Math.exp(-9 * b)), (a += v * b)) : (a = v = 0);
                const u = Math.abs(h - a) < 0.05 && Math.abs(v) < 0.05;
                u && ((a = h), (v = 0)), S && ((B = Q()), m >= S && (S = 0));
                const L = s ? B - s.shift : 0;
                s && P(s, L, a - s.offset, u || S > 0),
                  (l.style.translate = a ? `0 ${a.toFixed(2)}px` : ""),
                  u && m >= S && z();
              },
              { signal: i },
            )));
        },
        F = () => {
          (S = performance.now() + 320), C(), A();
        },
        oe = () => {
          z(), (a = v = 0), l.style.removeProperty("translate"), x && C();
        };
      $.addEventListener(
        "change",
        () => {
          (w = $.matches), oe(), w && A(!0);
        },
        { signal: i },
      ),
        window.addEventListener(
          "scroll",
          () => {
            !w || !x || ((R = window.scrollY), A(!1, !1));
          },
          { passive: !0, signal: i },
        ),
        c.addEventListener(
          "visibilitychange",
          () => {
            c.hidden ? z() : A();
          },
          { signal: i },
        );
      const W = () => {
        (Y = getComputedStyle(e).getPropertyValue("--rail-parked").trim() === "1"), j(), C(), w && A();
      };
      window.addEventListener("resize", W, { passive: !0, signal: i });
      const _ = new ResizeObserver(W);
      if ((_.observe(e.closest(".content-rail") ?? e), p && _.observe(p), p)) {
        for (const t of ["focusin", "focusout"]) e.addEventListener(t, F, { signal: i });
        l.addEventListener(
          "transitionrun",
          (t) => {
            t.target === l && F();
          },
          { signal: i },
        );
      }
      let D = !1,
        ne = !1;
      const H = new IntersectionObserver(
        (t) => {
          for (const m of t)
            m.target === e && ((D = m.isIntersecting), e.toggleAttribute("data-rail-visible", D)),
              m.target === p && (ne = m.isIntersecting);
          const d = x;
          (x = D || ne), x && w ? A(!d) : oe();
        },
        { rootMargin: "60px 0px" },
      );
      H.observe(e), p && H.observe(p), C();
      let N;
      const ae = new MutationObserver(() => {
        N ||
          (N = me(
            () => {
              (N = void 0), j();
            },
            { signal: i },
          ));
      });
      ae.observe(l, {
        attributeFilter: ["contenteditable", "disabled", "href", "tabindex"],
        childList: !0,
        subtree: !0,
      });
      const se = () => {
          e.toggleAttribute("data-takeover", l.querySelector("[data-takeover-launcher]") !== null),
            E?.toggleAttribute("data-takeover", E.querySelector("[data-takeover-launcher]") !== null);
        },
        le = new MutationObserver(se);
      le.observe(l, { attributeFilter: ["data-takeover-launcher"], subtree: !0 }),
        se(),
        c.addEventListener(
          "keydown",
          (t) => {
            t.key !== "Escape" ||
              e.hasAttribute("data-dismissed") ||
              !(e.dataset.hoverIntent === "true" || e.contains(c.activeElement)) ||
              (t.stopPropagation(), e.setAttribute("data-dismissed", ""), p && F());
          },
          { signal: i },
        );
      const ce = () => e.removeAttribute("data-dismissed");
      e.addEventListener("focusin", ce, { signal: i });
      let M;
      const V = (t) => {
        clearTimeout(M), (M = void 0);
        const d = String(t);
        e.dataset.hoverIntent !== d && ((e.dataset.hoverIntent = d), p && F());
      };
      e.addEventListener(
        "pointerenter",
        (t) => {
          if ((ce(), t.pointerType !== "mouse")) {
            V(!0);
            return;
          }
          clearTimeout(M), (M = setTimeout(() => V(!0), xe));
        },
        { signal: i },
      ),
        e.addEventListener("pointerleave", () => V(!1), { signal: i }),
        (e.dataset.hoverIntent = String(e.matches(":hover"))),
        i.addEventListener(
          "abort",
          () => {
            _.disconnect(),
              H.disconnect(),
              ae.disconnect(),
              le.disconnect(),
              e.removeAttribute("data-takeover"),
              E?.removeAttribute("data-takeover"),
              l.style.removeProperty("translate"),
              clearTimeout(M),
              y?.removeAttribute("tabindex"),
              e.removeAttribute("data-dismissed"),
              e.removeAttribute("data-hover-intent");
          },
          { once: !0 },
        ),
        W();
    });
    return () => o("span", { hidden: !0, mix: f });
  });
export { Fe as ContentRail, Ae as ContentRailBehavior, Te as ContentRailItem };
