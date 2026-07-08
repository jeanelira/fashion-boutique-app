import { products } from "../data";
import { startCheckout } from "./checkout";

export function getBagPreview() {
  return products.slice(0, 2);
}

export async function createCheckout() {
  return startCheckout("visual-cart");
}
