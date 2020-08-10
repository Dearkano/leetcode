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
var findFrequentTreeSum = function (root) {
  const map = new Map();
  const countSum = (node) => {
    if (!node) return 0;
    const left = countSum(node.left);
    const right = countSum(node.right);
    const sum = node.val + left + right;
    if (!map.get(sum)) map.set(sum, 0);
    map.set(sum, map.get(sum) + 1);
    return sum;
  };
  countSum(root);
  let ans = [];
  let maxCount = 0;
  for (const pair of map) {
    const [sum, count] = pair;
    if (maxCount < count) {
      maxCount = count;
      ans = [sum];
    } else if (maxCount === count) {
      ans.push(sum);
    }
  }
  return ans;
};
