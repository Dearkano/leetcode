/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
  let n = null;
  if (!node.right) {
    n = node.parent;
    while (n) {
      if (n.val > node.val) return n;
      n = n.parent;
    }
  } else {
    n = node.right;
    while (n) {
      if (!n.left) return n;
      n = n.left;
    }
  }
  return null;
};
