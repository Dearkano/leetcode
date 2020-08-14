/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function (routes, S, T) {
  const map = new Map();
  if (S === T) return 0;
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    for (const s of route) {
      if (!map.get(s)) map.set(s, []);
      map.get(s).push(i);
    }
  }
  const queue = [];
  const visited = new Set();
  const stVisited = new Set();
  let idx = 0;
  queue.push(S);
  let ans = 0;
  let len = queue.length;
  while (idx < queue.length) {
    ans++;
    while (idx < len) {
      const cur = queue[idx++];
      stVisited.add(cur);
      const buses = map.get(cur);
      for (const bus of buses) {
        if (visited.has(bus)) continue;
        visited.add(bus);
        for (const st of routes[bus]) {
          if (st === T) return ans;
          if (!stVisited.has(st)) queue.push(st);
        }
      }
    }
    len = queue.length;
  }
  return -1;
};
