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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  let ans = 0;
  const traversal = (node) => {
    if (!node) return;
    if (node.val <= R && node.val >= L) ans += node.val;
    if (node.val > L) traversal(node.left);
    if (node.val < R) traversal(node.right);
  };
  traversal(root);
  return ans;
};
