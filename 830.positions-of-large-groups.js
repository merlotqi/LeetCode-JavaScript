/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    const result = [];
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (end === s.length - 1 || s[end] !== s[end + 1]) {
            if (end - start >= 2) {
                result.push([start, end]);
            }
            start = end + 1;
        }
    }
    return result;
};
// @lc code=end

