export function reserveInventory(items, inventory) {
  for (const item of items) {
    const available = inventory[item.sku] ?? 0;
    if (available < item.quantity) {
      throw new Error(`insufficient inventory for ${item.sku}`);
    }
    inventory[item.sku] = available - item.quantity;
  }

  return inventory;
}
