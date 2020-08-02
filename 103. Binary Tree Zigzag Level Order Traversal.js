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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const ans = [];
  const _levelOrder = (siblings, dir) => {
    if (siblings.length === 0) return;
    const children = [];
    const values = [];
    for (const node of siblings) {
      values.push(node.val);
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }
    if (dir) ans.push(values);
    else ans.push(values.reverse());
    if (children.length === 0) return;
    _levelOrder(children, !dir);
  };
  _levelOrder([root], true);
  return ans;
};
