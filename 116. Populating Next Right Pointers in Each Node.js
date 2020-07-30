/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  const queue = [];
  let p = 0;
  let level = 0;
  let nodes = Math.pow(2, level + 1) - 1;
  queue.push(root);
  while (p < queue.length) {
    const node = queue[p++];
    if (p < nodes) {
      node.next = queue[p];
    } else {
      level++;
      nodes = Math.pow(2, level + 1) - 1;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};
