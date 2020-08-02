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
var levelOrder = function (root) {
  if (!root) return [];
  const ans = [];
  const _levelOrder = (siblings) => {
    if (siblings.length === 0) return;
    const children = [];
    ans[ans.length] = [];
    for (const node of siblings) {
      ans[ans.length - 1].push(node.val);
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }
    if (children.length === 0) return;
    _levelOrder(children);
  };
  _levelOrder([root]);
  return ans;
};
