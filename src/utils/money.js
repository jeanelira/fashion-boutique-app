export function formatMoney(value) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}
