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
 * @return {string}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// let cache = [];
// let smallest = "";
// const smallestFromLeaf = function (root) {
//   if (!root) return null;
//   cache = [];
//   smallest = ''
//   dfs(root);
//   return smallest;
// };

// const dfs = (node) => {
//   cache.push(String.fromCharCode(node.val + 97));
//   if (!node.left && !node.right) {
//     const str = [].concat(cache).reverse().join("");
//     if (str < smallest || smallest.length === 0) smallest = str;
//     return;
//   }
//   if (node.left) {
//     dfs(node.left);
//     cache.pop();
//   }
//   if (node.right) {
//     dfs(node.right);
//     cache.pop();
//   }
// };
const smallestFromLeaf = function (root) {
  return dfs(root, "");
};

const dfs = (node, s) => {
  if (!node) return "";
  const cur = String.fromCharCode(97 + node.val) + s;
  const left = dfs(node.left, cur);
  const right = dfs(node.right, cur);
  let small;
  if (left && right) {
    small = left < right ? left : right;
  } else if (left) {
    small = left;
  } else if (right) {
    small = right;
  } else {
    small = cur;
  }
  return small;
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

console.log(smallestFromLeaf(formTree([0, null, 1])));
