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
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  const traversal = (node, max, min) => {
    if (!node) return max - min;
    max = Math.max(node.val, max);
    min = Math.min(node.val, min);
    return Math.max(
      traversal(node.left, max, min),
      traversal(node.right, max, min)
    );
  };

  return traversal(root, root.val, root.val);
};

console.log(maxAncestorDiff({ val: 0, right: { val: 1 } }));
