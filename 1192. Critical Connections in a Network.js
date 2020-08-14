/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  const map = new Map();
  for (let i = 0; i < n; i++) map.set(i, []);
  for (const edge of connections) {
    const [a, b] = edge;
    map.get(a).push(b);
    map.get(b).push(a);
  }
  const timestamp = new Array(n).fill(0);
  const ans = [];
  const dfs = (cur, pre, curTimestamp) => {
    timestamp[cur] = curTimestamp;
    for (const next of map.get(cur)) {
      if (next === pre) continue;
      if (timestamp[next] > 0)
        timestamp[cur] = Math.min(timestamp[cur], timestamp[next]);
      else
        timestamp[cur] = Math.min(
          timestamp[cur],
          dfs(next, cur, curTimestamp + 1)
        );
      if (curTimestamp < timestamp[next]) ans.push([cur, next]);
    }
    return timestamp[cur]
  };
  dfs(0, 0, 1);
  return ans;
};

console.log(
  criticalConnections(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ])
);
