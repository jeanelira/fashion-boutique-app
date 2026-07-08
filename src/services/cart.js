import { apiRequest } from "./http";

export async function addItemToCart(product) {
  await apiRequest("/cart/items", {
    method: "POST",
    body: JSON.stringify({ productId: product.id, quantity: 1 })
  });

  return {
    product,
    quantity: 1
  };
}

export async function getCart() {
  return apiRequest("/cart");
}
