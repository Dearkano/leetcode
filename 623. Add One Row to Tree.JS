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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function (root, v, d) {
  if (d === 1) {
    const newNode = new TreeNode(v);
    newNode.left = root;
    return newNode;
  }
  const levelOrderTraversal = (siblings, depth) => {
    if (siblings.length === 0) return;
    const children = [];
    for (const node of siblings) {
      if (d !== depth + 1) {
        if (node.left) children.push(node.left);
        if (node.right) children.push(node.right);
      } else {
        const newLeftNode = new TreeNode(v);
        newLeftNode.left = node.left;
        node.left = newLeftNode;

        const newRightNode = new TreeNode(v);
        newRightNode.right = node.right;
        node.right = newRightNode;
      }
    }
    if (d === depth + 1 || children.length === 0) return;
    levelOrderTraversal(children, depth + 1);
  };
  levelOrderTraversal([root], 1);
  return root;
};

console.log(
  addOneRow(
    {
      val: 4,
      left: { val: 2, left: { val: 3 }, right: { val: 1 } },
      right: { val: 6, left: { val: 5 } },
    },
    1,
    2
  )
);
