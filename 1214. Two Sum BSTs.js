/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function (root1, root2, target) {
  if (!root1 || !root2) return false;
  const find = (num) => {
    let node = root2;
    while (node) {
      if (node.val > num) {
        node = node.left;
      } else if (node.val < num) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  };
  const queue = [root1];
  let idx = 0;
  while (idx < queue.length) {
    const cur = queue[idx++];
    if (find(target - cur.val)) return true;
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  return false;
};
