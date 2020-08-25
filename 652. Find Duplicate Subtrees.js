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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const set = new Set();
  const ansSet = new Set();
  const ans = [];

  const postorderTraversal = (node) => {
    if (!node) return "#";
    const left = postorderTraversal(node.left);
    const right = postorderTraversal(node.right);
    const hash = `${node.val},${left},${right}`;
    if (set.has(hash) && !ansSet.has(hash)) {
      ans.push(node);
      ansSet.add(hash);
    } else {
      set.add(hash);
    }
    return hash;
  };
  postorderTraversal(root);
  return ans;
};
