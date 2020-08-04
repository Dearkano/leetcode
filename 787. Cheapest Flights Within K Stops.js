/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  const queue = [];
  const map = new Map();
  let idx = 0;
  let ans = Infinity;
  const neighbors = [];
  for (const flight of flights) {
    if (!neighbors[flight[0]]) neighbors[flight[0]] = [];
    neighbors[flight[0]].push(flight);
  }
  queue.push({ cur: src, stops: 0, cost: 0 });
  while (idx < queue.length) {
    const { cur, stops, cost } = queue[idx++];
    if (!neighbors[cur]) neighbors[cur] = [];
    for (const flight of neighbors[cur]) {
      const [u, v, w] = flight;
      if (v === dst && stops <= K && ans > cost + w) {
        ans = cost + w;
      } else {
        if (!map.get(v)) map.set(v, Infinity);
        if (map.get(v) > cost + w) {
          map.set(v, cost + w);
          queue.push({ cur: v, stops: stops + 1, cost: cost + w });
        }
      }
    }
  }
  return ans < Infinity ? ans : -1;
};

console.log(
  findCheapestPrice(
    10,
    [
      [3, 4, 4],
      [2, 5, 6],
      [4, 7, 10],
      [9, 6, 5],
      [7, 4, 4],
      [6, 2, 10],
      [6, 8, 6],
      [7, 9, 4],
      [1, 5, 4],
      [1, 0, 4],
      [9, 7, 3],
      [7, 0, 5],
      [6, 5, 8],
      [1, 7, 6],
      [4, 0, 9],
      [5, 9, 1],
      [8, 7, 3],
      [1, 2, 6],
      [4, 1, 5],
      [5, 2, 4],
      [1, 9, 1],
      [7, 8, 10],
      [0, 4, 2],
      [7, 2, 8],
    ],
    6,
    0,
    7
  )
);
