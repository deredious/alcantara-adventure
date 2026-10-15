const test = require('node:test');
const assert = require('node:assert/strict');
const { payout } = require('./index.js');

test('returns the multiple of 2 values', () => {
    assert.strictEqual(payout(21, 2), 42);
});
