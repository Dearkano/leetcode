/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;
  let slow = head;
  let fast = head;
  let len = 0;
  let node = head;
  while (node) {
    len++;
    node = node.next;
  }
  if (k % len === 0) return head;
  k = k % len;
  for (let i = 1; i <= k; i++) {
    fast = fast.next;
    if (!fast) fast = head;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  const newHead = slow.next;
  slow.next = null;
  fast.next = head;
  return newHead;
};

console.log(rotateRight({ val: 0, next: { val: 1 } }, 2));
