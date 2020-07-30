/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;
  const p = [];
  for (let i = 0; i < n; i++) p[i] = i;
  const find = (i) => {
    if (p[i] === i) return i;
    p[i] = find(p[i]);
    return p[i];
  };
  const union = (a, b) => {
    if (a === b) return;
    n--;
    if (a > b) p[a] = b;
    else p[b] = a;
  };

  for (const edge of edges) {
    const pa = find(edge[0]);
    const pb = find(edge[1]);
    if (pa !== pb) {
      union(pa, pb);
    } else {
      return false;
    }
  }
  return n === 1;
};
