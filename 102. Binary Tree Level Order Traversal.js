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
    const childs = [];
    ans[ans.length] = [];
    for (const node of siblings) {
      ans[ans.length - 1].push(node.val);
      if (node.left) childs.push(node.left);
      if (node.right) childs.push(node.right);
    }
    if (childs.length === 0) return;
    _levelOrder(childs);
  };
  _levelOrder([root]);
  return ans;
};
