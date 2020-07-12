/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    var cur = head
    var map = new Map()
    while (cur) {
        if (map.get(cur)) {
            return cur
        }
        map.set(cur, true)
        cur = cur.next
    }
    return null
};

console.log()