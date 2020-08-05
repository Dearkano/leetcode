/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let left = new ListNode(0);
  let right = new ListNode(0);
  let node = head;
  let l = left;
  let r = right;
  while (node) {
    if (node.val < x) {
      l.next = node;
      l = l.next;
    } else {
      r.next = node;
      r = r.next;
    }
    node = node.next
  }
  r.next = null
  l.next = right.next;
  return left.next;
};
