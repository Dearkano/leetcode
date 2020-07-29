/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (N, connections) {
  connections.sort((a, b) => a[2] - b[2]);
  const p = [];
  for (let i = 0; i <= connections.length; i++) p[i] = i;
  const find = (i) => {
    if (p[i] === i) return i;
    p[i] = find(p[i]);
    return p[i];
  };
  const union = (a, b) => {
    if (a === b) return;
    p[a] = b;
    N--;
  };
  let ans = 0;
  for (const connection of connections) {
    if (N === 1) break;
    const pa = find(connection[0]);
    const pb = find(connection[1]);
    if (pa === pb) continue;
    union(pa, pb);
    ans += connection[2];
  }
  return N === 1 ? ans : -1;
};
