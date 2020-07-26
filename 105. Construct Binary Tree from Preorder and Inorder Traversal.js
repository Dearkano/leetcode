function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} inorder
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return recursiveFind(inorder, preorder);
};

const recursiveFind = (inorder, preorder) => {
  let n = inorder.length;
  if (n === 0) return null;
  let root = preorder[0];
  const rootNode = new TreeNode(root);
  let rootIndex = inorder.indexOf(root);
  const left = inorder.slice(0, rootIndex);
  const right = inorder.slice(rootIndex + 1);
  const leftpreorder = [];
  const rightpreorder = [];
  for (const i of left) {
    leftpreorder.push({ val: i, index: preorder.indexOf(i) });
  }
  for (const i of right) {
    rightpreorder.push({ val: i, index: preorder.indexOf(i) });
  }
  leftpreorder.sort((a, b) => a.index - b.index);
  rightpreorder.sort((a, b) => a.index - b.index);
  const leftP = [];
  const rightP = [];
  for (const item of leftpreorder) leftP.push(item.val);
  for (const item of rightpreorder) rightP.push(item.val);
  const leftTree = recursiveFind(left, leftP);
  const rightTree = recursiveFind(right, rightP);
  rootNode.left = leftTree;
  rootNode.right = rightTree;
  return rootNode;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
