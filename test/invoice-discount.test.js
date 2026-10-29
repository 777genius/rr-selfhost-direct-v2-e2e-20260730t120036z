import assert from "node:assert/strict";
import test from "node:test";

import { calculateInvoiceDiscountCents } from "../src/invoice-discount.js";

for (const [percent, expectedCents] of [[0, 0], [20, 4000], [100, 20000]]) {
  test(`calculates ${percent}% of an invoice subtotal in cents`, () => {
    assert.equal(calculateInvoiceDiscountCents(20000, percent), expectedCents);
  });
}
