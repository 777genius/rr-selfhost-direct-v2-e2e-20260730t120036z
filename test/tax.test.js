import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateTax } from '../src/tax.js';

test('calculates a percentage tax amount from the subtotal', () => {
  assert.equal(calculateTax(100, 15), 15);
});

test('keeps a zero tax rate at zero', () => {
  assert.equal(calculateTax(100, 0), 0);
});

test('keeps tax on a zero subtotal at zero', () => {
  assert.equal(calculateTax(0, 15), 0);
});

test('calculates a negative tax amount for a credit subtotal', () => {
  assert.equal(calculateTax(-100, 15), -15);
});
