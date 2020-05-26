'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(word){
    return word.slice(2);
}
function cutLast(word){
    return word.slice(0 ,word.length-2);
}

function cutFirstLast(word){
    return word.slice(2 ,word.length-2);
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof cutFirst, 'function' );
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst('Hello'), 'llo');
assert.strictEqual(cutFirst('Hi people'), ' people');

assert.strictEqual(typeof cutLast, 'function' );
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutLast('Hello'), 'Hel');
assert.strictEqual(cutLast('Hi people'), 'Hi peop');

assert.strictEqual(typeof cutFirstLast, 'function' );
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(cutFirstLast('Hello'), 'l');
assert.strictEqual(cutFirstLast('Hi people'), ' peop');

// assert.fail('You must write your own tests');
// End of tests */
