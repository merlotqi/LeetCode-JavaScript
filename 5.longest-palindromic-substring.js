/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s.length < 1) return "";

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    // 奇数长度的回文（以单个字符为中心）
    const len1 = expandAroundCenter(s, i, i);
    // 偶数长度的回文（以两个字符之间的空隙为中心）
    const len2 = expandAroundCenter(s, i, i + 1);

    // 取两种情况下更长的那个
    const len = Math.max(len1, len2);

    // 如果找到更长的回文，更新起始和结束位置
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
// @lc code=end
