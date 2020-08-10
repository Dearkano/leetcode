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
  if (!root) return "";
  const order = [];
  const preOrder = (node) => {
    order.push(node.val);
    if (node.left) preOrder(node.left);
    if (node.right) preOrder(node.right);
  };
  preOrder(root);
  return order.join("-");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  const arr = data.split("-").map((i) => Number(i));
  const buildBST = (l, r) => {
    if (l === r) return null;
    const root = arr[l];
    let idx = r;
    for (let i = l + 1; i < r; i++) {
      if (arr[i] > root) {
        idx = i;
        break;
      }
    }
    const node = { val: root };
    node.left = buildBST(l + 1, idx);
    node.right = buildBST(idx, r);
    return node;
  };
  return buildBST(0, arr.length);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
const str = serialize({ val: 3 });
const tree = deserialize(str);
console.log(tree);
