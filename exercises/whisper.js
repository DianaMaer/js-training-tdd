'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(word){
    return (`*${word.toLowerCase()}*`);
}

// Your code:

 //* Begin of tests
 const assert = require('assert');
 assert.strictEqual(typeof whisper, 'function');
 assert.strictEqual(whisper.length, 1);
 assert.strictEqual(whisper('ME'), '*me*');
 assert.strictEqual(whisper('ME ME!'), '*me me!*');


// assert.fail('You must write your own tests');
 // End of tests */
