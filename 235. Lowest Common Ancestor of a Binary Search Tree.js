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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === q || root === p) return root;
  if (p.val > q.val) {
    const temp = p;
    p = q;
    q = temp;
  }
  let node = root;
  while (node) {
    if (node.val <= q.val && node.val >= p.val) return node;
    else if (node.val > q.val) node = node.left;
    else node = node.right;
  }
};
