import assert from "node:assert/strict";
import test from "node:test";

import { applyPercentageDiscount } from "../src/discount.js";

test("applies a percentage discount to the full subtotal", () => {
  assert.equal(applyPercentageDiscount(200, 20), 160);
});
