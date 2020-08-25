/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = new Map();

  for (const ticket of tickets) {
    const [start, end] = ticket;
    if (graph.get(start) === undefined) graph.set(start, []);
    if (graph.get(end) === undefined) graph.set(end, []);
    graph.get(start).push(end);
  }

  for (const key of graph.keys()) {
    graph.get(key).sort((a, b) => (a < b ? -1 : 1));
  }

  let ans = null;

  const dfs = (path) => {
    if (path.length === tickets.length + 1) {
      ans = path;
      return true;
    }
    const cur = path[path.length - 1];
    const neighbors = graph.get(cur);
    for (let i = 0; i < neighbors.length; i++) {
      const key = neighbors[i];
      path.push(key);
      graph.set(cur, neighbors.slice(0, i).concat(neighbors.slice(i + 1)));
      if (dfs(path)) return true;
      graph.set(cur, neighbors);
      path.pop();
    }
    return false;
  };

  dfs(["JFK"]);
  return ans;
};
console.log(
  findItinerary([
    ["JFK", "KUL"],
    ["JFK", "NRT"],
    ["NRT", "JFK"],
  ])
);
console.log(
  findItinerary([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ])
);
console.log(
  findItinerary([
    ["MUC", "LHR"],
    ["JFK", "MUC"],
    ["SFO", "SJC"],
    ["LHR", "SFO"],
  ])
);
