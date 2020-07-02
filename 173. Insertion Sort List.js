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
var insertionSortList = function (head) {
    var arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    arr.sort((a, b) => a - b)
    var newHead = null
    var node = null
    for (var item of arr) {
        if (!newHead) {
            node = {
                val: item,
                next: null
            }
            newHead = node
            continue
        }
        node.next = {
            val: item,
            next: null
        }
        node = node.next
    }
    return newHead
};

var h = {
    val: -2147483647,
    next: {
        val: -2147483648,
        next: null
    }
}

console.log(insertionSortList(h))