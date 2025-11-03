/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longest = 0;
    let current = '';
    for (let i = 0; i < s.length; i++) {
        if (current.includes(s[i])) {
            current = current.slice(current.indexOf(s[i]) + 1);
        }
        current += s[i];
        if (current.length > longest) {
            longest = current.length;
        }
    }
    return longest;
};
// @lc code=end

