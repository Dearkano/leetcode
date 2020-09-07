/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}
class Codec {
  constructor() {}

  /**
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function (root) {
    if (!root) return "";
    let str = "";
    const queue = [root];
    let len = queue.length;
    let count = 0;
    str += `${root.val}*`;
    while (queue.length > 0) {
      while (count < len) {
        const cur = queue.shift();
        if (count > 0) str += "#";
        for (let i = 0; i < cur.children.length; i++) {
          const child = cur.children[i];
          if (i > 0) str += "~";
          str += child.val;
          queue.push(child);
        }
        count++;
      }
      if (queue.length > 0) str += "*";
      count = 0;
      len = queue.length;
    }
    return str;
  };

  /**
   * @param {string} data
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize = function (data) {
    if (!data) return null;
    const levels = data.split("*");
    if (!levels[levels.length - 1]) levels.pop();
    const root = new Node(Number(levels[0]), []);
    let parents = [root];
    for (let i = 1; i < levels.length; i++) {
      const nodes = levels[i].split("#");
      const siblings = [];
      for (let j = 0; j < parents.length; j++) {
        const parent = parents[j];
        parent.children = [];
        const vals = nodes[j].split("~");
        for (const val of vals) {
          if (!val) break;
          const newNode = new Node(Number(val), []);
          parent.children.push(newNode);
          siblings.push(newNode);
        }
      }
      parents = siblings;
    }
    return root;
  };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
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
const str = codec.serialize(tree);
console.log(str);
console.log(codec.deserialize(str));
