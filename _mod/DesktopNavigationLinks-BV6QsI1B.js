import { c } from "./clsx-B-dksMZM.js";
import { j as t } from "./jsx-CLqwgotn.js";
function p(r, e, n) {
  if (r === e) return 0.55;
  const o = r < e ? r : r - 1;
  return 0.65 + Math.max(0, o) * Math.min(0.012, 0.12 / Math.max(1, n - 2));
}
function m(r) {
  return () =>
    t("div", {
      class: "@container col-span-2 flex max-h-full min-h-0 flex-col",
      children: t("nav", {
        "aria-label": r.props.label ?? "Sections",
        class:
          "pointer-events-auto -m-8 box-content min-h-0 w-max max-w-full overflow-y-auto p-8 font-mono text-mono",
        children: t("ol", {
          class: "flex flex-col",
          children: r.props.links.map((e, n, o) => {
            const i = e.href === r.props.activeHref,
              u = p(
                n,
                o.findIndex(({ href: l }) => l === r.props.activeHref),
                o.length,
              ),
              a = e.href.startsWith("#"),
              s = a ? e.href.slice(1) : void 0;
            return t(
              "li",
              {
                style: { "--nav-row-start": String(u) },
                children: t("a", {
                  class:
                    "group flex min-h-24 items-center gap-12 transition-opacity duration-150 ease-editions focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4",
                  "data-rmx-document": a ? "" : void 0,
                  "data-component-name": "menu-item-link",
                  "data-component-extra-section-handle": s,
                  "data-section-preload": s,
                  href: e.href,
                  "aria-current": i ? "location" : void 0,
                  children: [
                    t("span", {
                      class: c(
                        "trim-cap min-w-0 flex-1 wrap-anywhere underline-metrics transition-opacity duration-150 ease-editions group-hover:underline group-hover:opacity-100 group-focus-visible:underline group-focus-visible:opacity-100",
                        i ? "opacity-100" : "opacity-70",
                      ),
                      children: e.title,
                    }),
                    t("span", {
                      "aria-hidden": "true",
                      "data-section-dot": e.href,
                      class: c(
                        "size-4 shrink-0 rounded-full border transition duration-300 ease-editions motion-reduce:transition-none",
                        i
                          ? "border-current bg-current"
                          : "border-current/70 group-hover:border-current group-hover:bg-current group-focus-visible:border-current group-focus-visible:bg-current",
                      ),
                    }),
                  ],
                }),
              },
              e.href,
            );
          }),
        }),
      }),
    });
}
export { m as DesktopNavigationLinks, p as rowStart };
