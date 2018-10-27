const assert = require('assert');

const sumOfOther = require('../src/sumOfOther');

describe('sumOfOther', () => {
it('yields array of items which have sumOfArray - item at their respecive positions', () => {
        assert.deepEqual(sumOfOther([1, 2]), [2, 1]);
        assert.deepEqual(sumOfOther([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10]);
        assert.deepEqual(sumOfOther(['abc', 'def']), ['def', 'abc']);
        assert.deepEqual(sumOfOther(['abc', 'def', 'ghi']), ['defghi', 'abcghi', 'abcdef']);
    });
});