import assert from 'node:assert/strict';
import test from 'node:test';
import { payout } from './index.js';

test('returns the multiple of 2 values', () => {
    assert.strictEqual(payout(21, 2), 42);
});
