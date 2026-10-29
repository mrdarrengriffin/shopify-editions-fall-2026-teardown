import { t as l } from "./index-CRnHN5xY.js";
import { c as n } from "./colorPalette-VQpnhwit.js";
import { F as c } from "./component-BWKvSpCv.js";
import { j as o } from "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
function b(r) {
  return () => {
    const { surface: t, legend: e, footnote: i } = r.props,
      s = e && i && !r.props.bare ? e.lastIndexOf("*") : -1;
    return o("figure", {
      class: l(
        "m-0 flex min-h-0 min-w-0 flex-col overflow-hidden text-white",
        !r.props.bare && "border border-current/20",
        r.props.className,
      ),
      "data-hero-colour": (t ?? n.blue).srgb,
      style: t && !r.props.bare ? { backgroundColor: `var(${t.customProperty})` } : void 0,
      children: [
        e
          ? o("figcaption", {
              class: r.props.bare ? "sr-only" : "flex-none px-4 pt-4 pb-7 font-mono text-mono text-pretty",
              children:
                s < 0
                  ? e
                  : o(c, {
                      children: [
                        e.slice(0, s),
                        o("a", {
                          href: `#${i}`,
                          "aria-labelledby": i,
                          "data-rmx-document": "",
                          class:
                            "no-underline focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4",
                          children: "*",
                        }),
                        e.slice(s + 1),
                      ],
                    }),
            })
          : null,
        o("div", {
          class: "relative min-h-0 min-w-0 flex-1",
          inert: r.props.decorative,
          children: r.props.children,
        }),
      ],
    });
  };
}
export { b as Widget };
