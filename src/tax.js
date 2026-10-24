/** Calculate tax rounded to cents from a percentage rate, such as 15 for 15%. */
export function calculateTax(subtotal, ratePercent) {
  return Math.round(subtotal * ratePercent) / 100;
}
