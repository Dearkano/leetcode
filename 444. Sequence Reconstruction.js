/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
var sequenceReconstruction = function (org, seqs) {
  const graph = new Map();
  const indegree = new Map();

  for (const seq of seqs) {
    for (let i = 0; i < seq.length; i++) {
      if (indegree.get(seq[i]) === undefined) indegree.set(seq[i], 0);
      if (graph.get(seq[i]) === undefined) graph.set(seq[i], []);
      if (i > 0) {
        graph.get(seq[i - 1]).push(seq[i]);
        indegree.set(seq[i], indegree.get(seq[i]) + 1);
      }
    }
  }

  if (indegree.size !== org.length) return false;

  const queue = [];
  for (const key of indegree.keys()) {
    if (indegree.get(key) === 0) queue.push(key);
  }
  if (queue.length === 0) return false;
  let idx = 0;
  while (queue.length) {
    if (queue.length > 1 || idx === org.length) return false;
    const cur = queue.shift();
    if (cur !== org[idx]) return false;
    idx++;
    for (const key of graph.get(cur)) {
      indegree.set(key, indegree.get(key) - 1);
      if (indegree.get(key) === 0) queue.push(key);
    }
  }

  return idx === org.length;
};
