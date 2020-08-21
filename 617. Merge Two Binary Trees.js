/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  const traversal = (node1, node2) => {
    if (!node2) return;
    node1.val += node2.val;
    if (!node1.left) node1.left = node2.left;
    else traversal(node1.left, node2.left);
    if (!node1.right) node1.right = node2.right;
    else traversal(node1.right, node2.right);
  };
  if (!t1) return t2;
  traversal(t1, t2);
  return t1;
};
