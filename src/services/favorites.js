import { apiRequest } from "./http";

export async function syncFavorite(productId, favorite) {
  await apiRequest(`/favorites/${productId}`, {
    method: favorite ? "PUT" : "DELETE"
  });

  return {
    productId,
    favorite
  };
}

export async function getFavorites() {
  return apiRequest("/favorites");
}
