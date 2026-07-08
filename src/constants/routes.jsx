import { Home, Search, ShoppingBag, Sparkles, UserRound } from "lucide-react";

export const ROUTES = {
  home: "home",
  collections: "collections",
  shop: "shop",
  bag: "bag",
  profile: "profile"
};

export const tabs = [
  { id: ROUTES.home, label: "Home", icon: Home },
  { id: ROUTES.collections, label: "Coleções", icon: Sparkles },
  { id: ROUTES.shop, label: "Shop", icon: Search },
  { id: ROUTES.bag, label: "Sacola", icon: ShoppingBag },
  { id: ROUTES.profile, label: "Perfil", icon: UserRound }
];
