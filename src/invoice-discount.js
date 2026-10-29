/**
 * Return the discount amount in integer cents.
 * discountPercent uses percentage units: 20 means 20%, with inputs validated upstream.
 */
export function calculateInvoiceDiscountCents(subtotalCents, discountPercent) {
  return Math.round(subtotalCents * discountPercent / 100);
}
