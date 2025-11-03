/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0))
        return false;

    let reverse = 0;
    let original = x;

    while (original > 0) {
        reverse = reverse * 10 + original % 10;
        original = Math.floor(original / 10);
    }

    return reverse === x;
};
// @lc code=end

