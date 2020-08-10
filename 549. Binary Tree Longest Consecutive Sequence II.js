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
var longestConsecutive = function (root) {
  let ans = 0;
  const getLongestConsecutive = (node) => {
    if (!node) return { increase: 0, decrease: 0 };
    let increase = 1;
    let decrease = 1;
    if (node.left) {
      const left = getLongestConsecutive(node.left);
      if (node.left.val + 1 === node.val) {
        increase = 1 + left.increase;
      } else if (node.left.val - 1 === node.val) {
        decrease = 1 + left.decrease;
      }
    }
    if (node.right) {
      const right = getLongestConsecutive(node.right);
      if (node.right.val + 1 === node.val) {
        increase = Math.max(increase, right.increase + 1);
      } else if (node.right.val - 1 === node.val) {
        decrease = Math.max(decrease, right.decrease + 1);
      }
    }
    ans = Math.max(ans, increase + decrease - 1);
    return { increase, decrease };
  };
  getLongestConsecutive(root);
  return ans;
};
