import { T as t } from "./typed-event-target-DhbNxY-V.js";
class r extends t {
  #e = !1;
  get covered() {
    return this.#e;
  }
  set(e) {
    e !== this.#e && ((this.#e = e), this.dispatchEvent(new Event("change")));
  }
}
const o = new r();
export { o as p };
