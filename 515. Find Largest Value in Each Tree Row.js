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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  let ans = [];
  const levelTraversal = (siblings) => {
    const children = [];
    let max = siblings[0].val;
    for (const node of siblings) {
      if (max < node.val) max = node.val;
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }
    ans.push(max);
    if (children.length === 0) {
      return;
    }
    levelTraversal(children);
  };
  levelTraversal([root]);
  return ans;
};
