import { m as K } from "./rootMirror-C_uDdAx6.js";
import { c as M } from "./client-entries-B1h-jQ5r.js";
import { r as L } from "./ref-mixin-D6m2Cu20.js";
import { o as v } from "./on-mixin-Ci1jclOX.js";
import { n as B } from "./run-DmTcvIia.js";
import { j as d } from "./jsx-CLqwgotn.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
import "./frame-BfwM6eZ2.js";
import "./component-BWKvSpCv.js";
import "./style-BrvkoWQt.js";
import "./children-CK0rrdQP.js";
import "./unsafe-html-D-rYaoKo.js";
const V =
    "pointer-events-auto -m-3 cursor-pointer p-3 font-shopify-inter text-video-modal-close md:text-video-modal-close-desktop font-normal text-white underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4",
  w = (u) => (u ? `${u.handle}:${u.youtubeId}:${u.title}` : ""),
  z = M(import.meta.url + "#VideoModal", function (t) {
    let n = t.props.video,
      h = w(n),
      a,
      x,
      k = !1,
      l,
      g,
      p,
      T = Promise.resolve(),
      f = !1;
    const A = () => {
        l?.isConnected && l.focus({ preventScroll: !0 });
      },
      C = async () => {
        if (t.signal.aborted) return;
        const i = t.props.video;
        if (w(i) === w(n)) return;
        const e = l?.isConnected ? l : void 0,
          o = e?.closest("[data-video-transition-source]") ?? e,
          s = o?.style.viewTransitionName ?? "",
          c = o?.style.visibility ?? "",
          r = !!i,
          b =
            !!n !== r &&
            e?.hasAttribute("data-video-transition") &&
            typeof document.startViewTransition == "function" &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          m = async () => {
            if (!t.signal.aborted) {
              if (r) {
                if (((n = i), await t.update(), t.signal.aborted)) return;
                a.open && a.close(), a.showModal(), x.focus({ preventScroll: !0 });
              } else a.close();
              o &&
                ((o.style.visibility = r ? "hidden" : c),
                (o.style.viewTransitionName = r ? "" : "video-container"));
            }
          };
        try {
          b
            ? (r && o && (o.style.viewTransitionName = "video-container"),
              document.documentElement.classList.toggle("video-modal-opening", r),
              (p = document.startViewTransition(m)),
              await p.finished.catch(() => {}))
            : await m();
        } finally {
          (p = void 0),
            o && ((o.style.viewTransitionName = s), (o.style.visibility = c)),
            document.documentElement.classList.remove("video-modal-opening");
        }
        t.signal.aborted || (r || ((n = null), await t.update(), t.signal.aborted || A()), (f = !1));
      },
      E = (i) => ((t.frames.top.src = i), t.frames.top.reload()),
      y = async () => {
        if (!f) {
          f = !0;
          try {
            const i = window.navigation,
              e = i?.entries()[(i.currentEntry?.index ?? 0) - 1];
            !i && l
              ? await E(window.location.href)
              : g && e?.key === g
                ? await i.back().finished
                : await B(t.props.returnHref, { history: "replace", resetScroll: !l?.isConnected });
          } catch (i) {
            if (((f = !1), t.signal.aborted || (i instanceof DOMException && i.name === "AbortError")))
              return;
            window.location.replace(t.props.returnHref);
          }
        }
      };
    return (
      t.queueTask(() => {
        (k = !0), t.update();
        const i = window.navigation;
        i ||
          document.addEventListener(
            "click",
            (e) => {
              const o = e.target instanceof Element ? e.target.closest("a[data-video-launcher]") : null;
              if (
                !o ||
                e.defaultPrevented ||
                e.button !== 0 ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey ||
                (o.target && o.target.toLowerCase() !== "_self") ||
                o.hasAttribute("download") ||
                o.hasAttribute("data-rmx-document") ||
                o.hasAttribute("data-rmx-target")
              )
                return;
              const s = new URL(o.href),
                c = new URL(t.props.returnHref, window.location.href);
              s.origin !== c.origin ||
                !s.pathname.startsWith(`${c.pathname}/video/`) ||
                (e.preventDefault(),
                (l = o),
                E(o.href).catch(() => {
                  t.signal.aborted || window.location.assign(o.href);
                }));
            },
            { signal: t.signal },
          ),
          i?.addEventListener(
            "navigate",
            (e) => {
              const s = e.sourceElement?.closest("a");
              if (
                s?.hasAttribute("data-rmx-document") ||
                s?.hasAttribute("download") ||
                (!s && !f && e.navigationType !== "traverse")
              )
                return;
              const c = new URL(e.destination.url),
                r = new URL(t.props.returnHref, window.location.href);
              if (c.origin !== r.origin) return;
              const b = c.pathname.startsWith(`${r.pathname}/video/`),
                m = !!n && c.pathname === r.pathname;
              (!b && !m) ||
                !e.canIntercept ||
                e.defaultPrevented ||
                (s?.hasAttribute("data-video-launcher") && ((l = s), (g = i.currentEntry?.key)),
                !(m && !l?.isConnected) && e.intercept({ focusReset: "manual", scroll: "manual" }));
            },
            { signal: t.signal },
          ),
          t.signal.addEventListener(
            "abort",
            () => {
              p?.skipTransition(), a?.close();
            },
            { once: !0 },
          );
      }),
      () => {
        const i = w(t.props.video);
        return (
          i !== h &&
            ((h = i),
            t.queueTask(() => {
              p?.skipTransition(), (T = T.then(C));
            })),
          d("dialog", {
            open: !!n,
            "aria-label": n?.title,
            "aria-modal": "true",
            "data-component-name": "video-modal",
            "data-component-extra-product-handle": n?.handle,
            class:
              "video-modal fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-transparent p-0 text-white",
            mix: [
              L((e, o) => {
                (a = e), K(e, "data-f26-video", { open: "open" }, o), n && (a.close(), a.showModal());
              }),
              v("keydown", (e) => e.stopPropagation()),
              v("cancel", (e) => {
                e.preventDefault(), y();
              }),
              v("click", (e) => {
                e.target === a && y();
              }),
            ],
            children: d("div", {
              class: "pointer-events-none flex min-h-full flex-col items-center justify-center py-24",
              children: d("div", {
                class:
                  "pointer-events-none mx-auto flex w-full max-w-video-modal flex-col items-center gap-32 px-12 md:gap-40 md:px-24 lg:gap-24 lg:px-0",
                children: [
                  k
                    ? d("button", {
                        type: "button",
                        "data-component-name": "close",
                        class: V,
                        mix: [
                          L((e) => {
                            (x = e), a?.open && e.focus({ preventScroll: !0 });
                          }),
                          v("click", () => {
                            y();
                          }),
                        ],
                        children: t.props.closeLabel ?? "Close",
                      })
                    : d("a", {
                        href: t.props.returnHref,
                        "data-component-name": "close",
                        class: V,
                        autofocus: !!n,
                        children: t.props.closeLabel ?? "Close",
                      }),
                  n
                    ? d("div", {
                        class:
                          "video-modal-player pointer-events-auto relative aspect-video w-full overflow-hidden bg-black",
                        style: { viewTransitionName: "video-container" },
                        children: d(
                          "iframe",
                          {
                            class: "absolute inset-0 size-full",
                            src: `https://www.youtube-nocookie.com/embed/${n.youtubeId}?autoplay=1&rel=0&start=0`,
                            title: t.props.iframeTitle ?? n.title,
                            allow:
                              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: !0,
                          },
                          n.youtubeId,
                        ),
                      })
                    : null,
                ],
              }),
            }),
          })
        );
      }
    );
  });
export { z as VideoModal };
