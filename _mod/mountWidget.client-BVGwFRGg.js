const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/room-fFDJVA5E.js",
      "assets/frameLoop-CeLX9Qef.js",
      "assets/assets-CA9n78aZ.js",
      "assets/strings-NDaVNPGZ.js",
      "assets/formatCopy-Cs7MVtfe.js",
      "assets/locale-DXEWuBc6.js",
      "assets/surfacing-Di5esi6_.js",
      "assets/surface-Be90gCgo.js",
      "assets/gltf-CF5uy7xI.js",
      "assets/preload-helper-CZudbPKK.js",
      "assets/shader-7sCtY4bJ.js",
      "assets/mesh.wgsl-CahI0rXV.js",
      "assets/zoom-BSyeiUqR.js",
      "assets/FulfillmentRippleWidget.client-D4ipMrTb.js",
      "assets/canvas-RLtP6qLT.js",
      "assets/constants-Dvx39Bnh.js",
      "assets/fontFamily-DUpol7iY.js",
      "assets/runtime-CljIenoa.js",
      "assets/residentSections-BEssGc_p.js",
      "assets/colorPalette-VQpnhwit.js",
      "assets/MarketingCampaignWidget.client-ClmUAArp.js",
      "assets/OnlineCocotteWidget.client-Cxv-uEAD.js",
      "assets/OnlineInboxAnaWidget.client-BJqaX8TX.js",
      "assets/OperationsPullBackWidget.client-DW4ZYBXT.js",
      "assets/PaymentsDoorstepWidget.client-C0J6Fh3z.js",
      "assets/PaymentsGlobeWidget.client-BFVW-6RK.js",
      "assets/RetailLinesWidget.client-B8V3TgZM.js",
      "assets/SidekickTimebaseWidget.client-CGt5T7BV.js",
    ]),
) => i.map((i) => d[i]);
import { _ as n } from "./preload-helper-CZudbPKK.js";
const c = {
  room: async () => {
    const { mountRoom: t } = await n(
        async () => {
          const { mountRoom: a } = await import("./room-fFDJVA5E.js");
          return { mountRoom: a };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      ),
      { getRoomStrings: o } = await n(
        async () => {
          const { getRoomStrings: a } = await import("./strings-NDaVNPGZ.js");
          return { getRoomStrings: a };
        },
        __vite__mapDeps([3, 4, 5]),
      );
    return (a, r) => t(a, o(r?.strings, r?.locale));
  },
  checkpoint: async () =>
    (
      await n(async () => {
        const { mountCheckpointLedger: t } = await import("./checkpoint-BgJkuEPp.js");
        return { mountCheckpointLedger: t };
      }, [])
    ).mountCheckpointLedger,
  surfacing: async () =>
    (
      await n(
        async () => {
          const { mountSurfacing: t } = await import("./surfacing-Di5esi6_.js");
          return { mountSurfacing: t };
        },
        __vite__mapDeps([6, 4, 5, 7, 8, 9, 10, 11]),
      )
    ).mountSurfacing,
  "canvas-zoom": async () => {
    const { mountZoom: t } = await n(
      async () => {
        const { mountZoom: o } = await import("./zoom-BSyeiUqR.js");
        return { mountZoom: o };
      },
      __vite__mapDeps([12, 4, 5]),
    );
    return (o, a) =>
      t(o, { sectionId: o.dataset.sectionId ?? "", card: o, tether: { launch: () => Promise.resolve() } }, a);
  },
  "fulfillment-cone": async () => {
    const { mount: t } = await n(
      async () => {
        const { mount: o } = await import("./FulfillmentRippleWidget.client-D4ipMrTb.js");
        return { mount: o };
      },
      __vite__mapDeps([13, 14, 15, 16, 17, 1, 18, 19]),
    );
    return (o, a) => t(o, { locale: a?.locale });
  },
  "fulfillment-ripple": async () =>
    (
      await n(
        async () => {
          const { mount: t } = await import("./FulfillmentRippleWidget.client-D4ipMrTb.js");
          return { mount: t };
        },
        __vite__mapDeps([13, 14, 15, 16, 17, 1, 18, 19]),
      )
    ).mount,
  "marketing-campaign": async () =>
    (
      await n(
        async () => {
          const { mount: t } = await import("./MarketingCampaignWidget.client-ClmUAArp.js");
          return { mount: t };
        },
        __vite__mapDeps([20, 14, 15, 16, 17, 1, 18, 19, 4, 5]),
      )
    ).mount,
  "online-cocotte": async () =>
    (
      await n(
        async () => {
          const { mount: t } = await import("./OnlineCocotteWidget.client-Cxv-uEAD.js");
          return { mount: t };
        },
        __vite__mapDeps([21, 14, 15, 16, 17, 1, 18, 19, 4, 5]),
      )
    ).mount,
  "online-inbox-ana": async () =>
    (
      await n(
        async () => {
          const { mount: t } = await import("./OnlineInboxAnaWidget.client-BJqaX8TX.js");
          return { mount: t };
        },
        __vite__mapDeps([22, 17, 1, 18, 19, 4, 5]),
      )
    ).mount,
  "operations-pull-back": async () =>
    (
      await n(
        async () => {
          const { mount: t } = await import("./OperationsPullBackWidget.client-DW4ZYBXT.js");
          return { mount: t };
        },
        __vite__mapDeps([23, 14, 15, 16, 17, 1, 18, 19, 4, 5]),
      )
    ).mount,
  "payments-doorstep": async () =>
    (
      await n(
        async () => {
          const { mount: t } = await import("./PaymentsDoorstepWidget.client-C0J6Fh3z.js");
          return { mount: t };
        },
        __vite__mapDeps([24, 14, 15, 16, 17, 1, 18, 19, 4, 5]),
      )
    ).mount,
  "payments-globe": async () =>
    (
      await n(
        async () => {
          const { mount: t } = await import("./PaymentsGlobeWidget.client-BFVW-6RK.js");
          return { mount: t };
        },
        __vite__mapDeps([25, 14, 15, 16, 17, 1, 18, 19]),
      )
    ).mount,
  "retail-lines": async () =>
    (
      await n(
        async () => {
          const { mount: t } = await import("./RetailLinesWidget.client-B8V3TgZM.js");
          return { mount: t };
        },
        __vite__mapDeps([26, 14, 15, 16, 17, 1, 18, 19, 4, 5]),
      )
    ).mount,
  "sidekick-timebase": async () =>
    (
      await n(
        async () => {
          const { mount: t } = await import("./SidekickTimebaseWidget.client-CGt5T7BV.js");
          return { mount: t };
        },
        __vite__mapDeps([27, 14, 15, 16, 17, 1, 18, 19, 4, 5]),
      )
    ).mount,
};
async function u(t, o, a, r) {
  const e = await c[t]();
  if (a.aborted) return;
  const i = e(o, { ...r, locale: r?.locale ?? document.documentElement.lang });
  i && (a.aborted ? i() : a.addEventListener("abort", i, { once: !0 }));
}
export { u as default };
