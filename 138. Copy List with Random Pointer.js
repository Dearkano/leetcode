/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  let node = head;
  const map = new Map();

  while (node) {
    map.set(node, new Node(node.val));
    node = node.next;
  }

  node = head;
  let copyNode = map.get(head);
  while (node) {
    if (node.next) {
      copyNode.next = map.get(node.next);
    }
    if (node.random) {
      copyNode.random = map.get(node.random);
    }
    copyNode = copyNode.next;
    node = node.next;
  }
  return map.get(head);
};
