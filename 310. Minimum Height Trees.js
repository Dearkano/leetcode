/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (edges.length === 0) return [0];
  const map = [];
  for (const edge of edges) {
    const [a, b] = edge;
    if (!map[a]) map[a] = [];
    if (!map[b]) map[b] = [];
    map[a].push(b);
    map[b].push(a);
  }
  const leaves = [];
  for (let i = 0; i < n; i++) {
    if (map[i].length === 1) leaves.push(i);
  }
  const recursiveCalDepth = (leaves) => {
    const upper = [];
    for (const leaf of leaves) {
      for (const neighbor of map[leaf]) {
        map[neighbor].splice(map[neighbor].indexOf(leaf), 1);
        if (map[neighbor].length === 1) upper.push(neighbor);
      }
    }
    if (upper.length === 0) return leaves;
    return recursiveCalDepth(upper);
  };

  return recursiveCalDepth(leaves);
};
console.log(
  findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ])
);
