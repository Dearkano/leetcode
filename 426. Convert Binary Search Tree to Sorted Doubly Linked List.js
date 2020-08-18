/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
  let head = null;
  let tail = null;
  const traversal = (node) => {
    if (!node) return null;
    traversal(node.left);
    if (tail) {
      tail.right = node;
      node.left = tail;
    } else {
      head = node;
    }
    tail = node;
    traversal(node.right);
  };
  traversal(root);

  head.left = tail;
  tail.right = head;
  return head;
};

// console.log(
//   treeToDoublyList({
//     val: 4,
//     left: { val: 2, left: { val: 1 }, right: { val: 3 } },
//     right: { val: 5 },
//   })
// );

console.log(treeToDoublyList({ val: 1 }));
