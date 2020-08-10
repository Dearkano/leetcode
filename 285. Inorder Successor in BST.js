/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  let node = root;
  let ans = null;
  const path = [];
  while (node) {
    path.push(node);
    if (node.val === p.val) {
      if (node.right) {
        let n = node.right;
        while (n) {
          path.push(n);
          n = n.left;
        }
      }
      break;
    } else if (node.val < p.val) {
      node = node.right;
    } else {
      node = node.left;
    }
  }

  let min = { val: Infinity };
  for (const node of path) {
    if (node.val > p.val && node.val < min.val) {
      min = node;
    }
  }
  return min.val === Infinity ? null : min;
};

console.log(
  inorderSuccessor({ val: 2, left: { val: 1 }, right: { val: 3 } }, { val: 1 })
);
