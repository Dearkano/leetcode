/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let node = headA;
  const set = new Set();
  while (node) {
    set.add(node);
    node = node.next;
  }
  node = headB;
  while (node) {
    if (set.has(node)) return node;
    node = node.next;
  }
  return null;
};
