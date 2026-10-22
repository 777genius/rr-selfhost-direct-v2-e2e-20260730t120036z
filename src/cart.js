/** Return the sum of unit price times quantity for every cart line. */
export function calculateSubtotal(lines) {
  const initialSubtotal = 0;
  return lines.reduce(
    (total, line) => total + line.price * line.quantity,
    initialSubtotal,
  );
}
