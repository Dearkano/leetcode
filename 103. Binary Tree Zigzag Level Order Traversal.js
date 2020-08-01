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
    const childs = [];
    const values = [];
    for (const node of siblings) {
      values.push(node.val);
      if (node.left) childs.push(node.left);
      if (node.right) childs.push(node.right);
    }
    if (dir) ans.push(values);
    else ans.push(values.reverse());
    if (childs.length === 0) return;
    _levelOrder(childs, !dir);
  };
  _levelOrder([root], true);
  return ans;
};
