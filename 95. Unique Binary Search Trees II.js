/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var generateTrees = function (n) {
  if (n === 0) return [];
  const ans = [];
  ans[0] = [null];
  ans[1] = [new TreeNode(1)];
  ans[2] = [
    new TreeNode(2, ans[1][0], null),
    new TreeNode(1, null, new TreeNode(2)),
  ];
  for (let i = 3; i <= n; i++) {
    ans[i] = [];
    for (let j = 0; j < i; j++) {
      const leftTreeNodeNum = j;
      const rightTreeNodeNum = i - j - 1;
      for (const leftTree of ans[leftTreeNodeNum]) {
        for (const rightTree of ans[rightTreeNodeNum]) {
          ans[i].push(
            new TreeNode(j + 1, leftTree, moveTree(rightTree, j + 1))
          );
        }
      }
    }
  }
  return ans[n];
};

function moveTree(tree, offset) {
  if (tree === null) return null;
  const node = new TreeNode(tree.val + offset);
  node.left = moveTree(tree.left, offset);
  node.right = moveTree(tree.right, offset);
  return node;
}

console.log(generateTrees(3));
