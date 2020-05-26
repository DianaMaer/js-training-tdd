'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(word){
    return word.substr(0,2);
}
function keepLast(word){
    return word.substr(word.length-2,2);
}

function keepFirstLast(word){
    return word.substr(2,2);
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function' );
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst('Hello'), 'He');
assert.strictEqual(keepFirst('H people'), 'H ');

assert.strictEqual(typeof keepLast, 'function' );
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepLast('Hello'), 'lo');
assert.strictEqual(keepLast('Mini m'), ' m');

assert.strictEqual(typeof keepFirstLast, 'function' );
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirstLast('Hello'), 'll');
assert.strictEqual(keepFirstLast('Hi people'), ' p');

//assert.fail('You must write your own tests');
// End of tests */
