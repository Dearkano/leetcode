/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(i, []);
  }
  for (const road of roads) {
    const [a, b] = road;
    map.get(a).push(b);
    map.get(b).push(a);
  }

  let max = 0;
  let candidates = [];
  for (const key of map.keys()) {
    if (max < map.get(key).length) {
      max = map.get(key).length;
      candidates = [key];
    } else if (max === map.get(key).length) {
      candidates.push(key);
    }
  }

  let ans = 0;
  for (const candidate of candidates) {
    for (const key of map.keys()) {
      if (key === candidate) continue;
      let rank = map.get(key).length + map.get(candidate).length;
      if (map.get(key).includes(candidate)) rank--;
      ans = Math.max(ans, rank);
    }
  }
  return ans;
};
console.log(
  maximalNetworkRank(4, [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
  ])
);
