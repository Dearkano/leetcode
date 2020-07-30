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
var sumNumbers = function (root) {
  const dfs = (node) => {
    if (!node) return [];
    if (!node.left && !node.right) return [`${node.val}`];
    const s = [];
    const leftChildStrings = dfs(node.left);
    for (const str of leftChildStrings) {
      s.push(`${node.val}` + str);
    }
    const rightChildStrings = dfs(node.right);
    for (const str of rightChildStrings) {
      s.push(`${node.val}` + str);
    }
    return s;
  };
  const numStrings = dfs(root);
  let ans = 0;
  for (const s of numStrings) {
    ans += Number(s);
  }
  return ans;
};
