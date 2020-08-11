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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const map = new Map();
  const find = (target) => {
    if (map.get(target) !== undefined) return map.get(target);
    let node = root;
    while (node) {
      map.set(node.val, true);
      if (node.val < target) {
        node = node.right;
      } else if (node.val > target) {
        node = node.left;
      } else {
        return true;
      }
    }
    return false;
  };
  const dfs = (node) => {
    if (!node) return false;
    if (find(k - node.val) && k !== node.val * 2) return true;
    if (dfs(node.left)) return true;
    if (dfs(node.right)) return true;
    return false;
  };
  return dfs(root);
};

console.log(
  findTarget(
    {
      val: 1,
    },
    2
  )
);
