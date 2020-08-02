/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const ans = [];
  const levelTraversal = (siblings) => {
    if (siblings.length === 0) return 0;
    const values = [];
    let children = [];
    for (const node of siblings) {
      values.push(node.val);
      if (node.children.length > 0) children.push(...node.children);
    }
    ans.push(values);
    if (children.length === 0) return;
    levelTraversal(children);
  };
  levelTraversal([root]);
  return ans;
};
