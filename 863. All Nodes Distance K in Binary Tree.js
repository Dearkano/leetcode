/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
  const map = new Map();
  const find = (node) => {
    if (!node) return -1;
    if (node.val === target.val) {
      map.set(node, 0);
      return 0;
    }
    const left = find(node.left);
    if (left >= 0) {
      map.set(node, left + 1);
      return left + 1;
    }
    const right = find(node.right);
    if (right >= 0) {
      map.set(node, right + 1);
      return right + 1;
    }
    return -1;
  };
  const ans = [];
  const dfs = (node, distance) => {
    if (!node) return;
    if (map.get(node) !== undefined) distance = map.get(node);
    if (distance === K) ans.push(node.val);
    dfs(node.left, distance + 1);
    dfs(node.right, distance + 1);
  };
  find(root);
  dfs(root);
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

console.log(distanceK(formTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), 5, 2));
