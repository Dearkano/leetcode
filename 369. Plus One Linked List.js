/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function (head) {
  if (!head) return head;
  const dummy = new ListNode(0);
  dummy.next = head;
  let node = dummy;
  let lastNot9 = dummy;
  while (node.next) {
    node = node.next;
    if (node.val !== 9) {
      lastNot9 = node;
    }
  }
  // tail != 9
  if (node.val !== 9) {
    node.val++;
  } else {
    lastNot9.val++;
    node = lastNot9.next;
    while (node) {
      node.val = 0;
      node = node.next;
    }
  }
  if (dummy.val === 0) return head;
  return dummy;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
console.log(plusOne({ val: 9 }));
console.log(plusOne({ val: 1, next: { val: 2, next: { val: 3 } } }));
