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
var findBottomLeftValue = function (root) {
  if (!root) return;
  let ans = 0;
  const levelTraversal = (siblings) => {
    const children = [];
    for (const node of siblings) {
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }
    if (children.length === 0) {
      ans = siblings[0].val;
      return;
    }
    levelTraversal(children);
  };
  levelTraversal([root]);
  return ans;
};
