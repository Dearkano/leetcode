/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class Codec {
  constructor() {}

  /**
   * @param {Node} root
   * @return {TreeNode}
   */
  // Encodes an n-ary tree to a binary tree.
  encode = function (root) {
    if (!root) return null;
    const head = new TreeNode(root.val);
    const traversal = (node, bnode) => {
      if (node.children.length > 0) {
        bnode.left = new TreeNode(node.children[0].val);
        bnode = bnode.left;
        traversal(node.children[0], bnode);
      }
      for (let i = 1; i < node.children.length; i++) {
        bnode.right = new TreeNode(node.children[i].val);
        bnode = bnode.right;
        traversal(node.children[i], bnode);
      }
    };
    traversal(root, head);
    return head;
  };

  /**
   * @param {TreeNode} root
   * @return {Node}
   */
  // Decodes your binary tree to an n-ary tree.
  decode = function (root) {
    if (!root) return null;
    const head = new Node(root.val, []);
    const traversal = (node, bnode) => {
      bnode = bnode.left;
      while (bnode) {
        const newNode = new Node(bnode.val, []);
        node.children.push(newNode);
        traversal(newNode, bnode);
        bnode = bnode.right;
      }
    };
    traversal(head, root);
    return head;
  };
}
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
function Node(val, children) {
  this.val = val;
  this.children = children;
}
/*
 * Your Codec object will be instantiated and called as such:
 * codec = Codec()
 * codec.decode(codec.encode(root))
 */
const tree = {
  val: 7,
  children: [
    {
      val: 3,
      children: [
        { val: 1, children: [] },
        { val: 2, children: [] },
      ],
    },
    { val: 1, children: [] },
    { val: 4, children: [{ val: 9, children: [] }] },
    {
      val: 6,
      children: [
        { val: 7, children: [] },
        { val: 12, children: [] },
        { val: 11, children: [] },
      ],
    },
  ],
};

const codec = new Codec();
const b = codec.encode(tree);
codec.decode(b);
