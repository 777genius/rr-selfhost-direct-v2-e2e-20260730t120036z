import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateTax } from '../src/tax.js';

test('calculates a percentage tax amount from the subtotal', () => {
  assert.equal(calculateTax(100, 15), 15);
});

test('keeps a zero tax rate at zero', () => {
  assert.equal(calculateTax(100, 0), 0);
});
