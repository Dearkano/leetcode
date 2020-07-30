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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const stack = [];
  const dfs = (node) => {
    if (!node) return;
    stack.push(node);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  if (stack.length < 1) return;
  root = stack[0];
  let node = root;
  for (let i = 1; i < stack.length; i++) {
    node.left = null;
    node.right = stack[i];
    node = node.right;
  }
};
