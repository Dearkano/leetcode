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
 * @return {number[][]}
 */
// var verticalOrder = function (root) {
//   if (!root) return [];
//   const ans = [];
//   let min = Infinity;
//   const levelTravsal = (siblings) => {
//     if (siblings.length === 0) return;
//     const childs = [];
//     for (const node of siblings) {
//       if (node.col < min) min = node.col;
//       if (!ans[node.col]) ans[node.col] = [];
//       ans[node.col].push(node.val);
//       if (node.left) {
//         node.left.col = node.col - 1;
//         childs.push(node.left);
//       }
//       if (node.right) {
//         node.right.col = node.col + 1;
//         childs.push(node.right);
//       }
//     }
//     if (childs.length === 0) return;
//     levelTravsal(childs);
//   };
//   root.col = 0;
//   levelTravsal([root]);
//   const _ans = [];
//   for (const i in ans) {
//     _ans[Number(i) - min] = ans[i];
//   }
//   return _ans;
// };
const verticalOrder = (root) => {
  if (!root) return [];
  const nodeQueue = [];
  const colQueue = [];
  const map = new Map();
  let idx = 0;
  let min = Infinity;
  let max = 0;
  nodeQueue.push(root);
  colQueue.push(0);
  while (idx < nodeQueue.length) {
    const node = nodeQueue[idx];
    const col = colQueue[idx];
    if (min > col) min = col;
    if (max < col) max = col;
    if (!map.get(col)) map.set(col, []);
    map.get(col).push(node.val);
    if (node.left) {
      nodeQueue.push(node.left);
      colQueue.push(col - 1);
    }
    if (node.right) {
      nodeQueue.push(node.right);
      colQueue.push(col + 1);
    }
    idx++;
  }
  const ans = [];
  for (let i = min; i <= max; i++) {
    ans.push(map.get(i));
  }
  return ans;
};
