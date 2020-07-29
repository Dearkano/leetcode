function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  let node = root;
  let count = 0;
  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    if (stack.length > 0) {
      node = stack.pop();
      count++;
      if (count === k) return node.val;
      node = node.right;
    }
  }
  return traversal(root, 0);
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
console.log(kthSmallest(formTree([3, 1, 4, null, 2]), 1));
