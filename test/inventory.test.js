import assert from "node:assert/strict";
import test from "node:test";

import { reserveInventory } from "../src/inventory.js";

test("reserves available inventory", () => {
  const inventory = { keyboard: 4, mouse: 8 };

  reserveInventory(
    [
      { sku: "keyboard", quantity: 1 },
      { sku: "mouse", quantity: 2 },
    ],
    inventory,
  );

  assert.deepEqual(inventory, { keyboard: 3, mouse: 6 });
});
