/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    if(!root) return true;

    const mirror = (left, right) => {
        if(!left && !right) return true;
        if(!left || !right) return false;
        return left.val === right.val && mirror(left.left, right.right) && mirror(left.right, right.left);
    }

    return mirror(root.left, root.right);
    
};
// @lc code=end

