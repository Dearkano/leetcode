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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  const evenHead = new ListNode(head.next.val);
  let curOdd = head;
  let curEven = evenHead;
  let node = head.next.next;
  let odd = true;
  while (node) {
    if (odd) {
      curOdd.next = node;
      curOdd = curOdd.next;
    } else {
      curEven.next = node;
      curEven = curEven.next;
    }
    odd = !odd;
    node = node.next;
  }
  curEven.next = null
  curOdd.next = evenHead;
  return head;
};
console.log(oddEvenList({ val: 1, next: { val: 2, next: { val: 3 } } }));
