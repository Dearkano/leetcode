/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists) {
//   const root = new ListNode(0);
//   let node = root;
//   const findSmallest = () => {
//     let min = Infinity;
//     let ans = -1;
//     for (let i = 0; i < lists.length; i++) {
//       if (lists[i] && lists[i].val < min) {
//         min = lists[i].val;
//         ans = i;
//       }
//     }
//     return ans;
//   };
//   while (true) {
//     const idx = findSmallest();
//     if (idx === -1) break;
//     node.next = lists[idx];
//     lists[idx] = lists[idx].next;
//     node = node.next;
//   }
//   return root.next;
// };

var mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

var mergeKLists = (lists) => {
  if (lists.length === 0) return null;
  let len = lists.length;
  while (len > 1) {
    for (let i = 0; i < Math.floor(len / 2); i++) {
      lists[i] = mergeTwoLists(lists[i], lists[len - i - 1]);
    }
    len = Math.ceil(len / 2);
  }
  return lists[0];
};
