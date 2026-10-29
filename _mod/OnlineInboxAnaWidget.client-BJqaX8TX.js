import { w as qe } from "./runtime-CljIenoa.js";
import { g as Oe, f as Te } from "./formatCopy-Cs7MVtfe.js";
import "./frameLoop-CeLX9Qef.js";
import "./residentSections-BEssGc_p.js";
import "./colorPalette-VQpnhwit.js";
import "./locale-DXEWuBc6.js";
const Be = {
    description:
      "Ana, signed in with Shop, opens a chat with a store in Shopify Inbox. It greets her by name, knows her usual size, and she buys with Shop in one tap. Shoppers signed in with Shop who chat convert 1.5 times higher.",
    storeName: "Field Supply",
    storeInitial: "F",
    signedIn: "Signed in with {shop}",
    greeting: "Hi {name}, welcome back.",
    askFit: "Does the overshirt run big?",
    answerFit: "In your usual {size} it’s relaxed. Back in stock today.",
    askStock: "Is it back in stock?",
    answerStock: "It is, in your usual {size}. Just landed.",
    product: "Linen overshirt",
    productDetails: "{size} · {price}",
    buy: "Buy with {shop}",
    paid: "Paid ✓",
    checkoutDetails: "{address} · {card}",
    thanks: "Thanks, {name}. Arriving Thursday.",
    guest: "Guest",
    withShop: "With Shop",
    multiplier: "{value}x",
    knownDetails: "{name} · {size} · {address} · {card}",
    name: "Ana",
    size: "M",
    address: "14 Elm St",
    card: "•• 4242",
  },
  Re = 92,
  We = 1.5;
function Xe(c, p = "en") {
  const a = { ...Be, ...c },
    d = Oe(p),
    I = new Intl.NumberFormat(d, { maximumFractionDigits: 1 }),
    m = new Intl.NumberFormat(d, { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
    N = (g) => Te(a.multiplier, { value: I.format(g) });
  return {
    ...a,
    price: m.format(Re),
    guestValue: N(1),
    shopValue: N(We),
    replies: [
      { ask: a.askFit, answer: a.answerFit },
      { ask: a.askStock, answer: a.answerStock },
    ],
  };
}
const se = {
    url: "https://cdn.shopify.com/s/files/1/0762/1885/9705/files/ana-pink.png?v=1792631126",
    w: 282,
    h: 238,
  },
  je = {
    phone: { x: 4, y: 4, w: 73, h: 228, anchorX: 41 },
    wave: { x: 85, y: 4, w: 93, h: 230, anchorX: 38.2 },
    paid: { x: 186, y: 4, w: 88, h: 230, anchorX: 50 },
  },
  H = 0.57,
  xe = 7,
  Ge = 5.5,
  Se = { reply: 2.3, buy: 2.1 },
  Ke = 0.9,
  Ee = 0.5,
  Ae = 1.5,
  Ue = { rest: { left: 58, top: 50 }, done: { left: 20, top: 9 } },
  K = "http://www.w3.org/2000/svg",
  Je =
    "M9.29 14.07c-3.13-.67-4.53-.94-4.53-2.15q0-1.7 2.83-1.7a4.2 4.2 0 0 1 3.78 2.15c.06.11.2.15.32.09l3.52-1.78a.25.25 0 0 0 .1-.34C13.85 7.8 11.15 6.42 7.6 6.42c-4.7 0-7.6 2.3-7.6 5.96 0 3.88 3.54 4.86 6.68 5.54s4.54.95 4.54 2.15q0 1.79-3.06 1.78a4.3 4.3 0 0 1-4.12-2.53.25.25 0 0 0-.34-.11L.2 20.95a.25.25 0 0 0-.11.34c1.4 2.8 4.26 4.37 8.08 4.37 4.88 0 7.82-2.26 7.82-6.03s-3.56-4.87-6.69-5.55m18.9-7.66c-2 0-3.78.7-5.05 1.96a.12.12 0 0 1-.2-.08V.25a.25.25 0 0 0-.26-.25h-4.4a.25.25 0 0 0-.26.25v24.97q.02.23.25.25h4.41q.23-.01.25-.25V14.27a3.7 3.7 0 0 1 3.82-3.74 3.64 3.64 0 0 1 3.77 3.74v10.95q.02.23.25.25h4.41q.23-.01.25-.25V14.27c0-4.6-3.02-7.85-7.25-7.85M44.4 5.7c-2.4 0-4.64.73-6.26 1.79a.25.25 0 0 0-.08.33l1.95 3.32c.07.12.22.16.34.09a8 8 0 0 1 4.05-1.11c3.86 0 6.69 2.71 6.69 6.3a5.14 5.14 0 0 1-5.14 5.32c-2.34 0-3.97-1.36-3.97-3.29 0-1.1.47-2 1.69-2.64a.24.24 0 0 0 .1-.34l-1.84-3.1a.25.25 0 0 0-.3-.1 6.3 6.3 0 0 0-4.18 6.04c0 4.45 3.55 7.77 8.5 7.77 5.77 0 9.93-4 9.93-9.74 0-6.15-4.84-10.64-11.48-10.64m24.39.68c-2.23 0-4.23.82-5.68 2.27a.12.12 0 0 1-.21-.09V6.82a.25.25 0 0 0-.25-.25h-4.3a.25.25 0 0 0-.25.25v24.94c0 .13.1.24.25.24h4.41q.23-.02.25-.24v-8.18c0-.11.13-.17.21-.1a8 8 0 0 0 5.57 2.14c5.18 0 9.21-4.18 9.21-9.62s-4.04-9.62-9.21-9.62m-.84 15.02c-2.94 0-5.17-2.34-5.17-5.43 0-3.1 2.23-5.44 5.17-5.44 2.95 0 5.18 2.3 5.18 5.44 0 3.13-2.2 5.43-5.18 5.43",
  s = (c, p = "", a) => {
    const d = document.createElement(c);
    return p && (d.className = p), a !== void 0 && (d.textContent = a), d;
  },
  x = (c) => (c.setAttribute("aria-hidden", "true"), c),
  Ye = () => {
    const c = document.createElementNS(K, "svg");
    c.setAttribute("viewBox", "0 0 78 32"),
      c.setAttribute("class", "ana-shoplogo"),
      c.setAttribute("role", "img"),
      c.setAttribute("aria-label", "Shop");
    const p = document.createElementNS(K, "path");
    return p.setAttribute("d", Je), p.setAttribute("fill", "currentColor"), c.append(p), c;
  },
  $e = () => {
    const c = s("span", "ana-dots");
    return c.append(s("i"), s("i"), s("i")), c;
  },
  Ze = () => {
    const c = x(document.createElementNS(K, "svg"));
    c.setAttribute("viewBox", "0 0 24 24");
    const p = [
      {
        d: "M8 4.5l4 1.8 4-1.8 4.2 3.4-2.4 2.6-1.6-1.2V20H7.8V9.3L6.2 10.5 3.8 7.9z",
        fill: "none",
        "stroke-linejoin": "round",
      },
      { d: "M12 6.3V20M10.4 9h.01M10.4 12h.01M10.4 15h.01", "stroke-linecap": "round" },
    ];
    for (const a of p) {
      const d = document.createElementNS(K, "path");
      for (const [I, m] of Object.entries({ stroke: "currentColor", "stroke-width": "1", ...a }))
        d.setAttribute(I, m);
      c.append(d);
    }
    return c;
  },
  it = (c, p) => {
    const a = Xe(p?.strings, p?.locale),
      d = qe(c),
      I = c.ownerDocument,
      m = (e) => {
        const t = s("u", e === "card" ? "ana-known is-card" : "ana-known", a[e]);
        return (t.dataset.known = e), t;
      },
      N = {
        name: () => m("name"),
        size: () => m("size"),
        address: () => m("address"),
        card: () => m("card"),
        shop: Ye,
        price: () => a.price,
      },
      g = (e, t) => {
        for (const i of t.split(/(\{\w+\})/)) {
          const n = /^\{(\w+)\}$/.exec(i)?.[1];
          n && N[n] ? e.append(N[n]()) : i && e.append(i);
        }
        return e;
      },
      l = s("div", "ana");
    l.style.setProperty("--ana-ink", d.surface),
      l.style.setProperty("--ana-dwell", `${Ke}s`),
      (l.tabIndex = 0),
      l.setAttribute("role", "group"),
      l.setAttribute("aria-label", a.description);
    const ne = x(s("div", "ana-figure")),
      w = s("div", "ana-sprite");
    (w.style.backgroundImage = `url("${se.url}")`),
      (w.style.backgroundSize = `${se.w * H}px ${se.h * H}px`),
      ne.append(s("div", "ana-shadow"), w);
    const C = (e) => {
      const t = je[e];
      (w.style.width = `${t.w * H}px`),
        (w.style.height = `${t.h * H}px`),
        (w.style.marginLeft = `${-t.anchorX * H}px`),
        (w.style.backgroundPosition = `${-t.x * H}px ${-t.y * H}px`),
        (w.dataset.pose = e);
    };
    C("phone");
    const P = x(s("div", "ana-peek"));
    P.append(s("span", "ana-avatar", a.storeInitial), $e(), s("span", "ana-peek__paid", a.paid));
    const f = s("div", "ana-app");
    f.inert = !0;
    const M = s("div", "ana-head"),
      ae = s("div", "ana-head__who");
    ae.append(s("b", "", a.storeName));
    const ie = g(s("span", "ana-shop"), a.signedIn);
    M.append(x(s("span", "ana-avatar", a.storeInitial)), ae, ie);
    const oe = s("div", "ana-thread"),
      S = s("div", "ana-flow");
    oe.append(S), f.append(M, oe);
    const re = (e, t, i) => {
        const n = s("div", `ana-bar ${t}`),
          o = s("div", "ana-bar__line");
        return (
          o.append(s("span", "ana-bar__fill"), s("span", "ana-bar__value", i)),
          n.append(s("span", "ana-bar__label", e), o),
          n
        );
      },
      V = g(s("div", "ana-why"), a.knownDetails),
      ce = x(s("div", "ana-result"));
    ce.append(re(a.guest, "is-guest", a.guestValue), re(a.withShop, "is-shop", a.shopValue), V),
      l.append(ce, ne, P, f),
      c.append(l);
    const le = () => {
        for (let e = xe; e >= Ge; e -= 0.25)
          if (((ie.style.fontSize = e === xe ? "" : `${e}px`), M.scrollWidth <= M.clientWidth)) return;
      },
      de = new ResizeObserver(le);
    de.observe(M),
      d.signal.addEventListener("abort", () => de.disconnect()),
      I.fonts.addEventListener("loadingdone", le, { signal: d.signal });
    let q = 0,
      E = new AbortController();
    const A = new Set(),
      pe = (e) => {
        e.owner.aborted || (A.add(e), we.wake());
      },
      k = (e, t, i = E.signal) => pe({ at: q + e, frames: 0, run: t, owner: i }),
      z = (e, t = 1) => pe({ at: q, frames: t, run: e, owner: E.signal }),
      _e = () => {
        for (const e of [...A])
          (!e.owner.aborted && ((e.frames > 0 && --e.frames > 0) || q < e.at)) ||
            (A.delete(e), e.owner.aborted || e.run());
      },
      U = (e, t, i, n) => {
        let o = !0;
        const r = () => {
          o && ((o = !1), n());
        };
        e.addEventListener(
          "transitionend",
          (h) => {
            h.target === e && h.propertyName === t && r();
          },
          { signal: E.signal },
        ),
          k(i, r);
      },
      O = (e) => {
        const t = I.activeElement;
        !(t instanceof HTMLElement) ||
          !e.contains(t) ||
          (t.matches(":focus-visible") ? l.focus({ preventScroll: !0 }) : t.blur());
      },
      T = (e, t) => g(s("div", `ana-msg ana-msg--${e}`), t),
      B = () => {
        const e = x(s("div", "ana-msg ana-msg--store ana-typing"));
        return e.append($e()), e;
      },
      J = (e) => x(g(s("span", "ana-fill"), e)),
      He = () => {
        const e = s("div", "ana-msg ana-msg--store ana-card"),
          t = s("div", "ana-card__thumb");
        t.append(Ze());
        const i = g(s("button", "ana-buy"), a.buy);
        (i.type = "button"), i.append(J(a.buy));
        const n = g(s("small", "ana-card__note"), a.checkoutDetails),
          o = s("div", "ana-card__body");
        return (
          o.append(s("b", "", a.product), g(s("small"), a.productDetails), i, n),
          e.append(t, o),
          { element: e, button: i, note: n }
        );
      };
    let Y;
    const ue = (e, t) => {
      const i = { signal: E.signal };
      e.addEventListener(
        "pointermove",
        () => {
          e.classList.contains("is-armed") && e.classList.add("is-hover");
        },
        i,
      ),
        e.addEventListener("pointerleave", () => e.classList.remove("is-hover"), i),
        e.addEventListener(
          "transitionend",
          (n) => {
            n.propertyName === "clip-path" && e.classList.contains("is-hover") && t();
          },
          i,
        ),
        e.addEventListener("click", t, i),
        k(Ee, () => e.classList.add("is-armed"));
    };
    let R;
    const v = (e) => {
        const t = R?.offsetHeight ?? 0;
        R?.remove(),
          (R = e.classList.contains("ana-typing") ? e : void 0),
          S.append(e),
          e.classList.add("is-growing"),
          (e.style.maxHeight = "none");
        const i = e.offsetHeight;
        (e.style.maxHeight = `${t}px`),
          e.offsetHeight,
          (e.style.maxHeight = `${i}px`),
          U(e, "max-height", 0.32, () => {
            (e.style.maxHeight = ""), e.classList.remove("is-growing");
          }),
          W(Math.max(0.01, i - t)),
          z(() => e.classList.add("is-in"), 2);
      },
      Z = () => M.offsetHeight + S.offsetHeight + 13,
      W = (e = 0) => {
        e && (f.style.height = `${Math.min(l.clientHeight - 8, Z() + e)}px`),
          z(() => {
            const t = l.clientHeight - 8,
              i = e ? Math.min(t + 1, Z() + e) : Z();
            if (((f.style.height = `${Math.min(t, i)}px`), i <= t)) return;
            const n = [...S.children].find((o) => !o.classList.contains("is-gone"));
            !(n instanceof HTMLElement) ||
              n === S.lastElementChild ||
              (O(n),
              (n.inert = !0),
              (n.style.maxHeight = `${n.offsetHeight}px`),
              n.classList.add("is-gone"),
              z(() => {
                n.style.maxHeight = "0px";
              }),
              U(n, "max-height", 0.27, () => {
                n.remove(), W();
              }));
          });
      };
    let X = 0,
      D = 0,
      u,
      Q = 0,
      $ = !1,
      L = !1,
      _ = !1,
      b = !1,
      j = 0;
    const G = new Set(),
      fe = () => {
        (u = void 0), X++, (D = 0);
      },
      Ie = () => {
        const e = s("div", "ana-chips"),
          t = (n) => {
            if (i.picked) return;
            (i.picked = !0), (Q = n);
            const o = [...e.children];
            o.forEach((r, h) => {
              r.setAttribute("aria-disabled", "true"), h !== n && (O(r), (r.inert = !0));
            }),
              o[n]?.classList.add("is-chosen", "is-hover"),
              e.classList.add("is-picked"),
              k(0.38, () => {
                const r = T("ana", a.replies[n].ask);
                r.classList.add("is-in", "is-instant"), O(e), e.replaceWith(r), W(), fe();
              });
          };
        a.replies.forEach(({ ask: n }, o) => {
          const r = s("button", "ana-chip");
          (r.type = "button"), r.append(n, J(n)), e.append(r), ue(r, () => t(o));
        });
        const i = {
          node: e,
          tap: e.firstElementChild,
          pick: () => t(0),
          auto: Se.reply,
          elapsed: 0,
          picked: !1,
          tapped: !1,
        };
        return v(e), i;
      },
      Ce = () => {
        const { button: e, note: t } = Y,
          i = () => {
            n.picked ||
              ((n.picked = !0),
              e.setAttribute("aria-disabled", "true"),
              e.classList.remove("is-hover"),
              e.classList.add("is-pressed"),
              k(0.16, () => {
                e.classList.remove("is-pressed"),
                  e.classList.add("is-paid"),
                  e.replaceChildren(a.paid, J(a.paid)),
                  t.classList.add("is-in");
              }),
              fe());
          },
          n = { node: e, tap: e, pick: i, auto: Se.buy, elapsed: 0, picked: !1, tapped: !1 };
        return ue(e, i), n;
      },
      Me = () => {
        const e = l.getBoundingClientRect(),
          t = e.width ? l.offsetWidth / e.width : 1,
          i = [...V.querySelectorAll("[data-known]")]
            .map((o, r) => {
              const h = o.dataset.known,
                y = [...S.querySelectorAll(`[data-known="${h}"]`)].find((te) => !te.closest(".is-gone"));
              if (!y) {
                o.classList.add("is-landed");
                return;
              }
              const F = x(m(h));
              return (
                F.classList.add("ana-fly"),
                { target: o, fly: F, i: r, from: y.getBoundingClientRect(), to: o.getBoundingClientRect() }
              );
            })
            .filter((o) => o !== void 0);
        for (const { fly: o, from: r, i: h } of i)
          (o.style.left = `${(r.left - e.left) * t}px`),
            (o.style.top = `${(r.top - e.top) * t}px`),
            (o.style.transitionDelay = `${320 + h * 70}ms`),
            l.append(o),
            G.add(o);
        const n = i.map(({ fly: o }) => o.getBoundingClientRect());
        i.forEach(({ target: o, fly: r, i: h, from: y, to: F }, te) => {
          const Le = n[te];
          (r.style.left = `${(y.left - e.left + y.left - Le.left) * t}px`),
            (r.style.top = `${(y.top - e.top + y.top - Le.top) * t}px`);
          const Pe = (F.left - y.left) * t,
            Ve = (F.top - y.top) * t + 2;
          z(() => {
            r.style.transform = `translate(${Pe}px, ${Ve}px)`;
          }, 2),
            U(r, "transform", 1.3 + h * 0.07, () => {
              o.classList.add("is-landed"), r.remove(), G.delete(r);
            });
        });
      },
      he = (e) => {
        const t = Ue[e];
        f.style.transformOrigin = `${t.left + P.offsetWidth / 2 - f.offsetLeft}px ${t.top + 8 - f.offsetTop}px`;
      },
      me = () => {
        $ ||
          L ||
          (($ = !0),
          l.classList.remove("is-about"),
          W(),
          z(() => {
            he("rest"), (f.inert = !1), l.classList.add("is-open");
          }));
      },
      ge = (e) => {
        e && Me(),
          he(e ? "done" : "rest"),
          O(f),
          (f.inert = !0),
          ($ = !1),
          l.classList.remove("is-open"),
          e && ((L = !0), l.classList.add("is-done"));
      },
      Ne = [
        { wait: 0.15, run: () => v(B()) },
        { wait: 1, run: () => v(T("store", a.greeting)) },
        { wait: 0.45, run: () => {} },
        { choose: Ie },
        { wait: 0.55, run: () => v(B()) },
        { wait: 1.05, run: () => v(T("store", a.replies[Q].answer)) },
        { wait: 0.7, run: () => v(B()) },
        {
          wait: 0.85,
          run: () => {
            (Y = He()), v(Y.element);
          },
        },
        { choose: Ce },
        { wait: 0.7, run: () => C("paid") },
        { wait: 0.45, run: () => v(B()) },
        { wait: 0.95, run: () => v(T("store", a.thanks)) },
        { wait: 1.8, run: () => ge(!0) },
      ],
      ze = (e) => e.matches(".is-hover, :focus-within") || e.querySelector(".is-hover") !== null,
      De = (e) => {
        const t = Ne[X];
        if (t) {
          if (!("choose" in t)) {
            (D += e), D >= t.wait && (t.run(), X++, (D = 0));
            return;
          }
          if (!u) {
            u = t.choose();
            return;
          }
          u.picked ||
            u.tapped ||
            ((u.elapsed += e),
            !(u.elapsed <= Ee + u.auto || ze(u.node)) &&
              ((u.tapped = !0), u.tap.classList.add("is-tap"), k(0.44, u.pick)));
        }
      },
      Fe = () => {
        C("paid"), (L = !0), l.classList.add("is-done");
        for (const e of V.querySelectorAll("[data-known]")) e.classList.add("is-landed");
      },
      ee = () => {
        E.abort(), (E = new AbortController());
        for (const e of A) e.owner.aborted && A.delete(e);
        ge(!1);
        for (const e of G) e.remove();
        G.clear(),
          S.replaceChildren(),
          (R = void 0),
          (f.style.height = ""),
          l.classList.remove("is-done", "is-about");
        for (const e of V.querySelectorAll(".is-landed")) e.classList.remove("is-landed");
        (X = 0), (D = 0), (u = void 0), (Q = 0), (L = !1), C("phone");
      },
      we = d.loop((e) => {
        (q += e), _e();
        const t = _ && !b && !L;
        return (
          t && ((j += e), !$ && j > 0.45 && l.classList.add("is-about"), !$ && j > 0.75 && me(), $ && De(e)),
          A.size > 0 || t
        );
      });
    P.addEventListener(
      "pointerenter",
      () => {
        _ && !b && me();
      },
      { signal: d.signal },
    );
    let ve = !1,
      be = !1,
      ye = -1 / 0,
      ke = 0;
    return (
      d.watch((e) => {
        if (
          (l.toggleAttribute("data-paused", !e.presented),
          e.reducedMotion !== b &&
            ((b = e.reducedMotion), ee(), l.classList.toggle("is-still", b), b && Fe()),
          e.presented &&
            !ve &&
            !be &&
            !b &&
            ((be = !0),
            k(
              0.5,
              () => {
                !_ && !$ && !L && C("wave");
              },
              d.signal,
            ),
            k(
              1.9,
              () => {
                w.dataset.pose === "wave" && C("phone");
              },
              d.signal,
            )),
          (ve = e.presented),
          e.revealed !== _)
        ) {
          if (((_ = e.revealed), _)) (j = 0), L && !b && performance.now() - ye > Ae * 1e3 && ee();
          else if (L && !b) {
            ye = performance.now();
            const t = ++ke;
            k(Ae, () => {
              !_ && t === ke && ee();
            });
          }
        }
        we.wake();
      }),
      () => {
        E.abort(), A.clear(), d.dispose(), l.remove();
      }
    );
  };
export { it as mount };
