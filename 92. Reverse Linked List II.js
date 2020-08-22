/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (m === n) return head;
  let cnt = 1;
  let cur = head;
  let p = null;
  while (cur) {
    if (cnt >= m && cnt <= n) {
      let pre = null;
      const tail = cur;
      while (cnt <= n) {
        const temp = cur;
        cur = cur.next;
        temp.next = pre;
        pre = temp;
        cnt++;
      }
      if (p) p.next = pre;
      else head = pre;
      tail.next = cur;
    } else {
      p = cur;
      cur = cur.next;
      cnt++;
    }
  }
  return head;
};
