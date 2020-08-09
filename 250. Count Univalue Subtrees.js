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
var countUnivalSubtrees = function (root) {
  if (!root) return 0;
  const count = isUniSubtree(root) ? 1 : 0;
  return (
    count + countUnivalSubtrees(root.left) + countUnivalSubtrees(root.right)
  );
};

const isUniSubtree = (node) => {
  if (!node) return false;
  let ans = true;
  if (node.left) {
    ans = ans && node.val === node.left.val;
    ans = ans && isUniSubtree(node.left);
  }
  if (node.right) {
    ans = ans && node.val === node.right.val;
    ans = ans && isUniSubtree(node.right);
  }
  return ans;
};

console.log(
  countUnivalSubtrees({
    val: 5,
    left: {
      val: 1,
      left: { val: 5 },
      right: { val: 5 },
    },
    right: {
      val: 5,
      right: {
        val: 5,
      },
    },
  })
);
