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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  let parent = null;
  let dir = -1;
  let node = root;
  while (node) {
    if (node.val === key) {
      let subRoot = null;
      if (!node.left && !node.right) {
        if (!parent) root = null;
        else {
          if (dir) parent.left = null;
          else parent.right = null;
        }
      } else if (!node.left) {
        if (!parent) root = node.right;
        else {
          if (dir) parent.left = node.right;
          else parent.right = node.right;
        }
      } else if (!node.right) {
        if (!parent) root = node.left;
        else {
          if (dir) parent.left = node.left;
          else parent.right = node.left;
        }
      } else {
        subRoot = node.left;
        const leftRightRoot = subRoot.right || null;
        subRoot.right = node.right;
        let n = node.right;
        while (n) {
          if (!n.left) {
            n.left = leftRightRoot;
            break;
          }
          n = n.left;
        }
        if (!parent) root = subRoot;
        else {
          if (dir) parent.left = subRoot;
          else parent.right = subRoot;
        }
      }
      break;
    }
    parent = node;
    if (node.val > key) {
      node = node.left;
      dir = 1;
    } else {
      node = node.right;
      dir = 0;
    }
  }

  return root;
};

console.log(
  deleteNode(
    {
      val: 5,
      left: { val: 3, left: { val: 2 }, right: { val: 4 } },
      right: {
        val: 6,
        right: { val: 7 },
      },
    },
    3
  )
);
