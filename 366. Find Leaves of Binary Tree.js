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
var findLeaves = function (root) {
  const ans = [];
  const dfs = (node) => {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    const d = Math.max(left, right) + 1;
    if (!ans[d]) ans[d] = [];
    ans[d].push(node.val);
    return d;
  };
  dfs(root);
  ans.shift()
  return ans;
};
console.log(
  findLeaves({
    val: 1,
    left: { val: 2, left: { val: 4 }, right: { val: 5 } },
    right: { val: 3 },
  })
);
