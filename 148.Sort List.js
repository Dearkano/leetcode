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

// var _mergeSort = (ar, start, end) => {
//     if (start === end) return ar
//     var mid = start + parseInt((end - start) / 2)
//     var arr = _mergeSort(ar, start, mid)
//     arr = _mergeSort(arr, mid + 1, end)
//     arr = merge(arr, start, mid, end)
//     return arr
// }

// var merge = (arr, start, mid, end) => {
//     var i = start
//     var j = mid + 1
//     var ans = []
//     while (i < mid + 1 || j < end + 1) {
//         if (i < mid + 1 && j < end + 1) {
//             if (arr[i] < arr[j]) {
//                 ans.push(arr[i])
//                 i++
//             } else {
//                 ans.push(arr[j])
//                 j++
//             }
//         } else if (i >= mid + 1 && j < end + 1) {
//             ans.push(...arr.slice(j, end + 1))
//             break
//         } else {
//             ans.push(...arr.slice(i, mid + 1))
//             break
//         }
//     }

//     arr = [...arr.slice(0, start), ...ans, ...arr.slice(end + 1, arr.length)]
//     return arr
// }
// var sortList = function (head) {
//     var arr = []
//     while (head) {
//         arr.push(head.val)
//         head = head.next
//     }
//     var ans = _mergeSort(arr, 0, arr.length-1)
//     console.log('length='+ans.length)
//     var newHead = null
//     var node = null
//     for (var item of ans) {
//         if (!newHead) {
//             node = {
//                 val: item,
//                 next: null
//             }
//             newHead = node
//             continue
//         }
//         node.next = {
//             val: item,
//             next: null
//         }
//         node = node.next
//     }
//     return newHead
// };

var sortList = function (head) {
    var len = 0
    var cur = head
    while (cur) {
        len++
        cur = cur.next
    }
    for (let i = 1; i < len; i *= 2) {
        cur = head
        var dummy = {
            val: 0,
            next: null
        }
        var tail = dummy
        while (cur) {
            var l1 = cur
            var l2 = split(l1, i)
            cur = split(l2, i)
            tail = merge(l1, l2, tail)
        }
        head = dummy.next
    }
    return head
}

var split = function (l, n) {
    for (let i = 1; i < n && l; i++) {
        l = l.next
    }
    if (!l) return null
    var _l = l.next
    l.next = null
    return _l
}

var merge = function (l1, l2, head) {
    var cur = head
    while (l1 && l2) {
        if (l1.val > l2.val) {
            cur.next = l2
            l2 = l2.next
        } else {
            cur.next = l1
            l1 = l1.next
        }
        cur = cur.next
    }
    if (l1) cur.next = l1
    if (l2) cur.next = l2
    while(cur.next) {
        cur = cur.next
    }
    return cur
}

console.log(sortList({
    val: 5,
    next: {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}))