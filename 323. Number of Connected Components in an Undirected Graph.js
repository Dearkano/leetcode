/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  if (n === 0) return 0;
  const p = [];
  for (let i = 0; i < n; i++) p[i] = i;
  const find = (i) => {
    if (i === p[i]) return i;
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
    const a = find(edge[0]);
    const b = find(edge[1]);
    if (a === b) continue;
    union(a, b);
  }
  return n;
};
