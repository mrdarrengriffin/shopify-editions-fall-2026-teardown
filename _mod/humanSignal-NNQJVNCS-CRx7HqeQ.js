import { _ as o } from "./preload-helper-CZudbPKK.js";
import { d as l } from "./reportError-C6Wenmm6.js";
import "./breadcrumbs-D6XkVKYD.js";
var m = "1.0";
function d(n, e) {
  return {
    schemaId: "dux_website_events/1.8",
    payload: {
      eventType: "human_signal",
      pageViewToken: n,
      humanSignalApiVersion: m,
      humanSignalWebdriverDetected: e.wd,
      humanSignalUserAgent: e.ua,
      humanSignalCanvasNormal: e.cf,
      humanSignalBrowserNormal: e.be,
      humanSignalNaturalMouse: e.nm,
      humanSignalNaturalClicks: e.nc,
      humanSignalKeyboardActivity: e.ka,
      humanSignalScrollActivity: e.sa,
      humanSignalTouchActivity: e.ta,
      humanSignalSignificantTime: e.pt,
      humanSignalMultiplePages: e.mp,
      humanSignalSessionReasonable: e.sd,
    },
  };
}
var p = (n, e) => {
  if (!n.denormalizedDux) return;
  let i = null,
    t = !1;
  const u = () => {
    if (t || !i || !e.pageViewToken || !n.denormalizedDux) return;
    const a = d(e.pageViewToken, i);
    n.denormalizedDux(a, { flush: !0 }), (t = !0);
  };
  l([
    ["beforeunload", u, window, !0],
    ["pagehide", u, window, !0],
  ]),
    o(async () => {
      const { initSHS: a } = await import("./index-DVGCpxad.js");
      return { initSHS: a };
    }, [])
      .then(({ initSHS: a }) => {
        a({
          shopId: Number(e.shopId) || 0,
          beaconEndpoint: null,
          debug: e.mode === "development",
          onSignalUpdate: (r) => {
            i = r;
          },
        });
      })
      .catch(() => {});
};
export { p as initHumanSignalTracking };
