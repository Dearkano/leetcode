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
var pseudoPalindromicPaths = function (root) {
  const count = new Array(10).fill(0);
  let ans = 0;
  const dfs = (node) => {
    count[node.val]++;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    if (!node.left && !node.right) {
      let odd = 0;
      for (let i = 0; i < 10; i++) if (count[i] % 2 !== 0) odd++;
      if (odd <= 1) ans++;
    }
    count[node.val]--;
  };
  dfs(root);
  return ans;
};
console.log(
  pseudoPalindromicPaths({
    val: 2,
    left: { val: 3, left: { val: 3 }, right: { val: 1 } },
    right: { val: 1, right: { val: 1 } },
  })
);
