import { T as e } from "./typed-event-target-DhbNxY-V.js";
class s extends e {
  #t = !1;
  get isShopifyMerchant() {
    return this.#t;
  }
  set(t) {
    t !== this.#t && ((this.#t = t), this.dispatchEvent(new Event("change")));
  }
}
const h = new s();
export { h as s };
