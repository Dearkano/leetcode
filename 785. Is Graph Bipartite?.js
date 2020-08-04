/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const A = new Set();
  const B = new Set();
  const queue = [];
  let idx = 0;
  let start = 0;
  for (let i = 0; i < graph.length; i++) {
    if (graph[start].length < graph[i].length) start = i;
  }
  queue.push(start);
  A.add(start);
  while (idx < queue.length) {
    const cur = queue[idx++];
    if (A.has(cur)) {
      for (const node of graph[cur]) {
        if (!A.has(node)) {
          if (!B.has(node)) {
            B.add(node);
            queue.push(node);
          }
        } else {
          return false;
        }
      }
    } else if (B.has(cur)) {
      for (const node of graph[cur]) {
        if (!B.has(node)) {
          if (!A.has(node)) {
            A.add(node);
            queue.push(node);
          }
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(
  isBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ])
);
