import { c as M } from "./client-entries-B1h-jQ5r.js";
import { r as F } from "./ref-mixin-D6m2Cu20.js";
import { j as L } from "./jsx-CLqwgotn.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const R = 2,
  N = 60,
  k = M(import.meta.url + "#RelatedUpdatesMotion", function () {
    const p = F((A, a) => {
      const t = A.closest(".related-updates");
      if (!t) return;
      const b = t.ownerDocument,
        s = t.closest(".content-rail-item"),
        e = s ?? t,
        h = t.closest(".content-rail-surface") ?? t,
        c = () => (s ? s.dataset.hoverIntent === "true" : t.matches(":hover"));
      let o = 0;
      const i = () => {
          cancelAnimationFrame(o), (o = 0), t.removeAttribute("data-folded");
        },
        d = () => {
          if (o || t.hasAttribute("data-folded")) return;
          let n = Number.NaN,
            r = 0,
            E = 0;
          const u = () => {
            const v = h.getBoundingClientRect().left;
            (r = Math.abs(v - n) < 0.5 ? r + 1 : 0),
              (n = v),
              r >= R || ++E > N
                ? ((o = 0), t.setAttribute("data-folded", ""))
                : (o = requestAnimationFrame(u));
          };
          o = requestAnimationFrame(u);
        },
        l = (n) => {
          const r = n.relatedTarget;
          return !(r instanceof Node && e.contains(r));
        },
        m = () => {
          e.contains(b.activeElement) || i();
        };
      s ||
        (e.addEventListener("pointerenter", d, { signal: a }),
        e.addEventListener("pointerleave", m, { signal: a })),
        e.addEventListener(
          "focusin",
          (n) => {
            l(n) && d();
          },
          { signal: a },
        ),
        e.addEventListener(
          "focusout",
          (n) => {
            l(n) && !c() && i();
          },
          { signal: a },
        );
      const f = new MutationObserver(() => {
        e.hasAttribute("data-dismissed") ? i() : c() ? d() : m();
      });
      f.observe(e, { attributeFilter: ["data-dismissed", "data-hover-intent"] }),
        a.addEventListener(
          "abort",
          () => {
            f.disconnect(), cancelAnimationFrame(o), t.removeAttribute("data-folded");
          },
          { once: !0 },
        );
    });
    return () => L("span", { hidden: !0, mix: p });
  });
export { k as RelatedUpdatesMotion };
