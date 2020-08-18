/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  const traversal = (node) => {
    if (!node) return false;
    if (node.val === t.val && check(node, t)) return true;
    return traversal(node.left) || traversal(node.right);
  };
  const check = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val === b.val && check(a.left, b.left) && check(a.right, b.right);
  };
  if (traversal(s)) return true;

  return false;
};
