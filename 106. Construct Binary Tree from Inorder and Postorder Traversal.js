function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return recursiveFind(inorder, postorder);
};

const recursiveFind = (inorder, postorder) => {
  let n = inorder.length;
  if (n === 0) return null;
  let root = postorder[n - 1];
  const rootNode = new TreeNode(root);
  let rootIndex = inorder.indexOf(root);
  const left = inorder.slice(0, rootIndex);
  const right = inorder.slice(rootIndex + 1);
  const leftPostOrder = [];
  const rightPostOrder = [];
  for (const i of left) {
    leftPostOrder.push({ val: i, index: postorder.indexOf(i) });
  }
  for (const i of right) {
    rightPostOrder.push({ val: i, index: postorder.indexOf(i) });
  }
  leftPostOrder.sort((a, b) => a.index - b.index);
  rightPostOrder.sort((a, b) => a.index - b.index);
  const leftP = [];
  const rightP = [];
  for (const item of leftPostOrder) leftP.push(item.val);
  for (const item of rightPostOrder) rightP.push(item.val);
  const leftTree = recursiveFind(left, leftP);
  const rightTree = recursiveFind(right, rightP);
  rootNode.left = leftTree;
  rootNode.right = rightTree;
  return rootNode;
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
