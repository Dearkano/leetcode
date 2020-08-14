/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const ans = [];
  const preorderTraversal = (node) => {
    if (!node) ans.push("X");
    else {
      ans.push(node.val);
      preorderTraversal(node.left);
      preorderTraversal(node.right);
    }
  };
  if (!root) return "";
  preorderTraversal(root);
  return ans.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  const preorder = data.split(",");
  let idx = 0;
  const buildBinaryTree = () => {
    const cur = preorder[idx++];
    if (cur === "X") return null;
    else {
      const node = new TreeNode(Number(cur));
      node.left = buildBinaryTree();
      node.right = buildBinaryTree();
      return node;
    }
  };
  return buildBinaryTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const s = serialize({
  val: 3,
  left: { val: 2, left: { val: 3 } },
  right: { val: 4 },
});
console.log(s);
console.log(deserialize(s));
