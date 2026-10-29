import { Button as r } from "./Button---CvFgJi.js";
import { c as e } from "./client-entries-B1h-jQ5r.js";
import { o as a } from "./on-mixin-Ci1jclOX.js";
import { j as n } from "./jsx-CLqwgotn.js";
import "./index-CRnHN5xY.js";
import "./clsx-B-dksMZM.js";
import "./externalLink-DAUa5sJm.js";
import "./constants-Dvx39Bnh.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
import "./component-BWKvSpCv.js";
const c = (t) => t.checkVisibility({ visibilityProperty: !0, opacityProperty: !0 });
function p(t, o = document) {
  return (
    [
      o.querySelector(`.desktop-navigation a[href="#${CSS.escape(t)}"]`),
      ...o.querySelectorAll(".desktop-navigation a[href]"),
      o.querySelector('button[aria-controls="mobile-menu"]'),
    ].find((i) => i && c(i)) ?? null
  );
}
const B = e(import.meta.url + "#BackToNavigation", function (o) {
  return () =>
    n(r, {
      className: "pointer-events-none opacity-0 focus:pointer-events-auto focus:opacity-100",
      mix: [a("click", () => p(o.props.sectionHandle)?.focus())],
      children: o.props.label || "Back to navigation",
    });
});
export { B as BackToNavigation, p as getNavigationTarget };
