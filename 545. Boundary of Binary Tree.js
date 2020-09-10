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
var boundaryOfBinaryTree = function (root) {
  if (!root) return [];
  const ans = [root.val];
  let node = root.left;
  while (true) {
    if (!node || (!node.left && !node.right)) break;
    ans.push(node.val);
    if (node.left) node = node.left;
    else node = node.right;
  }

  const dfs = (node) => {
    if (!node) return;
    if (!node.left && !node.right) {
      ans.push(node.val);
      return;
    }
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  };
  dfs(root.left);
  dfs(root.right);
  const traverseRight = (node) => {
    if (!node || (!node.left && !node.right)) return;
    if (node.right) traverseRight(node.right);
    else traverseRight(node.left);
    ans.push(node.val);
  };
  traverseRight(root.right);
  return ans;
};
