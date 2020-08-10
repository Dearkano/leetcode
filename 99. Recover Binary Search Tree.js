/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  morrisInorderTraversal(root);
};

const morrisInorderTraversal = (root) => {
  let cur = root;
  let pre = null;
  let temp = null;
  let first = null;
  let second = null;
  while (cur) {
    if (!cur.left) {
      if (pre && pre.val > cur.val) {
        if (!first) {
          first = pre;
          second = cur;
        } else {
          second = cur;
        }
      }
      pre = cur;
      cur = cur.right;
    } else {
      temp = cur.left;
      while (temp.right && temp.right !== cur) temp = temp.right;
      if (!temp.right) {
        temp.right = cur;
        cur = cur.left;
      } else {
        temp.right = null;
        if (pre && pre.val > cur.val) {
          if (!first) {
            first = pre;
            second = cur;
          } else {
            second = cur;
          }
        }
        pre = cur;
        cur = cur.right;
      }
    }
  }
  const t = first.val;
  first.val = second.val;
  second.val = t;
};
