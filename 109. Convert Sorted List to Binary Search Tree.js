/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const getSubTree = (left, right) => {
    if (left > right) return null;
    if (left === right) return new TreeNode(arr[left]);
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(arr[mid]);
    node.left = getSubTree(left, mid - 1);
    node.right = getSubTree(mid + 1, right);
    return node;
  };
  return getSubTree(0, arr.length - 1);
};
