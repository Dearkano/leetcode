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
var rob = function (root) {
  if (!root) return 0;
  const getMaxFromSubTree = (node) => {
    if (!node) return [0, 0];
    const left = getMaxFromSubTree(node.left);
    const right = getMaxFromSubTree(node.right);
    return [
      Math.max(left[0], left[1]) + Math.max(right[0], right[1]),
      node.val + left[0] + right[0],
    ];
  };
  const ans = getMaxFromSubTree(root);
  return Math.max(ans[0], ans[1]);
};

console.log(
  rob({ val: 4, left: { val: 1, left: { val: 2, left: { val: 3 } } } })
);
