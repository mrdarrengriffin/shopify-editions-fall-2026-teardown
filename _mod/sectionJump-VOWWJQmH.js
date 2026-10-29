import { T as e } from "./typed-event-target-DhbNxY-V.js";
class s extends e {
  #t;
  holds(t) {
    return !!(t && this.#t && !this.#t.contains(t));
  }
  set(t) {
    t !== this.#t && ((this.#t = t), this.dispatchEvent(new Event("change")));
  }
}
const r = new s();
export { r as s };
