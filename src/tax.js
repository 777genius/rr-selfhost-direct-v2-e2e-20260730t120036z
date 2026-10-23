/** Calculate tax from a subtotal and a percentage rate, such as 15 for 15%. */
export function calculateTax(subtotal, ratePercent) {
  return subtotal * ratePercent / 100;
}
