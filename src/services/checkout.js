import { apiRequest } from "./http";

export async function startCheckout(cartId) {
  await apiRequest("/checkout", {
    method: "POST",
    body: JSON.stringify({ cartId })
  });

  return {
    status: "mocked",
    message: "Checkout visual aberto. Integração real entra na próxima etapa."
  };
}
