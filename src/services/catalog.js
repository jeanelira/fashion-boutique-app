import { colors, featureFrames, homeBlocks, products } from "../data";

export function getDesignTokens() {
  return [
    ["Off-white", colors.paper],
    ["Areia", colors.sand],
    ["Grafite", colors.ink],
    ["Cinza quente", colors.muted],
    ["Coral", colors.coral],
    ["Rosa suave", colors.blush]
  ];
}

export function getFeatureFrames() {
  return featureFrames;
}

export function getHomeBlocks() {
  return homeBlocks;
}

export function getProducts() {
  return products;
}

export async function fetchProducts() {
  return products;
}
