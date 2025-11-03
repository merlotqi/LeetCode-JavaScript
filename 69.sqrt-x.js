/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//     if (x === 0 || x === 1) return x;

//     let left = 1;
//     let right = Math.floor(x / 2);
//     let result = 0;

//     while (left <= right) {
//         const mid = Math.floor(left + (right - left) / 2);
//         const square = mid * mid;

//         if (square === x) {
//             return mid;
//         }
//         else if(square < x) { 
//             result = mid;
//             left = mid + 1;
//         }
//         else {
//             right = mid - 1;
//         }
//     }

//     return result;
// };

var mySqrt = function (x) {
    if (x < 2) return x;

    let guess = x >> 1;

    while (guess * guess > x) {
        guess = (guess + Math.floor(x / guess)) >> 1;
    }

    return guess;
};
// @lc code=end

