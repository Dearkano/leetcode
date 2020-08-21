/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let node = head;
  let tail = null;
  let pre = null;
  let cnt = 0;
  while (node) {
    if (!node.next) tail = node;
    node.pre = pre;
    pre = node;
    node = node.next;
    cnt++;
  }

  while (cnt > 1) {
    if (head.val !== tail.val) return false;
    head = head.next;
    tail = tail.pre;
    cnt -= 2;
  }
  return true;
};
