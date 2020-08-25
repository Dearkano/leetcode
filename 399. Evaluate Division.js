/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const dp = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    if (!dp.get(a)) dp.set(a, new Map());
    if (!dp.get(b)) dp.set(b, new Map());

    dp.get(a).set(b, values[i]);
    dp.get(b).set(a, 1 / values[i]);
  }

  const ans = [];
  for (const query of queries) {
    const [a, b] = query;
    const map = dp.get(a);
    if (!map) {
      ans.push(-1);
      continue;
    }
    const queue = [...map.keys()];
    let idx = 0;
    while (idx < queue.length) {
      const cur = queue[idx++];
      const curMap = dp.get(cur);
      for (const key of curMap.keys()) {
        if (map.get(key) !== undefined) continue;
        map.set(key, map.get(cur) * curMap.get(key));
        queue.push(key);
      }
      if (map.get(b) !== undefined) break;
    }
    if (map.get(b) !== undefined) ans.push(map.get(b));
    else ans.push(-1);
  }
  return ans;
};
console.log(
  calcEquation(
    [
      ["x1", "x2"],
      ["x2", "x3"],
      ["x3", "x4"],
      ["x4", "x5"],
    ],
    [3.0, 4.0, 5.0, 6.0],
    [
      ["x1", "x5"],
      ["x5", "x2"],
      ["x2", "x4"],
      ["x2", "x2"],
      ["x2", "x9"],
      ["x9", "x9"],
    ]
  )
);
