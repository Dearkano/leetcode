/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
// var loudAndRich = function (richer, quiet) {
//   const map = [];
//   const dfs = (cur, origin) => {
//     let min = map[origin];
//     for (let i = 0; i < richer.length; i++) {
//       if (richer[i][1] === cur) {
//         const temp = map[richer[i][0]];
//         if (quiet[temp] < quiet[min]) {
//           map[origin] = temp;
//           min = temp;
//         }
//         if (temp > cur) dfs(richer[i][0], origin);
//       }
//     }
//   };
//   for (let i = 0; i < quiet.length; i++) map[i] = i;
//   for (let i = 0; i < quiet.length; i++) dfs(i, i);
//   return map;
// };

const loudAndRich = (richer, quiet) => {
  const ans = [];
  const adj = [];
  const indegree = []
  for (let i = 0; i < quiet.length; i++) {
    adj[i] = [];
    ans[i] = i;
    indegree[i] = 0;
  }
  for (const r of richer) {
    adj[r[0]].push(r[1]);
    indegree[r[1]]++;
  }
  const queue = [];
  for (let i = 0; i < quiet.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  let idx = 0;
  while (idx < queue.length) {
    const cur = queue[idx++];
    for (const adjIndex of adj[cur]) {
      if (quiet[ans[cur]] < quiet[ans[adjIndex]]) ans[adjIndex] = ans[cur];
      if (--indegree[adjIndex] === 0) queue.push(adjIndex);
    }
  }
  return ans;
};

console.log(
  loudAndRich(
    [
      [1, 0],
      [2, 1],
      [3, 1],
      [3, 7],
      [4, 3],
      [5, 3],
      [6, 3],
    ],
    [3, 2, 5, 4, 6, 1, 7, 0]
  )
);
