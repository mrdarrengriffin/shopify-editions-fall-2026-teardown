const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/dev-overlay-toolbar.client-7Jp2AZG_.js",
      "assets/dev-overlay-labels-C9lgWr1Z.js",
      "assets/frameLoop-CeLX9Qef.js",
    ]),
) => i.map((i) => d[i]);
import { _ as p } from "./preload-helper-CZudbPKK.js";
import { i as b, c as S, a as y, r as h, b as T } from "./reportError-C6Wenmm6.js";
import { i as A } from "./buttonCount-ouJvNL2Q.js";
import { C as N } from "./frame-cd-Zl80R.js";
import { i as L, a as I, f as O } from "./breadcrumbs-D6XkVKYD.js";
import { n as M } from "./frameLoop-CeLX9Qef.js";
import { F as v } from "./frame-ChPcbJwd.js";
import { r as F } from "./run-DmTcvIia.js";
import "./frame-BfwM6eZ2.js";
import "./jsx-CLqwgotn.js";
import "./component-BWKvSpCv.js";
import "./typed-event-target-DhbNxY-V.js";
import "./mixin-CMuDUxNx.js";
import "./style-BrvkoWQt.js";
import "./client-entries-B1h-jQ5r.js";
import "./children-CK0rrdQP.js";
import "./unsafe-html-D-rYaoKo.js";
import "./on-mixin-Ci1jclOX.js";
Error.stackTraceLimit = 50;
const P = [
    /Unable to preload CSS for/,
    /Importing a module script failed/,
    /Failed to fetch dynamically imported module:/,
    /error loading dynamically imported module:/,
  ],
  D = [
    /webkit-masked-url:\/\/hidden\//,
    /undefined is not an object \(evaluating 'window\.webkit\.messageHandlers'\)/,
    /chrome-extension/,
    /^Uncaught undefined/,
    /undefined is not an object \(evaluating 'a\.L'\)/,
    /ResizeObserver loop (completed with undelivered notifications|limit exceeded)/,
  ],
  U = [
    /Network error: cancel/,
    /connection appears to be offline/,
    /connection was lost/,
    /The user aborted a request/,
    /NetworkError when attempting to fetch resource/,
  ],
  k = [
    /unhandledrejection handler received a non-error/,
    /AbortError: Fetch is aborted/,
    /The user aborted a request/,
    /The operation was aborted/,
    /signal is aborted without reason/,
    /Minified React error #418/,
    /Minified React error #422/,
    /Minified React error #423/,
    /Minified React error #425/,
  ],
  x = [/^No target$/, /^Worker terminate$/],
  B = [...P, ...D, ...U, ...k, ...x],
  E = (e) => B.some((r) => r.test(e));
function C({ app: e, bugsnagApiKey: r, isLoggingReady: n, logError: o, signal: i }) {
  const a = (t) => ({
    errorType: t,
    ...(r ? { bugsnagApiKey: r, appVersion: window.__APP_VERSION__ || "" } : {}),
  });
  window.addEventListener(
    "error",
    (t) => {
      const s = t.target;
      if (
        (s instanceof HTMLSourceElement &&
          s.parentElement instanceof HTMLVideoElement &&
          s.parentElement.currentSrc) ||
        (!t.error && !t.message && !t.filename) ||
        t.error?.name === "AbortError" ||
        b(t)
      )
        return;
      const c = t.error?.message || t.message || (t.error ? String(t.error) : "Unknown error");
      E(c) ||
        !n() ||
        (t.preventDefault(),
        o(
          {
            message: c,
            stack: t.error?.stack || "No stack trace available",
            fileName: t.filename,
            lineNumber: t.lineno,
          },
          { ...a("unhandled_error"), colno: t.colno },
        ));
    },
    { capture: !0, signal: i },
  ),
    window.addEventListener(
      "unhandledrejection",
      (t) => {
        const s =
          t.reason instanceof Error ? t.reason : new Error(String(t.reason || "Unhandled promise rejection"));
        s.name === "AbortError" ||
          E(s.message) ||
          (n() && (t.preventDefault(), o(s, a("unhandled_rejection"))));
      },
      { signal: i },
    ),
    e?.addEventListener(
      "error",
      (t) => {
        n() && o(t.error, a("remix_ui_error"));
      },
      { signal: i },
    );
}
const G = "graph-modules",
  H = 3e3;
function K(e = window) {
  try {
    const r = e.document.getElementById(G)?.textContent;
    if (!r || typeof e.fetch != "function") return;
    const n = JSON.parse(r);
    if (!Array.isArray(n) || n.length === 0) return;
    const o = () => {
        for (const s of n)
          typeof s == "string" &&
            e
              .fetch(s)
              .then((c) => c.arrayBuffer())
              .catch(() => {});
      },
      i = [...e.document.querySelectorAll('link[rel="preload"][as="font"]')].filter(
        (s) => !e.performance.getEntriesByName?.(s.href).some((c) => c.responseEnd > 0),
      );
    if (i.length === 0) {
      o();
      return;
    }
    const a = new e.AbortController(),
      t = e.setTimeout(() => a.abort(), H);
    Promise.all(
      i.map(
        (s) =>
          new Promise((c) => {
            const f = { once: !0, signal: a.signal };
            s.addEventListener("load", () => c(), f), s.addEventListener("error", () => c(), f);
          }),
      ),
    ).then(() => {
      e.clearTimeout(t), a.abort(), o();
    });
  } catch {}
}
const V = async (e, r) => {
    if (!e.ok) throw new Error(`Failed to resolve frame: ${e.status} ${e.statusText}`.trimEnd());
    if (e.headers.get("X-Remix-Target") !== r) throw new Error(`Frame response was not a ${r} fragment`);
    return e.text();
  },
  d = 150;
let l = Number.NEGATIVE_INFINITY,
  _ = Promise.resolve();
function q() {
  const e = () => {
    l = performance.now();
  };
  addEventListener("scroll", e, { passive: !0 }), addEventListener("wheel", e, { passive: !0 });
}
const J = (e) => {
    const r = _.then(() => $(e));
    return (_ = r.catch(() => {})), r;
  },
  $ = (e) =>
    new Promise((r, n) => {
      if (e?.aborted) return n(e.reason);
      let o;
      e?.addEventListener(
        "abort",
        () => {
          clearTimeout(o), n(e.reason);
        },
        { once: !0 },
      );
      const i = () => {
        const a = performance.now() - l;
        if (a < d) {
          o = setTimeout(i, d - a);
          return;
        }
        if (document.hidden) return r();
        M(() => (performance.now() - l < d ? i() : r()), { signal: e });
      };
      i();
    }),
  j = new Set([v, N]),
  g = new URLSearchParams(location.search).has("remix-overlay");
let m;
if (g)
  try {
    const { captureHydrationLabels: e } = await p(async () => {
      const { captureHydrationLabels: r } = await import("./dev-overlay-labels-C9lgWr1Z.js");
      return { captureHydrationLabels: r };
    }, []);
    m = e();
  } catch {
    m = void 0;
  }
window.__APP_VERSION__ = "d4096771aea031a952dcef4db244836ad6a4215c";
const w = window,
  R = w.__BUGSNAG_API_KEY__ || void 0,
  W = w.__BUGSNAG_RELEASE_STAGE__ || "development";
S({ apiKey: R, releaseStage: W });
y();
L();
A();
q();
K();
const u = F({
    async loadModule(e, r) {
      return (await import(e))[r];
    },
    async resolveFrame(e, r) {
      const n = new Headers({ Accept: "text/html" });
      r?.target && n.set("X-Remix-Target", r.target);
      let o;
      const i = (a) => {
        o !== 404 &&
          h(a, "resolveFrame", {
            src: e,
            target: r?.target,
            method: r?.method ?? "GET",
            status: o,
            online: navigator.onLine,
          }),
          I("frame.failed", { src: O(e), target: r?.target, status: o });
      };
      try {
        const a = await fetch(e, { headers: n, method: r?.method, body: z(r), signal: r?.signal });
        if (((o = a.status), r?.target && j.has(r.target))) {
          const t = await V(a, r.target);
          return await J(r.signal), t;
        }
        return (o === 404 || o >= 500) && i(new Error(`Frame responded ${o}`)), a;
      } catch (a) {
        throw (r?.signal?.aborted || i(a), a);
      }
    },
  }),
  z = (e) => {
    const r = e?.formData;
    if (!r) return;
    if (e.encType !== "application/x-www-form-urlencoded") return r;
    const n = new URLSearchParams();
    for (const [o, i] of r) n.append(o, typeof i == "string" ? i : i.name);
    return n;
  };
u.addEventListener("error", (e) => {
  console.error("Remix UI error", e.error);
});
C({
  app: u,
  bugsnagApiKey: R,
  isLoggingReady: T,
  logError: (e, r) => h(e, "entry.browser", r),
  signal: new AbortController().signal,
});
await u.ready();
g &&
  p(
    async () => {
      const { mountDevOverlayToolbar: e } = await import("./dev-overlay-toolbar.client-7Jp2AZG_.js");
      return { mountDevOverlayToolbar: e };
    },
    __vite__mapDeps([0, 1, 2]),
  ).then(({ mountDevOverlayToolbar: e }) => {
    e(m);
  });
