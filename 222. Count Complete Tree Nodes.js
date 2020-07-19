function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
// var countNodes = function (root) {
//   if (!root) return 0;
//   const queue = [];
//   let count = 0;
//   queue.push(root);
//   while (queue.length > 0) {
//     const node = queue.shift();
//     count++;
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return count;
// };
// const countHeight = (node) => {
//   if (!node) return -1;
//   return 1 + countHeight(node.left);
// };
// const countNodes = function (root) {
//   let height = countHeight(root);
//   let nodes = 0;
//   while (root) {
//     if (countHeight(root.right) === height - 1) {
//       nodes += Math.pow(2, height);
//       root = root.right;
//     } else {
//       nodes += Math.pow(2, height-1) ;
//       root = root.left;
//     }
//     height--;
//   }
//   return nodes
// };

const countNodes = function (root) {
  if (!root) return 0;
  let left = root.left;
  let right = root.left;
  let num = 1;
  while (right) {
    left = left.left;
    right = right.right;
    num = num << 1;
  }
  if (left) return countNodes(root.left) + num;
  else return countNodes(root.right) + num;
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

console.log(countNodes(formTree([1, 2, 3, 4, 5, 6, 7, 8, 9])));
