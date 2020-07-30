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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const ans = [];
  const levelTraversal = (siblings) => {
    if (siblings.length === 0) return;
    const childs = [];
    for (const node of siblings) {
      if (node.left) childs.push(node.left);
      if (node.right) childs.push(node.right);
    }
    if (childs.length === 0) return;
    ans.push(childs[childs.length - 1].val);
    levelTraversal(childs);
  };
  ans.push(root.val);
  levelTraversal([root]);
  return ans;
};
console.log(
  rightSideView({
    val: 1,
    left: {
      val: 2,
      left: { val: 4 },
    },
    right: {
      val: 3,
    },
  })
);
