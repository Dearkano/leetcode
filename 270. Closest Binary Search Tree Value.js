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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let node = root;
  let min = Infinity;
  while (node) {
    if (Math.abs(node.val - target) < Math.abs(min - target)) {
      min = node.val;
    }
    if (node.val > target) {
      node = node.left;
    } else if (node.val < target) {
      node = node.right;
    } else {
      return node.val;
    }
  }
  return min;
};
