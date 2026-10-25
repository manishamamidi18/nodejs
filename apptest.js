const add = require("./app");
const assert = require("node:assert");

assert.strictEqual(add(10, 20), 30);
assert.strictEqual(add(60,40),100);

console.log("Test passed!");