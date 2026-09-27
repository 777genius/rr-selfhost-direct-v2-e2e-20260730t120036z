export function calculateSubtotal(lines) {
  return lines.reduce((total, line) => total + line.price * line.quantity, 0);
}

export function applyPercentageDiscount(subtotal, percent) {
  return subtotal * (1 + percent / 100);
}
