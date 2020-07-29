/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const map = new Map();
  const getNewNode = (cur) => {
    if (!cur) return null;
    if (map.get(cur.val)) return map.get(cur.val);
    const newCur = new Node(cur.val);
    map.set(newCur.val, newCur);
    for (const neighbor of cur.neighbors) {
      if (!newCur.neighbors) newCur.neighbors = [];
      newCur.neighbors.push(getNewNode(neighbor));
    }
    return newCur;
  };
  return getNewNode(node);
};
