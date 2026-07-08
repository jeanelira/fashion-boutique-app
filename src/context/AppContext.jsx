import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { ROUTES } from "../constants/routes";
import { addItemToCart } from "../services/cart";
import { syncFavorite } from "../services/favorites";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState(ROUTES.home);
  const [notice, setNotice] = useState("");
  const [favorites, setFavorites] = useState([]);
  const noticeTimeoutRef = useRef();

  const notify = useCallback((message) => {
    setNotice(message);
    window.clearTimeout(noticeTimeoutRef.current);
    noticeTimeoutRef.current = window.setTimeout(() => setNotice(""), 2600);
  }, []);

  const openTab = useCallback((route) => {
    setActiveTab(route);
  }, []);

  const openMenu = useCallback(() => {
    notify("Menu demonstrativo: navegação, busca e preferências.");
  }, [notify]);

  const openBag = useCallback(() => {
    setActiveTab(ROUTES.bag);
  }, []);

  const toggleFavorite = useCallback((product) => {
    let willFavorite = false;
    setFavorites((current) => {
      const exists = current.includes(product.id);
      willFavorite = !exists;
      return exists ? current.filter((id) => id !== product.id) : [...current, product.id];
    });
    syncFavorite(product.id, willFavorite).catch(() => {
      notify("Não foi possível sincronizar favoritos agora.");
    });
    notify(`${product.name} ${willFavorite ? "favoritado" : "removido dos favoritos"}.`);
  }, [notify]);

  const addToBag = useCallback((product) => {
    addItemToCart(product).catch(() => {
      notify("Não foi possível atualizar a sacola agora.");
    });
    notify(`${product.name} adicionado à sacola visual.`);
  }, [notify]);

  const openProduct = useCallback((product) => {
    notify(`${product.name}: detalhe do produto em modo protótipo.`);
  }, [notify]);

  const shareProduct = useCallback((product) => {
    notify(`${product.name}: compartilhamento demonstrativo.`);
  }, [notify]);

  const value = useMemo(
    () => ({
      activeTab,
      addToBag,
      favorites,
      notice,
      notify,
      openBag,
      openMenu,
      openProduct,
      openTab,
      setActiveTab,
      shareProduct,
      toggleFavorite
    }),
    [activeTab, addToBag, favorites, notice, notify, openBag, openMenu, openProduct, openTab, shareProduct, toggleFavorite]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp precisa estar dentro de AppProvider.");
  return context;
}
