/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function (times, N, K) {
  const dis = [];
  const ready = new Set();
  const map = new Map();
  for (let i = 0; i < N; i++) {
    dis[i] = Infinity;
    map.set(i, []);
  }

  for (const item of times) {
    if (item[0] === K) {
      dis[item[1] - 1] = item[2];
    }
    map.get(item[0] - 1).push(item);
  }
  dis[K - 1] = 0;

  const findSmallest = () => {
    let min = Infinity;
    let ans = 0;
    for (let i = 0; i < N; i++) {
      if (i !== K - 1 && !ready.has(i) && dis[i] < min) {
        min = dis[i];
        ans = i;
      }
    }
    return ans;
  };

  while (ready.size < N - 1) {
    const cur = findSmallest();
    ready.add(cur);
    const edges = map.get(cur);
    for (const edge of edges) {
      const v = edge[1];
      const w = edge[2];
      dis[v - 1] = Math.min(dis[v - 1], dis[cur] + w);
    }
  }
  dis.sort((a, b) => b - a);
  return dis[0] === Infinity ? -1 : dis[0];
};

console.log(networkDelayTime([[1, 2, 1]], 2, 1));
