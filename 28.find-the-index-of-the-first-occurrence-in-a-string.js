/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;

    if (m == 0) return 0;
    if (n < m) return -1;

    const next = buildNext(needle);

    let i = 0;
    let j = 0;

    while (i < n && j < m) {
        if (j == -1 || haystack[i] == needle[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }

    if (j == m) return i - j;

    return -1;
};


function buildNext(pattern) {
    const m = pattern.length;
    const next = new Array(m);
    next[0] = -1;

    let i = 0;
    let j = -1;

    while (i < m - 1) {
        if (j == -1 || pattern[i] == pattern[j]) {
            i++;
            j++;
            next[i] = j;
        } else {
            j = next[j];
        }
    }

    return next;
}

// @lc code=end

