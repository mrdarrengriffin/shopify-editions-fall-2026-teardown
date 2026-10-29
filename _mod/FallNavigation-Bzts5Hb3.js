import { t as W } from "./index-CRnHN5xY.js";
import { c as S } from "./clsx-B-dksMZM.js";
import { a as de, g as je } from "./locale-DXEWuBc6.js";
import { I as H, a as j, g as J, b as le, c as ze } from "./Icon-BOquWsux.js";
import { T as Oe } from "./typed-event-target-DhbNxY-V.js";
import { o as w } from "./on-mixin-Ci1jclOX.js";
import { j as n } from "./jsx-CLqwgotn.js";
import { r as re } from "./ref-mixin-D6m2Cu20.js";
import { F as Ne } from "./component-BWKvSpCv.js";
import { C as Se, M as Fe } from "./constants-Dvx39Bnh.js";
import { e as Qe } from "./externalLink-DAUa5sJm.js";
import { p as Ve } from "./pageCover-D_pd6g0y.js";
import { m as Ge } from "./rootMirror-C_uDdAx6.js";
import { a as Ze } from "./get-active-section-DTAm5rbu.js";
import { o as Ye } from "./frameLoop-CeLX9Qef.js";
import { MobileNavigationLinks as Je } from "./MobileNavigationLinks-CbWSzuDP.js";
import { c as Xe } from "./client-entries-B1h-jQ5r.js";
import "./mixin-CMuDUxNx.js";
import "./htmlInCanvasTilt-BU1xBiHq.js";
import "./wire-BRlyKbjJ.js";
const L = "https://www.shopify.com",
  ke = 4,
  et = "https://admin.shopify.com/signup",
  tt = "https://all-editions.shopify.com",
  me = {
    spring2026: { isLive: !0, baseUrl: L, path: "editions/spring2026" },
    winter2026: { isLive: !0, forceUSSearch: !0, baseUrl: L, path: "editions/winter2026" },
    summer2025: { isLive: !0, baseUrl: L, path: "editions/summer2025" },
    winter2025: { isLive: !0, baseUrl: L, path: "editions/winter2025" },
    summer2024: { isLive: !0, baseUrl: L, path: "editions/summer2024" },
    winter2024: { isLive: !0, baseUrl: L, path: "editions/winter2024" },
    summer2023: { isLive: !0, baseUrl: L, path: "editions/summer2023" },
  };
Object.entries(me).find((e) => e[1]?.isLive)?.[0];
const st = {
    winter2023: { isLive: !0, baseUrl: L, path: "editions/winter2023", isBrochure: !0 },
    summer2022: { isLive: !0, baseUrl: L, path: "editions/summer2022", isBrochure: !0 },
  },
  ce = { ...me, ...st, allEditions: { isLive: !0, baseUrl: L, path: "editions", isBrochure: !1 } },
  ot = Object.keys(me);
function De(e) {
  return (
    e.context.set({
      get value() {
        return e.props.value;
      },
    }),
    () => e.props.children
  );
}
function A(e) {
  return e.context.get(De)?.value;
}
var M = ((e) => (
  (e.allEditions = "allEditions"),
  (e.spring2026 = "spring2026"),
  (e.winter2026 = "winter2026"),
  (e.summer2025 = "summer2025"),
  (e.winter2025 = "winter2025"),
  (e.summer2024 = "summer2024"),
  (e.winter2024 = "winter2024"),
  (e.summer2023 = "summer2023"),
  (e.winter2023 = "winter2023"),
  (e.summer2022 = "summer2022"),
  e
))(M || {});
const rt = new Set(Object.values(M));
function Re(e) {
  return rt.has(String(e));
}
function nt(e) {
  return e in ce;
}
function it(e) {
  if (nt(e)) return ce[e];
}
const at = {
  isMobile: null,
  isLandscapeMobile: null,
  isMobileNav: null,
  isLargeDesktop: null,
  isTouchDevice: !1,
  isCoarsePointer: null,
  isSnap: !1,
  preferReducedMotion: !1,
  isSafari: null,
  isDeviceLowPerformance: !0,
  supportScrollDrivenAnimations: !1,
  supportsWebm: null,
};
class lt extends Oe {
  #t = { ...at };
  #e = null;
  getSnapshot() {
    return this.#t;
  }
  set(t) {
    Object.entries(t).some(([o, r]) => this.#t[o] !== r) &&
      ((this.#t = { ...this.#t, ...t }), this.dispatchEvent(new Event("change")));
  }
  setActiveSection(t) {
    this.#e !== t && ((this.#e = t), this.#n());
  }
  updateTouchDevice(t) {
    this.set({ isTouchDevice: t }), this.#n();
  }
  #n() {
    const s = !!this.#t.isTouchDevice && (this.#e === null || this.#e === "featured");
    this.set({ isSnap: s });
  }
}
new lt();
function ye(e, t, s) {
  const o = window.matchMedia(e),
    r = () => t(o.matches);
  if ((r(), typeof o.addEventListener == "function")) {
    o.addEventListener("change", r, { signal: s });
    return;
  }
  o.addListener(r), s.addEventListener("abort", () => o.removeListener(r), { once: !0 });
}
function Pe(e) {
  return () => {
    const t = A(e),
      { isMenuOpen: s, isOpen: o } = e.props;
    return n("button", {
      type: "button",
      class: S(
        "fixed size-screen inset-0 bg-g7 global-lg:hidden transition-opacity duration-300 z-10 focus-ring",
        o && s ? "block opacity-50 pointer-events-auto" : "hidden opacity-0 pointer-events-none",
      ),
      mix: w("click", () => e.props.onClick()),
      "aria-hidden": !o,
      tabIndex: o && s ? 0 : -1,
      children: n("span", {
        class: "sr-only",
        children: e.props.label || t?.dismissOverlay?.button || "Dismiss",
      }),
    });
  };
}
function U(e) {
  return () => {
    const { as: t, children: s, class: o, className: r, ...a } = e.props,
      p = o ?? r;
    if (t === "a") {
      const { href: i, target: u = "_blank", rel: f = "noopener noreferrer", ...h } = a;
      return n("a", { ...h, href: i ?? "", class: p, target: u, rel: f, children: s });
    }
    const { type: l = "button", ...c } = a;
    return n("button", { ...c, class: p, type: l, children: s });
  };
}
function $e(e) {
  return e === M.allEditions;
}
function ct({ href: e, vendor: t, currentEdition: s, locale: o = "" }) {
  if (!e) return "#";
  if (e.startsWith("http")) return e;
  if ($e(s) && e.startsWith("#")) {
    const r = t ? me[t] : void 0,
      a = r?.baseUrl || L,
      p = r?.path ?? (t ? `editions/${t}` : "");
    return de({ baseUrl: a, locale: o, path: `${p}${e}` });
  }
  return e;
}
function pt({ href: e, vendor: t, isCurrent: s, currentEdition: o }) {
  return e?.startsWith("http") ? !0 : $e(o) || o !== t || !s;
}
function ut(e) {
  let t = null;
  return () => {
    const { controller: s, index: o, result: r } = e.props,
      a = s.getSnapshot().activeIndex === o;
    a && t && e.queueTask(() => t?.scrollIntoView({ block: "nearest" }));
    const p = (u, f) => {
        f.startsWith("#") && (u.href = s.getHashResultHref(f));
      },
      l = (u, f) => {
        if ((r.onSelect?.(), !r.href || (e.props.onResultClick?.(), !u || !f?.startsWith("#")))) return;
        p(u.currentTarget, f),
          u.button !== 0 ||
            u.altKey ||
            u.ctrlKey ||
            u.metaKey ||
            u.shiftKey ||
            u.currentTarget.target === "_blank" ||
            s.close({ clearQuery: !0, focus: "blur" });
      },
      c = S(
        "is-inside-search",
        "focus-ring block text-g7 no-underline hover:underline px-4 py-6 rounded-sm -mx-4",
        a && "bg-g2",
      ),
      i = re((u, f) => {
        (t = u), t.addEventListener("focusin", () => s.setActive(o), { signal: f });
      });
    if (r.href) {
      const u = ct({
          href: r.href,
          vendor: r.vendor,
          currentEdition: e.props.currentEdition,
          locale: e.props.locale,
        }),
        f = pt({
          href: r.href,
          vendor: r.vendor,
          isCurrent: r.isCurrent,
          currentEdition: e.props.currentEdition,
        });
      return n("li", {
        mix: i,
        role: "option",
        "aria-selected": a,
        id: e.props.optionId,
        children: n("a", {
          href: u,
          "data-component-name": "cta-link",
          "data-component-extra-handle": r.handle,
          target: f ? "_blank" : void 0,
          rel: f ? "noopener noreferrer" : void 0,
          "data-rmx-document": u.startsWith("#") ? "" : void 0,
          class: c,
          mix: [
            w("pointerdown", (h) => p(h.currentTarget, u)),
            w("auxclick", (h) => p(h.currentTarget, u)),
            w("click", (h) => l(h, u)),
          ],
          children: r.title,
        }),
      });
    }
    return n("li", {
      mix: i,
      role: "option",
      "aria-selected": a,
      id: e.props.optionId,
      children: n("button", {
        type: "button",
        "data-component-name": "suggestion",
        class: S(c, "w-full text-left"),
        mix: w("click", (u) => l(u)),
        children: r.title,
      }),
    });
  };
}
function pe(e) {
  return () => {
    const t = A(e),
      { controller: s, currentEdition: o, indexOffset: r = 0, locale: a, max: p, results: l } = e.props,
      c = l && p ? l.slice(0, p) : l;
    return n("section", {
      class: W("text-g7 pt-20 px-16 mb-10 last-of-type:mb-30", e.props.class, e.props.className),
      "data-component-name": e.props.dataComponentName,
      children: [
        n("p", {
          class: "text-label-3-uc pb-10 border-b border-g3 mb-10 flex items-center gap-10",
          id: e.props.id,
          children: [
            e.props.icon
              ? n("img", { "data-nosnippet": !0, src: e.props.icon, alt: "", class: "w-18" })
              : null,
            e.props.title,
          ],
        }),
        l
          ? n("ul", {
              class: "text-label-2 flex flex-col gap-6 is-inside-search",
              role: "presentation",
              children: c?.map((i, u) =>
                n(
                  ut,
                  {
                    controller: s,
                    currentEdition: o,
                    index: u + r,
                    locale: a,
                    onResultClick: e.props.onResultClick,
                    optionId: `${e.props.optionIdPrefix}-${u + r}`,
                    result: i,
                  },
                  i.id || `${i.title}-${u}`,
                ),
              ),
            })
          : null,
        e.props.error
          ? n("p", { "aria-live": "polite", class: "text-label-2 text-g7 mt-12", children: e.props.error })
          : null,
        p && e.props.onExpand && l && l.length > p
          ? n(U, {
              as: "button",
              class: "is-inside-search text-label-3 mt-12 px-12 py-10 rounded-full bg-g7 text-g1",
              mix: w("click", () => e.props.onExpand?.()),
              children: t?.searchList?.button || "Show more",
            })
          : null,
      ],
    });
  };
}
function Be(e) {
  return () =>
    n("div", {
      id: e.props.id,
      "aria-label": e.props.ariaLabel,
      class: W(
        "w-full bg-g1 overflow-auto no-scrollbar global-lg:shadow-search-results",
        "max-[939px]:max-h-[calc(100dvh-13.125rem)] pb-20",
        "search-results-container global-lg:rounded-[4px] global-lg:mt-2 global-lg:pb-0",
        e.props.class,
        e.props.className,
      ),
      "data-component-name": e.props.dataComponentName,
      role: "listbox",
      children: e.props.children,
    });
}
function dt(e) {
  return () => {
    const t = A(e)?.predictiveSearchResults,
      s = e.props.controller.getSnapshot();
    if (s.view !== "predictive") return null;
    const { queries: o, products: r } = s.predictive,
      a = o.length > 0,
      p = r.length > 0,
      l = s.loading !== "results",
      c = o.length + r.length,
      i = s.activeIndex === c;
    return n(Be, {
      ariaLabel: t?.label || "Search suggestions",
      id: `${e.props.idPrefix}-predictive-results-container`,
      dataComponentName: e.props.dataComponentName,
      class: S(a && p && "global-lg:grid global-lg:grid-cols-5 global-lg:gap-x-15"),
      children: l
        ? n(Ne, {
            children: [
              a
                ? n(pe, {
                    controller: e.props.controller,
                    currentEdition: e.props.currentEdition,
                    class: "global-lg:col-span-2",
                    id: `${e.props.idPrefix}-predictive-suggestions`,
                    title: t?.suggestions || "suggestions",
                    dataComponentName: "suggestions",
                    results: o.map((u) => ({ ...u, onSelect: () => e.props.controller.setTerm(u.title) })),
                    locale: e.props.locale,
                    onResultClick: e.props.onResultClick,
                    optionIdPrefix: `${e.props.idPrefix}-item`,
                  })
                : null,
              p
                ? n(pe, {
                    controller: e.props.controller,
                    currentEdition: e.props.currentEdition,
                    id: `${e.props.idPrefix}-predictive-results`,
                    indexOffset: o.length,
                    class: "global-lg:col-span-3",
                    title: t?.results || "Results",
                    dataComponentName: "results",
                    results: r,
                    locale: e.props.locale,
                    onResultClick: e.props.onResultClick,
                    optionIdPrefix: `${e.props.idPrefix}-item`,
                  })
                : null,
              n("button", {
                type: "submit",
                role: "option",
                "aria-selected": i,
                id: `${e.props.idPrefix}-item-${c}`,
                mix: [
                  w("focus", () => e.props.controller.setActive(c)),
                  w("click", (u) => u.stopPropagation()),
                ],
                class: S(
                  "is-inside-search",
                  "focus-ring w-full col-span-5 flex justify-between items-center text-g7 no-underline hover:underline px-16 py-10",
                  "global-lg:rounded-[4px]",
                  (a || p) && "border-t border-g3",
                  i && "bg-g2",
                ),
                children: [
                  n("div", {
                    class: "block truncate text-label-3-uc",
                    children: [t?.searchFor || "Search for", " “", s.term, "”"],
                  }),
                  n("div", { children: n(H, { name: "arrowRight16", theme: j.Black }) }),
                ],
              }),
            ],
          })
        : null,
    });
  };
}
function mt(e) {
  return () => {
    const t = e.props.controller.getSnapshot(),
      s = t.view === "closed" || t.view === "empty" || t.loading !== "idle";
    return n(U, {
      type: "reset",
      as: "button",
      class: S("text-label-4-uc h-24 px-8 bg-g3 text-g6 transition-opacity rounded-sm", s && "opacity-0"),
      disabled: s,
      mix: w("click", (o) => {
        o.preventDefault(), e.props.controller.clear();
      }),
      children: A(e)?.clearButton?.button || "Clear",
    });
  };
}
function ft(e) {
  let t = null,
    s = !1;
  return () => {
    const o = e.props.controller.getSnapshot(),
      r = o.view === "closed",
      a = o.activeSurface === e.props.surface,
      p =
        o.view === "results"
          ? `${e.props.idPrefix}-results-container`
          : `${e.props.idPrefix}-predictive-results-container`,
      l = o.activeIndex === null ? void 0 : `${e.props.idPrefix}-item-${o.activeIndex}`;
    return (
      !r && a
        ? s ||
          e.queueTask((i) => {
            i.aborted || !t?.isConnected || (t.focus(), (s = document.activeElement === t));
          })
        : (s = !1),
      n("input", {
        id: `${e.props.idPrefix}-input`,
        class:
          "size-full px-16 focus:ring-0 active:ring-f1 border-none bg-transparent text-g7 text-label-2 focus-visible:outline-none",
        "aria-label": A(e)?.search?.button || "Search",
        type: "search",
        name: "q",
        "data-component-name": "q",
        role: "combobox",
        list: void 0,
        value: o.inputValue,
        "aria-activedescendant": l,
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": p,
        "aria-expanded": !r && a,
        tabIndex: !r && a ? 0 : -1,
        inert: r || !a || void 0,
        mix: [
          re((i) => {
            t = i;
          }),
          w("input", (i) => {
            e.props.controller.setTerm(i.currentTarget.value);
          }),
          w("focus", (i) => {
            i.currentTarget.setSelectionRange(0, i.currentTarget.value.length);
          }),
          w("keydown", (i) => {
            if (i.key === "ArrowDown" || i.key === "ArrowUp") {
              i.preventDefault(),
                i.stopPropagation(),
                e.props.controller.moveActive(i.key === "ArrowDown" ? 1 : -1);
              return;
            }
            if (i.key === "Enter" && o.activeIndex !== null) {
              const u = i.currentTarget.form?.querySelector(
                `#${CSS.escape(l ?? "")} a, #${CSS.escape(l ?? "")} button`,
              );
              u && (i.preventDefault(), u.click());
            }
          }),
        ],
      })
    );
  };
}
function gt(e) {
  return () => {
    const t = A(e),
      { height: s = 24, width: o = 24 } = e.props;
    return n("div", {
      class: W("size-32 mx-8 inline-flex items-center justify-center", e.props.class, e.props.className),
      children: [
        n("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: s,
          viewBox: "0 0 24 24",
          fill: "none",
          class: "aspect-square text-g7",
          "aria-hidden": "true",
          children: n("path", {
            d: "M18.1824 17.0771C16.8635 18.6832 14.9714 19.713 12.9065 19.9485C10.8417 20.184 8.76626 19.6067 7.11956 18.3389C5.47286 17.071 4.38416 15.2122 4.08393 13.1558C3.78369 11.0993 4.29548 9.00679 5.51096 7.32108C6.72644 5.63537 8.5502 4.48882 10.5962 4.12413C12.6421 3.75945 14.7497 4.20526 16.4728 5.36719C18.1958 6.52912 19.3991 8.31597 19.8279 10.3495C20.2567 12.383 19.8773 14.5035 18.77 16.2622",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeDasharray: 45,
            strokeDashoffset: 130,
            class: "search-loader animate-search-loading-spinner origin-center",
          }),
        }),
        n("span", { class: "sr-only", children: e.props.label || t?.loadingSpinner?.label || "Loading" }),
      ],
    });
  };
}
function ht(e) {
  return () => {
    const t = e.props.controller.getSnapshot(),
      s = t.loading === "results",
      o = !t.term || s,
      r = J("Search", le.Small);
    return s
      ? n(gt, {})
      : n(U, {
          type: "submit",
          as: "button",
          class: "is-inside-search size-32 mx-8 inline-flex items-center justify-center rounded-lg",
          "aria-label": A(e)?.submitButton?.button || "Search",
          disabled: o,
          children: [
            r ? n(H, { name: r, theme: o ? j.G4 : j.Black }) : null,
            n("span", { class: "sr-only", children: A(e)?.submitButton?.button || "Search" }),
          ],
        });
  };
}
function bt(e) {
  return () =>
    n("div", {
      class: S(
        "is-inside-search",
        "bg-g2 flex items-center",
        "rounded-[4px] h-52 mx-16",
        "global-lg:h-46 global-lg:m-0",
      ),
      children: [
        n(ft, { controller: e.props.controller, idPrefix: e.props.idPrefix, surface: e.props.surface }),
        n("span", {
          class: "pointer-events-auto inline-flex items-center pl-16",
          children: [
            n(mt, { controller: e.props.controller }),
            n("div", { class: "h-28 w-1 bg-g3 ml-16" }),
            n(ht, { controller: e.props.controller }),
          ],
        }),
      ],
    });
}
function vt(e) {
  let t = null,
    s = !1;
  return (
    e.queueTask(() => {
      ye(
        "(max-width: 939px)",
        (o) => {
          s !== o && ((s = o), e.update());
        },
        e.signal,
      );
    }),
    () => {
      const o = e.props.controller.getSnapshot().view === "closed",
        r = J("Search", s ? le.Large : le.Small);
      return n(U, {
        id: e.props.id,
        "data-component-name": "open",
        as: "button",
        mix: [
          re((a) => {
            t = a;
          }),
          w("click", () => {
            o && e.props.controller.open(e.props.surface, t);
          }),
        ],
        class: S(
          s
            ? "mobileNavItem text-label-menu border-inherit"
            : "navButton text-label-1 [&>.icon]:transition-colors [&>.icon]:duration-300!",
        ),
        "aria-disabled": !o,
        tabIndex: o ? 0 : -1,
        children: [e.props.children, r ? n(H, { name: r, theme: e.props.theme }) : null],
      });
    }
  );
}
function xt(e) {
  return () => {
    const t = e.props.controller.getSnapshot(),
      s = t.view === "closed",
      o = t.activeSurface === e.props.surface;
    return n("form", {
      method: "get",
      class: S(
        "absolute w-full left-0 z-10",
        "bottom-0 h-[calc(100dvh-10rem)]",
        "global-lg:bottom-auto global-lg:h-auto global-lg:-top-6 global-lg:rounded-[4px]",
        (s || !o) && "pointer-events-none",
        t.term.length === 0 && "overflow-clip",
      ),
      "aria-hidden": s || !o,
      inert: s || !o || void 0,
      mix: w("submit", (r) => {
        r.preventDefault(), e.props.controller.submit();
      }),
      children: n("div", {
        class: S(
          "inner w-full",
          "transition-transform duration-200 ease-out",
          "rounded-t-xl bg-g1 h-full pt-16",
          "global-lg:rounded-none global-lg:h-auto global-lg:bg-transparent global-lg:p-0",
          s || !o
            ? "translate-y-full global-lg:translate-y-0 global-lg:-translate-x-[101%] pointer-events-none"
            : "translate-x-0 pointer-events-auto",
        ),
        children: e.props.children,
      }),
    });
  };
}
function Ue(e) {
  switch (e) {
    case M.spring2026:
      return "https://cdn.shopify.com/s/files/1/0647/5176/3550/files/fav-180.png?v=1780498479";
    case M.summer2022:
      return "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/Editions_Summer_22.svg?v=1716836623";
    case M.winter2023:
      return "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/Editions_Winter_23.svg?v=1716836623";
    case M.summer2023:
      return "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/Editions_Summer_23.svg?v=1716836623";
    case M.winter2024:
      return "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/Editions_Winter_24.svg?v=1716836623";
    case M.summer2024:
      return "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/Editions_Summer_24.svg?v=1716836623";
    case M.winter2025:
      return "https://cdn.shopify.com/s/files/1/0702/3204/7829/files/Editions-Winter-25-compressed.svg?v=1733331674";
    case M.summer2025:
      return "https://cdn.shopify.com/s/files/1/0921/8919/6588/files/Summer2025.svg?v=1760667315";
    case M.winter2026:
      return "https://cdn.shopify.com/s/files/1/0951/3130/4218/files/favicon_256.png?v=1760634627";
    default:
      return "";
  }
}
function yt(e, t = {}) {
  const { allowedEditionKeys: s = [], unreleasedEditions: o = [] } = t,
    r = {},
    a = new Set([...s, ...o]);
  return (
    e.forEach((p) => {
      !p ||
        typeof p != "object" ||
        Array.isArray(p) ||
        Object.keys(p).forEach((l) => {
          if (!Re(l) && !a.has(l)) return;
          const c = l,
            i = p[c];
          if (!(!i || !Array.isArray(i) || i.length === 0))
            if (!r[c]) r[c] = [...i];
            else {
              Array.isArray(r[c]) || (r[c] = []);
              const u = new Set(r[c]?.map((h) => h.handle)),
                f = i.filter((h) => !u.has(h.handle));
              r[c] = [...(r[c] || []), ...f];
            }
        });
    }),
    r
  );
}
const oe = (e, { includeInitialQuery: t = !0 } = {}) =>
    JSON.stringify([
      e.currentEdition,
      e.searchEdition ?? e.currentEdition,
      e.locale ?? "",
      e.endpoints.predictive,
      e.endpoints.results,
      e.searchResultEditionKeys ?? [],
      e.debounceMs ?? 300,
      ...(t ? [e.initialQuery?.trim() ?? ""] : []),
    ]),
  _e = 10,
  z = { queries: [], products: [] };
class wt extends Oe {
  #t;
  #e;
  #n;
  #i;
  #c = [];
  #p;
  #r = 0;
  #a = 0;
  #l = null;
  #s = !1;
  constructor(t) {
    super(), (this.#t = t);
    const s = t.initialQuery?.trim() ?? "";
    this.#e = {
      view: "closed",
      term: s,
      inputValue: s,
      predictive: z,
      results: {},
      loading: "idle",
      activeIndex: null,
      activeSurface: null,
      expandedEditions: [],
      error: null,
    };
  }
  getSnapshot() {
    return this.#e;
  }
  async reconfigure(t) {
    if (this.#s) return;
    const s = oe(this.#t, { includeInitialQuery: !1 }) !== oe(t, { includeInitialQuery: !1 }),
      o = t.initialQuery?.trim() ?? "";
    if (((this.#t = t), !s && o === this.#e.term)) return;
    this.#u();
    const r = this.#l,
      a = this.#e.view !== "closed";
    o || ((this.#l = null), a && this.#h(r)),
      this.#o({
        view: "closed",
        term: o,
        inputValue: o,
        predictive: z,
        results: {},
        loading: "idle",
        activeIndex: null,
        activeSurface: null,
        expandedEditions: [],
        error: null,
      }),
      o && (await this.initialize());
  }
  get resultCount() {
    return this.#e.view === "predictive"
      ? this.#e.loading === "results"
        ? 0
        : this.#e.predictive.queries.length + this.#e.predictive.products.length + 1
      : this.#e.view === "results"
        ? Object.entries(this.#e.results).reduce(
            (t, [s, o]) =>
              t + (this.#e.expandedEditions.includes(s) ? (o?.length ?? 0) : Math.min(o?.length ?? 0, _e)),
            0,
          )
        : 0;
  }
  open(t, s) {
    this.#s || ((this.#l = s ?? this.#l), this.#o({ view: "empty", activeSurface: t, error: null }));
  }
  setActiveSurface(t) {
    this.#s || this.#e.activeSurface === null || this.#e.activeSurface === t || this.#o({ activeSurface: t });
  }
  async initialize() {
    this.#s ||
      !this.#e.term ||
      (this.#o({ activeSurface: matchMedia("(max-width: 939px)").matches ? "mobile" : "desktop" }),
      await this.submit({ updateUrl: !1 }));
  }
  setTerm(t) {
    if (this.#s) return;
    const s = t.trim();
    if ((this.#m(), this.#i?.abort(), (this.#r += 1), this.#f(), (this.#a += 1), !s)) {
      this.#o({
        term: "",
        inputValue: "",
        view: "empty",
        predictive: z,
        results: {},
        activeIndex: null,
        expandedEditions: [],
        loading: "idle",
        error: null,
      });
      return;
    }
    this.#o({ term: s, inputValue: t, activeIndex: null, error: null }),
      (this.#n = setTimeout(() => {
        this.predict();
      }, this.#t.debounceMs ?? 300));
  }
  async predict() {
    const t = this.#e.term;
    if (this.#s || !t || !this.#t.endpoints.predictive) return;
    const s = ++this.#r;
    this.#i?.abort();
    const o = new AbortController();
    (this.#i = o), this.#o({ loading: "predictive", error: null });
    try {
      const r = await this.#g(this.#t.endpoints.predictive, o.signal);
      if (s !== this.#r || o.signal.aborted) return;
      const a = await r.json();
      if (this.#s || s !== this.#r || o.signal.aborted) return;
      this.#o({
        predictive: a.predictiveSearch ?? z,
        view: "predictive",
        loading: "idle",
        activeIndex: null,
      });
    } catch (r) {
      if (this.#s || s !== this.#r || o.signal.aborted) return;
      console.error("Error fetching predictive search results:", r),
        this.#o({ predictive: z, view: "predictive", loading: "idle", error: "predictive" });
    }
  }
  async submit({ updateUrl: t = !0 } = {}) {
    const s = this.#e.term.trim();
    if (this.#s || !s || s === this.#p) return;
    this.#m(), this.#i?.abort(), (this.#r += 1), this.#f();
    const o = ++this.#a;
    if (
      ((this.#p = s),
      this.#o({ inputValue: s, loading: "results", activeIndex: null, error: null }),
      t && this.#d(s),
      this.#s || o !== this.#a)
    )
      return;
    const r = await Promise.all(
      this.#t.endpoints.results.map(async (l) => {
        const c = new AbortController();
        this.#c.push(c);
        try {
          return (await (await this.#g(l, c.signal, s)).json()).search ?? null;
        } catch (i) {
          return c.signal.aborted || console.error(`Error fetching from ${l}:`, i), null;
        }
      }),
    );
    if (this.#s || o !== this.#a) return;
    const a = yt(r, {
        allowedEditionKeys: [...(this.#t.searchResultEditionKeys ?? [])],
        unreleasedEditions: [this.#t.searchEdition ?? this.#t.currentEdition],
      }),
      p = r.every((l) => l === null);
    (this.#c = []),
      (this.#p = void 0),
      this.#o({
        results: a,
        view: "results",
        loading: "idle",
        activeIndex: null,
        expandedEditions: [],
        error: p ? "results" : null,
      });
  }
  clear() {
    this.#s ||
      (this.#u(),
      this.#o({
        view: "empty",
        term: "",
        inputValue: "",
        predictive: z,
        results: {},
        loading: "idle",
        activeIndex: null,
        expandedEditions: [],
        error: null,
      }),
      this.#d(null));
  }
  close({ clearQuery: t = !0, focus: s = "launcher" } = {}) {
    this.#s ||
      this.#e.view === "closed" ||
      (this.#u(),
      s === "launcher" ? this.#h(this.#l) : s === "blur" && this.#b(),
      this.#v(),
      t && this.#d(null));
  }
  getHashResultHref(t) {
    if (typeof window > "u") return t;
    const s = new URL(window.location.href);
    return s.searchParams.delete("q"), (s.hash = t), s.href;
  }
  moveActive(t) {
    if (this.#s) return;
    const s = this.resultCount;
    if (s === 0) return;
    const o = this.#e.activeIndex;
    if (t === -1 && o === null) return;
    const r = o === null ? 0 : (o + t + s) % s;
    this.#o({ activeIndex: r });
  }
  setActive(t) {
    this.#s || this.#o({ activeIndex: t });
  }
  expandEdition(t) {
    this.#s ||
      this.#e.expandedEditions.includes(t) ||
      this.#o({ expandedEditions: [...this.#e.expandedEditions, t], activeIndex: null });
  }
  dispose() {
    this.#s || ((this.#s = !0), this.#u());
  }
  async #g(t, s, o = this.#e.term) {
    const r = new URLSearchParams({ q: o, currentEdition: this.#t.searchEdition ?? this.#t.currentEdition }),
      a = await (this.#t.fetch ?? globalThis.fetch)(t, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: r,
        credentials: "include",
        signal: s,
      });
    if (!a.ok) throw new Error(`Search request failed: ${a.status} ${t}`);
    return a;
  }
  #d(t) {
    if (typeof window > "u") return;
    const s = new URL(window.location.href);
    t === null ? s.searchParams.delete("q") : ((s.search = ""), s.searchParams.set("q", t)),
      window.history.replaceState(window.history.state, "", s);
  }
  #o(t) {
    this.#s || ((this.#e = { ...this.#e, ...t }), this.dispatchEvent(new Event("change")));
  }
  #h(t) {
    t?.isConnected ? t.focus({ preventScroll: !0 }) : this.#b();
  }
  #b() {
    typeof document < "u" && document.activeElement instanceof HTMLElement && document.activeElement.blur();
  }
  #v() {
    this.#o({
      view: "closed",
      term: "",
      inputValue: "",
      predictive: z,
      results: {},
      loading: "idle",
      activeIndex: null,
      activeSurface: null,
      expandedEditions: [],
      error: null,
    });
  }
  #m() {
    clearTimeout(this.#n), (this.#n = void 0);
  }
  #f() {
    this.#c.forEach((t) => t.abort()), (this.#c = []), (this.#p = void 0);
  }
  #u() {
    this.#m(), this.#i?.abort(), (this.#i = void 0), (this.#r += 1), this.#f(), (this.#a += 1);
  }
}
function Et({ searchResults: e, searchResultEditionKeys: t = [] }) {
  return [...new Set([...t, ...Object.keys(e), ...ot.map(String)])];
}
function St(e, t) {
  return t?.[e] || (Re(e) ? Ue(M[e]) : void 0);
}
function kt(e) {
  return () => {
    const t = A(e),
      s = e.props.controller.getSnapshot();
    if (s.view !== "results") return null;
    const o = _e,
      r = Object.values(s.results).some((i) => i && i.length > 0);
    let a = 0;
    const p = Et({ searchResults: s.results, searchResultEditionKeys: e.props.searchResultEditionKeys }),
      l = e.props.controller.resultCount,
      c = {
        allEditions: "All editions results",
        spring2026: "Spring '26 results",
        winter2026: "Winter '26 results",
        summer2025: "Summer '25 results",
        winter2025: "Winter '25 results",
        summer2024: "Summer '24 results",
        winter2024: "Winter '24 results",
        summer2023: "Summer '23 results",
        winter2023: "Winter '23 results",
        summer2022: "Summer '22 results",
      };
    return n(Be, {
      ariaLabel: t?.searchResults?.label || "Search results",
      id: `${e.props.idPrefix}-results-container`,
      dataComponentName: e.props.dataComponentName,
      children: [
        r
          ? n("span", {
              "aria-live": "polite",
              class: "sr-only",
              children: `${l} ${t?.searchResults?.resultsFound || "results found"}`,
            })
          : null,
        r
          ? p.map((i) => {
              const u = s.results[i];
              if (!u?.length) return null;
              const f = s.expandedEditions.includes(i),
                h = f ? u.length : Math.min(u.length, o),
                g = a;
              return (
                (a += h),
                n(
                  pe,
                  {
                    controller: e.props.controller,
                    currentEdition: e.props.currentEdition,
                    id: `${e.props.idPrefix}-${i}-results`,
                    icon: St(i, t?.searchResults?.logoUrls),
                    title: t?.searchResults?.resultsLabels?.[i] || c[i] || i,
                    results: u,
                    max: f ? void 0 : o,
                    indexOffset: g,
                    locale: e.props.locale,
                    onExpand: f ? void 0 : () => e.props.controller.expandEdition(i),
                    onResultClick: e.props.onResultClick,
                    optionIdPrefix: `${e.props.idPrefix}-item`,
                  },
                  `${i}-results`,
                )
              );
            })
          : n(pe, {
              controller: e.props.controller,
              currentEdition: e.props.currentEdition,
              locale: e.props.locale,
              title: t?.searchResults?.results || "results",
              id: `${e.props.idPrefix}-no-results`,
              optionIdPrefix: `${e.props.idPrefix}-item`,
              error: `${s.error === "results" ? "Search is temporarily unavailable. " : ""}${t?.searchResults?.noResults || "No results found for"} "${s.term}". ${t?.searchResults?.checkSpelling || "Check the spelling or use a different word or phrase."}`,
            }),
      ],
    });
  };
}
function Ce(e) {
  const t = e.props.controller;
  return (
    e.queueTask(() => {
      t.addEventListener(
        "change",
        () => {
          e.update();
        },
        { signal: e.signal },
      );
    }),
    e.props.ownsGlobalEvents &&
      e.queueTask(() => {
        t.initialize(),
          ye("(max-width: 939px)", (s) => t.setActiveSurface(s ? "mobile" : "desktop"), e.signal),
          window.addEventListener(
            "hashchange",
            () => {
              const s = t.getSnapshot();
              window.location.hash && s.view !== "closed" && t.close({ clearQuery: !1 });
            },
            { signal: e.signal },
          ),
          document.addEventListener(
            "click",
            (s) => {
              if (t.getSnapshot().view === "closed") return;
              const r = s.target;
              !(r instanceof Element) ||
                r.closest(".is-inside-search") ||
                t.close({ clearQuery: !r.closest("a") });
            },
            { signal: e.signal },
          ),
          document.addEventListener(
            "keydown",
            (s) => {
              const o = t.getSnapshot();
              if (
                (navigator.userAgent.includes("Mac") ? s.metaKey : s.ctrlKey) &&
                s.code === "KeyK" &&
                o.view === "closed"
              ) {
                s.preventDefault(),
                  e.props.onShortcutOpen
                    ? e.props.onShortcutOpen()
                    : t.open(e.props.surface, document.getElementById(`${e.props.idPrefix}-button`));
                return;
              }
              s.key === "Escape" &&
                o.view !== "closed" &&
                (s.preventDefault(), s.stopPropagation(), t.close());
            },
            { signal: e.signal },
          ),
          e.signal.addEventListener("abort", () => t.dispose(), { once: !0 });
      }),
    () => {
      const s = A(e),
        o = t.getSnapshot(),
        r = o.view !== "closed",
        a = o.activeSurface === e.props.surface;
      return n(Ne, {
        children: [
          n(Pe, {
            isMenuOpen: e.props.isMobileNavOpen,
            isOpen: r && a,
            onClick: () => {
              t.close();
            },
          }),
          n("div", {
            class: S(
              "is-inside-search",
              "global-lg:grow global-lg:relative global-xl:max-w-640 global-lg:mr-20",
              e.props.class,
              e.props.className,
            ),
            "data-component-name": "search",
            children: [
              n(vt, {
                controller: t,
                id: `${e.props.idPrefix}-button`,
                surface: e.props.surface,
                theme: e.props.theme,
                children: s?.search?.button || "Search",
              }),
              n(xt, {
                controller: t,
                surface: e.props.surface,
                children: [
                  n(bt, { controller: t, idPrefix: e.props.idPrefix, surface: e.props.surface }),
                  n(dt, {
                    controller: t,
                    currentEdition: e.props.currentEdition,
                    dataComponentName: "search-prediction",
                    idPrefix: e.props.idPrefix,
                    locale: e.props.locale,
                    onResultClick: e.props.onResultClick,
                  }),
                  n(kt, {
                    controller: t,
                    currentEdition: e.props.currentEdition,
                    dataComponentName: "search-results",
                    idPrefix: e.props.idPrefix,
                    locale: e.props.locale,
                    onResultClick: e.props.onResultClick,
                    searchResultEditionKeys: e.props.searchResultEditionKeys,
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
  );
}
function Y(e) {
  return () => {
    const t = W(e.props.itemClassName, e.props.class, e.props.className);
    return e.props.as === "h1"
      ? n("h1", { class: t, "data-section-name": e.props.dataSectionName, children: e.props.children })
      : n("li", { class: t, "data-section-name": e.props.dataSectionName, children: e.props.children });
  };
}
function Ct(e) {
  const t = e.props.searchController;
  return (
    e.queueTask(() => {
      t.addEventListener(
        "change",
        () => {
          e.update();
        },
        { signal: e.signal },
      );
    }),
    () => {
      const s = e.props.searchController.getSnapshot().view === "closed";
      return n("ul", {
        class: S(
          "flex ml-auto gap-10 global-sm:gap-20 items-center",
          !s && "global-lg:hidden global-xl:flex",
        ),
        children: [
          e.props.desktopActions
            ? n(Y, {
                class: "hidden global-lg:block",
                dataSectionName: "global-nav",
                itemClassName: e.props.itemClassName,
                children: e.props.desktopActions,
              })
            : null,
          n(Y, {
            class: "hidden global-lg:block",
            dataSectionName: "global-nav",
            itemClassName: e.props.itemClassName,
            children: n(U, {
              class: "navButton text-label-1",
              ...e.props.shopifyButton,
              children: e.props.shopifyButton.children,
            }),
          }),
          n(Y, {
            dataSectionName: "global-nav",
            itemClassName: e.props.itemClassName,
            children: n(U, { ...e.props.freeTrialLink, class: "roundedButton text-label-1" }),
          }),
          n("li", {
            class: "flex global-lg:hidden",
            "data-section-name": "nav",
            children: n(U, {
              as: "button",
              "data-component-name": e.props.isMenuOpen ? "close" : "open",
              mix: w("click", (o) => {
                o.currentTarget.focus({ preventScroll: !0 }), e.props.onMenuToggle(o);
              }),
              "aria-expanded": e.props.isMenuOpen,
              "aria-controls": "mobile-menu",
              class: "inline-flex items-center",
              "aria-label": A(e)?.nav?.menuLabel || "Menu",
              children: n(H, {
                name: J(e.props.isMenuOpen ? "MenuClose24" : "Menu24", le.Large),
                theme: e.props.theme === "dark" ? j.White : j.Black,
              }),
            }),
          }),
        ],
      });
    }
  );
}
function It(e) {
  return () => {
    const t = n("div", {
        class: "flex gap-10 items-center",
        "data-nosnippet": !0,
        children: [
          n("img", {
            "data-nosnippet": !0,
            alt: "",
            "aria-hidden": "true",
            src: e.props.icon,
            height: 24,
            width: 24,
            loading: "lazy",
          }),
          n("div", {
            class: "items-center gap-8",
            children: [
              n("p", { class: "text-label-2 text-g7", children: e.props.name }),
              e.props.description
                ? n("p", { class: "text-label-3 text-g5", children: e.props.description })
                : null,
            ],
          }),
        ],
      }),
      s =
        "focus-ring flex link2 px-10 text-d1 gap-10 no-underline items-center py-7 first-of-type:pt-10 last-of-type:pt-10";
    return n("li", {
      class:
        "relative hover:bg-g2 hover:first-of-type:rounded-t-[4px] hover:last-of-type:rounded-b-[4px] border-b border-g3 last-of-type:border-none",
      children: e.props.url
        ? n("a", {
            href: e.props.url,
            "aria-label": e.props.name,
            rel: "noopener noreferrer",
            target: "_blank",
            class: s,
            "data-component-name": "cta-link",
            children: t,
          })
        : n("span", { "aria-current": "page", class: s, children: t }),
    });
  };
}
const Mt = (e, t, s) => {
  const o = [],
    r = s?.allEditions?.navigationData?.links,
    a = Object.keys(ce);
  return (
    a.includes(e) || a.unshift(e),
    a.forEach((p) => {
      const l = ce[p],
        c = p === e;
      if (!l?.isLive && !c) return;
      const i = r?.[p];
      i &&
        o.push({
          editionKey: p,
          logoUrl: i.logoUrl,
          name: i.name,
          url: c ? "" : de({ baseUrl: L, locale: t, path: l?.path || `editions/${p}` }),
        });
    }),
    o
  );
};
function Lt(e, t) {
  const s = e.slice(0, ke);
  if (s.some((r) => r.editionKey === t)) return s;
  const o = e.find((r) => r.editionKey === t);
  return o ? [...s.slice(0, ke - 1), o] : s;
}
function qe(e) {
  return () => {
    const t = A(e),
      s = Lt(e.props.dropdownItems ?? Mt(e.props.currentEdition, e.props.locale, t), e.props.currentEdition),
      { dropdownId: o, isOpen: r } = e.props,
      a = J(r ? "ChevronUp16" : "ChevronDown16"),
      p = W(
        S(
          r
            ? "visible opacity-100 delay-100 z-10"
            : "pointer-events-none invisible opacity-0 delay-0 global-lg:-translate-y-10 translate-y-50",
        ),
        "fixed global-lg:absolute left-0 bottom-0 global-lg:bottom-auto w-full global-lg:w-220 rounded-t-[4px] global-lg:rounded-b-[4px] shadow transition-[opacity,visibility,translate] duration-300 motion-reduce:transition-none bg-white",
      );
    return n("div", {
      class: "all-editions-dropdown-picker relative",
      children: [
        n(U, {
          ...e.props.buttonProps,
          "aria-expanded": r,
          "aria-controls": `${o}-expandable-section`,
          "data-component-name": o,
          id: `${o}-button`,
          class: e.props.class ?? e.props.className,
          mix: w("click", () => e.props.setIsOpen(!r)),
          as: "button",
          children: [
            t?.allEditions?.navigationData?.heading || "All Editions",
            a ? n(H, { name: a, theme: e.props.theme ?? j.Black }) : null,
          ],
        }),
        n(Pe, { isMenuOpen: e.props.isMenuOpen, isOpen: r, onClick: () => e.props.setIsOpen(!1) }),
        n("ul", {
          class: W("mt-8 group", p),
          id: `${o}-expandable-section`,
          "aria-labelledby": `${o}-button`,
          "aria-hidden": !r,
          inert: !r || void 0,
          children: [
            s.map((l) =>
              n(
                It,
                { description: l.description, icon: l.logoUrl || Ue(l.editionKey), name: l.name, url: l.url },
                `${o}-list-item-${l.name}`,
              ),
            ),
            n("li", {
              class: "relative hover:bg-g2 hover:last-of-type:rounded-b-[4px]",
              children: n("a", {
                href: de({ baseUrl: L, locale: e.props.locale, path: "editions" }),
                "aria-label": t?.viewAllEditions?.button,
                rel: "noopener noreferrer",
                target: "_blank",
                class: "focus-ring flex link2 p-15 text-d1 gap-10 no-underline items-center justify-center",
                "data-component-name": "view-all-editions-link",
                children: n("span", {
                  class: "flex items-center gap-4 text-g7 text-label-1",
                  children: [t?.viewAllEditions?.button, n(H, { name: ze.ArrowDiagonal16 })],
                }),
              }),
            }),
          ],
        }),
      ],
    });
  };
}
function At(e) {
  return () =>
    n("ul", {
      class: "hidden global-lg:flex grow ml-40 gap-24 items-center",
      "data-component-name": "global-nav",
      children: [
        e.props.hasAllEditionsDropdown
          ? n(Y, {
              itemClassName: e.props.itemClassName,
              children: n(qe, {
                locale: e.props.locale,
                class: "navButton text-label-1 [&>.icon]:transition-colors [&>.icon]:duration-300!",
                dropdownId: "all-editions-dropdown",
                currentEdition: e.props.currentEdition,
                isMenuOpen: e.props.isMenuOpen,
                isOpen: e.props.isAllEditionsDropdownOpen,
                setIsOpen: (t) => {
                  e.props.setIsAllEditionsDropdownOpen(t),
                    t &&
                      e.props.searchController.getSnapshot().view !== "closed" &&
                      e.props.searchController.close({ focus: "preserve" });
                },
                theme: e.props.iconTheme,
                dropdownItems: e.props.allEditionsDropdownItems,
                buttonProps: e.props.allEditionsButton,
              }),
            })
          : null,
        n(Y, { class: "grow", itemClassName: e.props.itemClassName, children: e.props.search }),
      ],
    });
}
function Tt(e) {
  return () =>
    n("svg", {
      class: e.props.class,
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "19",
      fill: "none",
      viewBox: "0 0 18 19",
      "aria-hidden": "true",
      children: n("path", {
        fill: "currentColor",
        d: "m11.975 2.421-.54.167a3.775 3.775 0 0 0-.258-.634C10.796 1.226 10.237.84 9.56.84h-.002c-.047 0-.093.004-.14.009a1.124 1.124 0 0 0-.061-.07C9.062.463 8.684.309 8.232.322 7.359.348 6.49.978 5.785 2.098c-.496.787-.873 1.778-.98 2.543l-1.719.532c-.506.16-.522.175-.588.651-.05.362-1.373 10.598-1.373 10.598l10.983 1.9V2.399a.67.67 0 0 0-.133.022Zm-2.536.785-1.852.574c.18-.686.518-1.369.935-1.815.156-.167.373-.352.63-.458.24.504.293 1.217.287 1.7ZM8.25.903a.886.886 0 0 1 .525.139 2.531 2.531 0 0 0-.678.527c-.555.595-.98 1.519-1.149 2.41l-1.521.47C5.727 3.048 6.903.943 8.25.904ZM6.551 8.891c.06.935 2.517 1.139 2.655 3.328.109 1.721-.913 2.899-2.386 2.992-1.767.111-2.74-.93-2.74-.93l.374-1.594s.98.739 1.763.69c.512-.033.695-.45.677-.743-.077-1.22-2.078-1.148-2.205-3.15-.106-1.685 1-3.393 3.442-3.547.942-.059 1.423.181 1.423.181l-.559 2.089s-.623-.283-1.36-.237c-1.083.067-1.095.75-1.084.921Zm3.468-5.864c-.006-.442-.059-1.057-.265-1.589.662.126.989.875 1.126 1.322l-.86.267ZM12.47 18.278l4.557-1.133S15.065 3.882 15.053 3.791a.174.174 0 0 0-.158-.147c-.066-.005-1.348-.025-1.348-.025s-.782-.76-1.075-1.047v15.706h-.001Z",
      }),
    });
}
function Ot(e) {
  return () => {
    const t = e.props.currentEdition.toLowerCase(),
      s = e.props.translations?.allEditions?.navigationData?.links?.[t];
    return n(Y, {
      as: "h1",
      itemClassName: e.props.itemClassName,
      children: n("a", {
        href: e.props.to,
        class: "focus-ring py-5 flex gap-8 items-center rounded-[4px] no-underline text-label-1 back-to-top",
        mix: e.props.onClick ? w("click", (o) => e.props.onClick?.(o)) : void 0,
        "data-scroll-to-top": !0,
        children: [
          e.props.hasBagSvg ? n(Tt, { class: "size-24 global-lg:size-18" }) : null,
          n("span", {
            class: "flex flex-col gap-2 global-lg:flex-row global-lg:gap-8",
            children: [
              n("span", { children: e.props.translations.nav?.heading || "Shopify Editions" }),
              n("span", { class: "opacity-60", children: s?.name || "" }),
            ],
          }),
        ],
      }),
    });
  };
}
const Ie = (e, t) => (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0,
  Nt =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function Dt(e) {
  let t,
    s = !1,
    o = !1,
    r = 0,
    a = null,
    p = null,
    l = null,
    c;
  const i = () => {
      const x = window.CloseWatcher;
      x &&
        ((c = new x()),
        c.addEventListener("close", () => {
          (c = void 0), e.props.onClose(), o && i();
        }));
    },
    u = () => {
      (o = !0),
        (p =
          document.activeElement instanceof HTMLElement && document.activeElement !== document.body
            ? document.activeElement
            : null),
        t.showPopover(),
        e.props.onShownChange?.(!0),
        i();
    },
    f = () => {
      o && ((o = !1), (l = null), c?.destroy(), (c = void 0), t.hidePopover(), e.props.onShownChange?.(!1));
    },
    h = () => {
      if (!o || t.hasAttribute("data-closing")) return;
      const x = ++r;
      t.setAttribute("data-closing", "");
      const d = t.getAnimations();
      if (!d.length) {
        f();
        return;
      }
      Promise.allSettled(d.map((m) => m.finished)).then(() => {
        !e.signal.aborted && x === r && f();
      });
    },
    g = (x) => {
      const d = [...t.querySelectorAll(Nt)].filter((O) => O.getClientRects().length > 0),
        m = d[0],
        E = d.at(-1);
      if (!m || !E) return;
      const v = document.activeElement;
      (v instanceof Node && t.contains(v) && d.some((O) => (x.shiftKey ? Ie(O, v) : Ie(v, O)))) ||
        (x.preventDefault(), (x.shiftKey ? E : m).focus());
    };
  return (
    e.queueTask(() => {
      if (e.signal.aborted) return;
      ye(
        "(max-width: 939px)",
        (d) => {
          (s = d), d || f();
        },
        e.signal,
      ),
        window.addEventListener(
          "focusin",
          (d) => {
            if (o) {
              if (d.target instanceof HTMLElement && t.contains(d.target)) {
                l = d.target;
                return;
              }
              d.stopImmediatePropagation(),
                l && t.contains(l) && l.focus({ preventScroll: !0 }),
                t.contains(document.activeElement) ||
                  t.querySelector("[autofocus]")?.focus({ preventScroll: !0 });
            }
          },
          { capture: !0, signal: e.signal },
        );
      const x = (d) => {
        !o ||
          (d.target instanceof Node && t.contains(d.target)) ||
          (d.preventDefault(), d.stopImmediatePropagation());
      };
      for (const d of ["pointerdown", "click", "auxclick", "contextmenu"])
        window.addEventListener(d, x, { capture: !0, signal: e.signal });
      window.addEventListener(
        "keydown",
        (d) => {
          !o ||
            d.defaultPrevented ||
            (d.key === "Escape" ? (d.preventDefault(), e.props.onClose()) : d.key === "Tab" && g(d));
        },
        { signal: e.signal },
      ),
        e.signal.addEventListener(
          "abort",
          () => {
            c?.destroy(), o && e.props.onShownChange?.(!1);
          },
          { once: !0 },
        );
    }),
    () => {
      e.queueTask((m) => {
        if (m.aborted) return;
        e.props.isMenuOpen && s ? ((a = null), r++, t.removeAttribute("data-closing"), o || u()) : o && h();
      });
      const x = A(e),
        d = J("ExternalLink24");
      return n("dialog", {
        class: e.props.class,
        id: "mobile-menu",
        popover: "manual",
        "aria-modal": "true",
        "aria-label": x?.nav?.heading || "Menu",
        mix: [
          re((m) => (t = m)),
          w("toggle", (m) => {
            if (m.newState !== "closed" || o) return;
            r++, t.removeAttribute("data-closing"), e.props.isMenuOpen && e.props.onClose();
            const E = document.activeElement,
              v = !E || E === document.body || t.contains(E),
              P = a ?? p;
            v && P?.isConnected && P.focus({ preventScroll: !0 }), (a = null), (p = null);
          }),
          w("click", (m) => {
            const E = m.target instanceof Element ? m.target.closest("a[href]") : null;
            if (
              !m.defaultPrevented &&
              m.button === 0 &&
              !m.metaKey &&
              !m.ctrlKey &&
              !m.shiftKey &&
              !m.altKey &&
              E
            ) {
              const v = new URL(E.href);
              E.target !== "_blank" &&
                v.origin === location.origin &&
                v.pathname === location.pathname &&
                v.search === location.search &&
                v.hash &&
                (a = document.getElementById(decodeURIComponent(v.hash.slice(1)))),
                e.props.onClose();
            }
          }),
        ],
        children: [
          n("div", {
            class:
              "relative flex h-60 shrink-0 items-center justify-between px-10 outline-none global-sm:px-20 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-current/20",
            tabindex: -1,
            autofocus: !e.props.focusCloseOnOpen,
            children: [
              e.props.logo,
              n("div", {
                class: "ml-auto mr-10 flex global-sm:mr-20",
                "data-section-name": "mobile-nav",
                children: n(U, { ...e.props.freeTrialLink, class: "roundedButton text-label-1" }),
              }),
              n("button", {
                type: "button",
                class: "focus-ring -m-10 flex items-center justify-center p-10",
                "aria-label": x?.dismissOverlay?.button || "Close",
                autofocus: e.props.focusCloseOnOpen,
                mix: w("click", () => e.props.onClose()),
                children: n(H, { name: J("MenuClose24"), class: "text-current" }),
              }),
            ],
          }),
          n("div", {
            class:
              "no-scrollbar flex min-h-0 flex-1 flex-col justify-between overflow-y-auto overscroll-contain",
            "data-lenis-prevent": !0,
            "data-mobile-menu-scrollport": !0,
            children: [
              e.props.mobileMenu,
              n("ul", {
                class: S(
                  "text-base flex shrink-0 flex-col items-start py-20",
                  e.props.theme === "dark" ? "bg-g7 text-g1" : "bg-g1 text-g7",
                ),
                "data-component-name": "global-nav",
                children: [
                  e.props.hasAllEditionsDropdown
                    ? n("li", {
                        class: "w-full",
                        children: n(qe, {
                          locale: e.props.locale,
                          currentEdition: e.props.currentEdition,
                          class: S(
                            "mobileNavItem text-label-menu border-t",
                            e.props.theme === "dark" ? "border-g6" : "border-g3",
                          ),
                          dropdownId: "mobile-all-editions-dropdown",
                          isMenuOpen: e.props.isMenuOpen,
                          isOpen: e.props.isAllEditionsDropdownOpen,
                          theme: e.props.iconTheme,
                          setIsOpen: e.props.setIsAllEditionsDropdownOpen,
                          dropdownItems: e.props.allEditionsDropdownItems,
                          buttonProps: e.props.allEditionsButton,
                        }),
                      })
                    : null,
                  n("li", { class: "w-full", children: e.props.search }),
                  n("li", {
                    class: "w-full",
                    children: n(U, {
                      ...e.props.shopifyButton,
                      class: S(
                        "mobileNavItem text-label-menu border-b-0",
                        e.props.theme === "dark" ? "border-g6" : "border-g3",
                      ),
                      children: [
                        e.props.shopifyButton.children,
                        d ? n(H, { name: d, theme: e.props.iconTheme }) : null,
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
  );
}
function Rt(e) {
  return () =>
    n("a", {
      class: S(
        "-translate-y-full absolute z-10 flex h-full px-20 items-center no-underline rounded-t-none top-0 transition-all focus-visible:translate-y-0 focus-ring",
        "bg-g1 text-g7 text-body-lg",
      ),
      href: e.props.href,
      "data-rmx-document": "",
      children: e.props.label,
    });
}
const Pt = (e) =>
    Object.keys(e)
      .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
      .join("&"),
  $t = ({ canonicalUrl: e, locale: t = "en", language: s = "EN", handle: o = {}, signUpTypes: r = [] }) => {
    if (o?.signupUrl) return o.signupUrl;
    const a = { ...o, locale: t, language: s, signup_page: e, itcat: "editions" };
    let p = Pt(a);
    return (
      new URLSearchParams(e).getAll("signup_types[]").forEach((c) => {
        p += `&signup_types[]=${encodeURIComponent(c)}`;
      }),
      (o?.signupTypes || []).concat(r).forEach((c) => {
        p += `&signup_types[]=${encodeURIComponent(c)}`;
      }),
      `${et}?${p}`
    );
  };
function Bt(e, t, s, o) {
  const r = s
    ? {
        as: "a",
        href: s.href,
        mix: o,
        children: s.label,
        "data-component-name": s.dataComponentName || "contact-cta",
      }
    : {
        as: "a",
        href: $t({ ...e, language: e.language.toLowerCase() }),
        mix: o,
        children: t.nav?.navButtonGroups?.freeTrial || "Start free trial",
        "data-component-name": "start-free-trial",
      };
  return {
    skipLink: { href: "#featured", label: t.skipLink?.label || "Skip to main content" },
    allEditionsButton: {
      as: "button",
      children: t.nav?.navButtonGroups?.allEditions || "All Editions",
      "data-component-name": "all-editions-dropdown",
    },
    shopifyButton: {
      as: "a",
      href: `${L}/${e.localeShopifyDotCom || ""}`,
      target: "_blank",
      mix: o,
      children: "Shopify.com",
      "data-component-name": "shopify-com",
    },
    freeTrialLink: r,
  };
}
const Ke = { locale: "en", language: "EN", canonicalUrl: "", localeShopifyDotCom: "" };
function Ut(e, t, s) {
  const o = t || (e === "dark" ? "bg-g7" : "bg-g1"),
    r = s || (e === "dark" ? "text-g1" : "text-g7");
  return {
    base: S(e === "dark" ? "navDark" : "navLight", o, r),
    mobileMenu: S(
      "@container global-lg:hidden fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none flex-col overflow-hidden border-0 p-0 open:flex",
      o,
      r,
    ),
  };
}
function _t(e, t, s = !0) {
  const o = e && e !== "en" ? `${e}/` : "",
    r = (c) => `${tt}/${o}editions/${c}`;
  if (!t) return { predictive: r("predictive-search"), results: [r("search")] };
  const a = o ? `/${o.replace(/\/$/, "")}` : "",
    p = `/${t}`.replace(/^\/+/, "../shop/").replace(/\/+$/, ""),
    l = (c) => `${a}${p}/${c}`;
  return { predictive: l("predictive-search"), results: [l("search"), ...(s ? [r("search")] : [])] };
}
function be(e) {
  const t = e.localeSettings ?? Ke;
  return {
    currentEdition: e.currentEdition,
    searchEdition: e.editionForSearch ?? e.currentEdition,
    locale: t.localeShopifyDotCom,
    endpoints: e.searchEndpoints ?? _t(t.localeShopifyDotCom, e.localSearchPath, e.includePublicSearch),
    initialQuery: e.searchQuery,
    searchResultEditionKeys: e.searchResultEditionKeys,
  };
}
function qt(e) {
  const t = be(e.props),
    s = new wt(t);
  let o = oe(t),
    r = e.props.navSettings.isMenuOpen,
    a = !1,
    p = !1,
    l = !0,
    c;
  const i = () => (e.props.navSettings.onMenuChange ? e.props.navSettings.isMenuOpen : r),
    u = (d) => {
      e.props.navSettings.onMenuChange ? e.props.navSettings.onMenuChange(d) : ((r = d), e.update());
    },
    f = () => {
      (p = !1), i() && u(!1);
    },
    h = (d) => document.querySelector(`#${d}-search-button`),
    g = (d) => {
      e.props.navSettings.onSearchShortcutOpen?.(), s.open(d, h(d));
    },
    x = () => {
      if (p) return;
      a && ((a = !1), e.update());
      const d = matchMedia("(max-width: 939px)").matches ? "mobile" : "desktop";
      if (d === "mobile" && !i()) {
        (p = !0), u(!0);
        return;
      }
      g(d);
    };
  return (
    e.props.searchQuery &&
      e.queueTask(() => {
        matchMedia("(max-width: 939px)").matches && !i() && u(!0);
      }),
    e.queueTask(() => {
      document.addEventListener(
        "click",
        (d) => {
          if (!a) return;
          const m = d.target;
          (m instanceof Element && m.closest(".all-editions-dropdown-picker")) || ((a = !1), e.update());
        },
        { signal: e.signal },
      ),
        document.addEventListener(
          "keydown",
          (d) => {
            if ((c.removeAttribute("data-pointer-focus"), d.key !== "Escape" || !a)) return;
            const m = document.activeElement?.closest(".all-editions-dropdown-picker");
            d.preventDefault(),
              d.stopPropagation(),
              (a = !1),
              e.update().then(() => {
                m?.querySelector("button")?.focus();
              });
          },
          { signal: e.signal },
        ),
        window.addEventListener(
          "hashchange",
          () => {
            !a || !window.location.hash || ((a = !1), e.update());
          },
          { signal: e.signal },
        );
    }),
    () => {
      const d = be(e.props),
        m = oe(d);
      m !== o &&
        e.queueTask(async (k) => {
          k.aborted ||
            m !== oe(be(e.props)) ||
            ((o = m),
            d.initialQuery && matchMedia("(max-width: 939px)").matches && !i() && u(!0),
            await s.reconfigure(d));
        });
      const E = e.props.localeSettings ?? Ke,
        v = e.props.theme ?? "dark",
        P = v === "dark" ? j.White : j.Black,
        O = Ut(v, e.props.backgroundClassName, e.props.textClassName),
        N = Bt(E, e.props.translations, e.props.ctaOverride, e.props.linkMix),
        D = E.localeShopifyDotCom,
        R = i();
      p &&
        R &&
        ((p = !1),
        e.queueTask((k) => {
          if (k.aborted) return;
          const Q = matchMedia("(max-width: 939px)").matches ? "mobile" : "desktop";
          Q === "mobile" && i() ? g(Q) : Q === "desktop" && (i() && u(!1), g(Q));
        }));
      const $ = (k) => {
          (a = k), e.update();
        },
        _ = n(Ce, {
          class: v === "dark" ? "border-g6" : "border-g3",
          controller: s,
          currentEdition: e.props.currentEdition,
          idPrefix: "desktop-search",
          isMobileNavOpen: R,
          locale: D,
          onResultClick: f,
          onShortcutOpen: x,
          ownsGlobalEvents: !0,
          searchResultEditionKeys: e.props.searchResultEditionKeys,
          surface: "desktop",
          theme: P,
        }),
        y = n(Ce, {
          class: v === "dark" ? "border-g6" : "border-g3",
          controller: s,
          currentEdition: e.props.currentEdition,
          idPrefix: "mobile-search",
          isMobileNavOpen: R,
          locale: D,
          onResultClick: f,
          searchResultEditionKeys: e.props.searchResultEditionKeys,
          surface: "mobile",
          theme: P,
        }),
        q = n(Ot, {
          to: de({
            baseUrl: "",
            locale: D,
            path:
              (Object.values(M).includes(e.props.currentEdition)
                ? it(e.props.currentEdition)?.path
                : `editions/${e.props.currentEdition}`) || "",
          }),
          onClick: e.props.navSettings.titleClickCallback,
          translations: e.props.translations,
          currentEdition: e.props.currentEdition,
          hasBagSvg: e.props.hasLogoBagSvg ?? !0,
          itemClassName: e.props.itemClassName,
        });
      return n(De, {
        value: e.props.translations,
        children: n("header", {
          mix: [
            re((k) => (c = k)),
            w("pointerdown", () => {
              c.setAttribute("data-pointer-focus", "");
            }),
          ],
          class: W(
            "antialiased relative transition-[background-color] duration-500",
            O.base,
            e.props.class,
            e.props.className,
            'max-[430px]:[html[lang="fr"]_&_a[data-component-name="start-free-trial"]]:w-115!',
          ),
          children: n("nav", {
            class: S(
              "max-w-1680 flex items-center mx-auto px-10 global-sm:px-20 py-10 global-lg:px-12 global-lg:py-8 h-60 global-lg:h-50",
              e.props.navSettings.enableProgressIndicator && "progress-bar",
            ),
            children: [
              n(Rt, { href: e.props.skipLinkHref || N.skipLink.href, label: N.skipLink.label }),
              q,
              n(At, {
                allEditionsButton: N.allEditionsButton,
                search: _,
                searchController: s,
                locale: D,
                currentEdition: e.props.currentEdition,
                isMenuOpen: R,
                isAllEditionsDropdownOpen: a,
                setIsAllEditionsDropdownOpen: $,
                hasAllEditionsDropdown: e.props.hasAllEditionsDropdown ?? !0,
                iconTheme: P,
                itemClassName: e.props.itemClassName,
                allEditionsDropdownItems: e.props.allEditionsDropdownItems,
              }),
              n(Ct, {
                desktopActions: e.props.navSettings.desktopActions,
                shopifyButton: N.shopifyButton,
                freeTrialLink: N.freeTrialLink,
                isMenuOpen: R,
                onMenuToggle: (k) => {
                  (p = !1), (l = k.detail === 0), u(!i());
                },
                searchController: s,
                theme: v,
                itemClassName: e.props.itemClassName,
              }),
              n(Dt, {
                class: W(O.mobileMenu, e.props.navSettings.mobileMenuClassName),
                logo: q,
                onClose: f,
                onShownChange: e.props.navSettings.onMenuShownChange,
                focusCloseOnOpen: l,
                allEditionsButton: N.allEditionsButton,
                locale: D,
                currentEdition: e.props.currentEdition,
                isMenuOpen: R,
                isAllEditionsDropdownOpen: a,
                theme: v,
                iconTheme: P,
                freeTrialLink: N.freeTrialLink,
                shopifyButton: N.shopifyButton,
                search: y,
                setIsAllEditionsDropdownOpen: $,
                mobileMenu: e.props.navSettings.mobileMenu,
                hasAllEditionsDropdown: e.props.hasAllEditionsDropdown ?? !0,
                allEditionsDropdownItems: e.props.allEditionsDropdownItems,
              }),
            ],
          }),
        }),
      });
    }
  );
}
const Kt = '"Sohne Mono", ui-monospace, monospace',
  xe = { alpha: 0.65, width: 0.75 },
  G = { width: 1.25, segments: 6, tail: 72 },
  F = 8,
  ue = 16,
  te = 220,
  ve = 240,
  Wt = 46,
  Me = 220,
  Ht = 520,
  se = "cubic-bezier(0.33, 1, 0.68, 1)",
  K = (e) => Math.min(1, Math.max(0, e)),
  Z = (e, t, s) => e + (t - e) * s,
  Le = (e) => (e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2),
  jt = (e) => (e < 0.5 ? Math.cbrt(e / 4) : 1 - Math.cbrt(2 * (1 - e)) / 2),
  Ae = (e) => String(e).padStart(2, "0"),
  zt = (e, t) => {
    const s = document.createElement("canvas"),
      o = s.getContext("2d");
    if (!o) return s;
    const r = `12px ${Kt}`;
    return (
      (o.font = r),
      (s.width = Math.ceil(o.measureText(e).width + 1) * t),
      (s.height = ue * t),
      o.scale(t, t),
      (o.font = r),
      (o.fillStyle = "#fff"),
      (o.textBaseline = "bottom"),
      o.fillText(e, 0, ue),
      s
    );
  },
  Ft = (e, t, s, o) => {
    let r = 0,
      a = !1;
    for (let p = t.length - 1; p > 0 && r < o; p--) {
      const l = t[p],
        c = t[p - 1],
        i = Math.hypot(c.x - l.x, c.y - l.y),
        u = Math.max(s, r),
        f = Math.min(o, r + i);
      if (i && f > u) {
        const h = (u - r) / i,
          g = (f - r) / i;
        a || e.moveTo(Z(l.x, c.x, h), Z(l.y, c.y, h)), e.lineTo(Z(l.x, c.x, g), Z(l.y, c.y, g)), (a = !0);
      }
      r += i;
    }
  },
  Qt = (e, t) => {
    if (!t.length) return;
    const s = G.tail / G.segments;
    e.lineWidth = G.width;
    for (let o = 0; o < G.segments; o++) {
      (e.globalAlpha = 1 - o / G.segments), e.beginPath();
      for (const r of t) Ft(e, r, o * s, (o + 1) * s);
      e.stroke();
    }
    e.lineWidth = xe.width;
  },
  Vt = (e, t, s, o, r) => {
    const a = e.querySelectorAll("[data-mobile-navigation-title]"),
      p = e.querySelectorAll("[data-mobile-navigation-branch]"),
      l = e.querySelector("[data-mobile-navigation-dot]");
    if (!a.length || !l) return;
    const c = e.getBoundingClientRect(),
      i = c.left + e.clientLeft,
      u = c.top + e.clientTop,
      f = e.clientWidth,
      h = getComputedStyle(e).backgroundColor,
      g = l.getBoundingClientRect(),
      x = g.width / 2,
      d = { x: g.left + x - i, y: g.top + g.height / 2 - u },
      m = Math.round(d.y) + 0.5,
      E = [...a]
        .map((b, I) => {
          const C = b.getBoundingClientRect(),
            B = { x: C.right - 8 - i, y: C.top + C.height / 2 - u };
          return { title: b, branch: p[I], landing: B };
        })
        .sort((b, I) => Math.abs(b.landing.y - m) - Math.abs(I.landing.y - m) || b.landing.y - I.landing.y)
        .map((b, I) => {
          const C = te - 40 + I * Wt,
            B = 70 + Math.sqrt(Math.abs(b.landing.y - m)) * 9;
          return { ...b, leave: C, drop: B, land: C + ve + B };
        }),
      v = Math.max(te, ...E.map(({ land: b }) => b)),
      P = v + 440,
      O = v + Me + Ht,
      N = E.map(({ landing: b }) => b.y),
      D = Math.max(0, Math.floor(Math.min(m, ...N) - 24)),
      R = Math.min(e.clientHeight, Math.ceil(Math.max(m, ...N) + 24)) - D,
      $ = Math.min(2, devicePixelRatio || 1),
      _ = document.createElement("canvas");
    _.setAttribute("aria-hidden", "true"),
      (_.width = Math.round(f * $)),
      (_.height = Math.round(R * $)),
      (_.style.cssText = `position:absolute;left:0;top:${D}px;width:${f}px;height:${R}px;z-index:1;pointer-events:none`);
    const y = _.getContext("2d");
    if (!y) return;
    y.setTransform($, 0, 0, $, 0, -D * $), (y.strokeStyle = y.fillStyle = "#fff");
    const q = document.createElement("div");
    q.setAttribute("aria-hidden", "true"),
      (q.style.cssText = `position:absolute;inset:0;z-index:-1;pointer-events:none;background:${h}`),
      (e.style.backgroundColor = "transparent"),
      e.append(q, _),
      r.push(q, _);
    const k = (b, I, C) => {
      if (!b) return;
      const B = b.animate(I, { fill: "backwards", ...C });
      (B.startTime = s), o.push(B);
    };
    k(q, { opacity: [0, 1] }, { duration: 240, easing: se }),
      k(
        e.querySelector(":scope > div:first-child > button"),
        { opacity: [0, 1] },
        { delay: 160, duration: 220, easing: se },
      ),
      k(t, { opacity: [0, 0] }, { duration: O }),
      k(l, { opacity: [0, 0] }, { duration: jt(K(d.x / f)) * te }),
      k(
        e.querySelector('[data-component-name="global-nav"]'),
        { opacity: [0, 1] },
        { delay: O - 360, duration: 300, easing: se },
      );
    for (const { title: b, branch: I, land: C } of E)
      k(
        b,
        { clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0%)"] },
        { delay: C + 40, duration: Me, easing: se },
      ),
        k(
          I?.querySelector("[data-mobile-navigation-tether]"),
          { strokeDasharray: ["1 1", "1 1"], strokeDashoffset: [1, 0] },
          { delay: C + 120, duration: 300, easing: se },
        ),
        k(
          I?.querySelector("[data-mobile-navigation-flows]"),
          { opacity: [0, 1] },
          { delay: C + 360, duration: 300 },
        );
    const Q = Ae(E.length),
      We = [],
      ne = d.x + x;
    let we = !1;
    return (b) => {
      if (b >= P) return we || y.clearRect(0, D, f, R), (we = !0), b < O;
      y.clearRect(0, D, f, R);
      const I = f * Le(K(b / te));
      (y.globalAlpha = xe.alpha * (1 - K((b - v - 120) / 320))),
        (y.lineWidth = xe.width),
        y.beginPath(),
        y.moveTo(0, m),
        y.lineTo(Math.min(I, d.x - x), m),
        I > ne && (y.moveTo(ne, m), y.lineTo(I, m)),
        y.stroke();
      let C = 0;
      const B = [],
        Ee = [];
      for (const { landing: T, leave: fe, drop: X, land: ie } of E) {
        const V = b - fe;
        if (V <= 0) continue;
        const He = Le(K(V / ve)),
          ge = K((V - ve) / X),
          ee = b - ie;
        let ae = Z(ne + F / 2 + 1, T.x, He),
          he = Z(m, T.y, ge * ge);
        ee > 0
          ? (C++,
            (ae = T.x),
            (he =
              T.y + Math.sign(m - T.y) * 5 * Math.exp(-ee / 70) * Math.abs(Math.sin((ee / 150) * Math.PI))))
          : B.push(
              ge > 0
                ? [
                    { x: T.x - G.tail, y: m },
                    { x: T.x, y: m },
                    { x: ae, y: he },
                  ]
                : [
                    { x: ne, y: m },
                    { x: ae, y: m },
                  ],
            ),
          ee < 210 && Ee.push({ x: ae, y: he, since: ee });
      }
      Qt(y, B);
      for (const { x: T, y: fe, since: X } of Ee) {
        y.globalAlpha = 1 - K((X - 90) / 120);
        const ie = Math.round(T - F / 2),
          V = Math.round(fe - F / 2);
        X > 0 && X < 90 ? y.fillRect(ie, V, F, F) : y.strokeRect(ie + 0.5, V + 0.5, F - 1, F - 1);
      }
      if (((y.globalAlpha = 0.85 * K((b - te) / 120) * (1 - K((b - v - 200) / 200))), y.globalAlpha > 0)) {
        const T = (We[C] ??= zt(`${Ae(C)} / ${Q}`, $));
        y.drawImage(T, d.x + 12, m - 6 - ue, T.width / $, ue);
      }
      return !0;
    };
  },
  Gt = (e, t, s) => {
    const o = e.querySelector("[data-mobile-menu-scrollport]"),
      r = [...e.querySelectorAll("[data-mobile-menu-scrollport] > *")].map((g) => ({
        element: g,
        wasInert: g.inert,
      })),
      a = [],
      p = [];
    let l,
      c = 0,
      i = !1;
    e.style.opacity = "0";
    for (const { element: g } of r) g.inert = !0;
    const u = () => {
        f(), o?.removeEventListener("scroll", u), e.removeEventListener("keydown", h);
        for (const { element: g, wasInert: x } of r) g.inert = x;
        for (const g of a) g.cancel();
        for (const g of p) g.remove();
        e.style.removeProperty("opacity"), e.style.removeProperty("background-color");
      },
      f = Ye(
        (g) => {
          if (!l) {
            if (!i) {
              i = !0;
              return;
            }
            if (((c = g), (l = Vt(e, t, c, a, p)), e.style.removeProperty("opacity"), !l)) return u();
          }
          l(g - c) || u();
        },
        { signal: s },
      ),
      h = (g) => {
        g.key === "Tab" && u();
      };
    return o?.addEventListener("scroll", u, { passive: !0 }), e.addEventListener("keydown", h), u;
  };
function Zt(e, t, s) {
  const o = matchMedia("(prefers-reduced-motion: reduce)");
  let r;
  const a = () => {
    r?.(), (r = void 0);
  };
  return (
    e.addEventListener(
      "beforetoggle",
      (p) => {
        p.newState === "open" && (a(), o.matches || (r = Gt(e, t, s)));
      },
      { signal: s },
    ),
    e.addEventListener(
      "toggle",
      (p) => {
        p.newState === "closed" && a();
      },
      { signal: s },
    ),
    s.addEventListener("abort", a, { once: !0 }),
    a
  );
}
const Te = "--f26-menu-background";
function Yt(e) {
  return e.closest("[data-f26-page]")
    ? document.body.style.backgroundColor || getComputedStyle(document.body).backgroundColor
    : "";
}
const vs = Xe(import.meta.url + "#FallNavigation", function (t) {
  let s = !1,
    o,
    r;
  const a = new Map(),
    p = (l) => {
      if ((Ve.set(l), document.documentElement.toggleAttribute("data-f26-menu-open", l), l)) {
        const c = document.getElementById("mobile-menu");
        for (const i of document.querySelectorAll("main, footer"))
          i.contains(c) ||
            a.has(i) ||
            (a.set(i, i.getAttribute("aria-hidden")), i.setAttribute("aria-hidden", "true"));
      } else {
        for (const [c, i] of a)
          i === null ? c.removeAttribute("aria-hidden") : c.setAttribute("aria-hidden", i);
        a.clear();
      }
    };
  return (
    t.queueTask(() => {
      const l = document.getElementById("mobile-menu"),
        c = document.querySelector('.fall-navigation button[aria-controls="mobile-menu"]');
      l &&
        !t.signal.aborted &&
        (Ge(l, "data-f26-menu", { "data-closing": "closing" }, t.signal),
        t.signal.addEventListener(
          "abort",
          () => document.documentElement.removeAttribute("data-f26-menu-open"),
          { once: !0 },
        ),
        (r = Zt(l, c, t.signal)));
    }),
    () => {
      const l = je(t.props.locale),
        c = l.pathPrefix,
        i = t.props.navigationProps;
      return n(qt, {
        class:
          "fall-navigation fixed inset-x-0 top-0 z-40 transition-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-current/5 [&>nav]:max-w-none",
        backgroundClassName: "bg-nav-background",
        textClassName: "text-nav-foreground",
        currentEdition: Se,
        localeSettings: {
          locale: l.localeSignUp,
          language: l.language,
          canonicalUrl: "",
          localeShopifyDotCom: c,
        },
        navSettings: {
          isMenuOpen: s,
          onMenuShownChange: p,
          onSearchShortcutOpen: () => r?.(),
          mobileMenuClassName: "bg-nav-menu text-white backdrop:bg-nav-menu",
          mobileMenu: n(Je, {
            label: t.props.sectionsLabel,
            sections: t.props.sections ?? [],
            activeHref: o ? `#${o}` : void 0,
          }),
          onMenuChange: (u) => {
            if (u !== s) {
              if (u) {
                const f = (t.props.sections ?? []).flatMap((x) => {
                  const d = document.getElementById(x.handle);
                  return d ? [d] : [];
                });
                o = Ze(f, Fe);
                const h = document.getElementById("mobile-menu"),
                  g = h && Yt(h);
                h && g ? h.style.setProperty(Te, g) : h?.style.removeProperty(Te);
              }
              (s = u), t.update();
            }
          },
        },
        searchQuery: t.props.searchQuery,
        skipLinkHref: t.props.skipLinkHref,
        translations: i.globalStrings,
        allEditionsDropdownItems: i.allEditionsDropdownItems,
        linkMix: [Qe()],
        localSearchPath: "editions/fall2026",
        includePublicSearch: !0,
        searchResultEditionKeys: [Se, ...i.searchResultEditionKeys],
        theme: "light",
      });
    }
  );
});
export { vs as FallNavigation };
