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
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
  if (!root) return [];
  const ans = [];
  const path = []
  const dfs = (node, index, parentVal) => {
    path.push(node.val);
    node.val = node.val + parentVal;
    if (node.left) dfs(node.left, 2 * index, node.val);
    if (node.right) dfs(node.right, 2 * index + 1, node.val);
    if (!node.left && !node.right) {
      if (node.val === sum) {
        ans.push([].concat(path));
      }
    }
    path.pop()
  };
  dfs(root, 1, 0);
  return ans;
};
const formTree = (arr) => {
  const len = arr.length;
  if (!len) return null;
  const treeArr = [];
  for (let i = len - 1; i >= 0; i--) {
    if (arr[i] === null) {
      treeArr[i] = null;
    } else {
      if (2 * i + 1 > len - 1) {
        treeArr[i] = new TreeNode(arr[i]);
      } else if (2 * i + 2 > len - 1) {
        treeArr[i] = new TreeNode(arr[i], treeArr[2 * i + 1]);
      } else {
        treeArr[i] = new TreeNode(
          arr[i],
          treeArr[2 * i + 1],
          treeArr[2 * i + 2]
        );
      }
    }
  }
  return treeArr[0];
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(
  pathSum(formTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)
);
