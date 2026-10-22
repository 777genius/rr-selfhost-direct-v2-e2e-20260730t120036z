/** Return the sum of unit price times quantity for every cart line. */
export function calculateSubtotal(lines) {
  return lines.reduce((total, line) => total + line.price, 0);
}
