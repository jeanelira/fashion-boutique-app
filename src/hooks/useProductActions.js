import { useCallback } from "react";
import { useApp } from "../context/AppContext";

export function useProductActions() {
  const { addToBag, favorites, openProduct, shareProduct, toggleFavorite } = useApp();

  return {
    addToBag: useCallback((product) => addToBag(product), [addToBag]),
    favorites,
    isFavorite: useCallback((productId) => favorites.includes(productId), [favorites]),
    openProduct: useCallback((product) => openProduct(product), [openProduct]),
    shareProduct: useCallback((product) => shareProduct(product), [shareProduct]),
    toggleFavorite: useCallback((product) => toggleFavorite(product), [toggleFavorite])
  };
}
