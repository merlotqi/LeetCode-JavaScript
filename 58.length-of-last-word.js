/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let length = 0;
    let i = s.length - 1;

    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};
// @lc code=end

