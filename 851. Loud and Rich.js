/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  const map = [];
  const dfs = (cur, origin) => {
    let min = map[origin];
    for (let i = 0; i < richer.length; i++) {
      if (richer[i][1] === cur) {
        const temp = map[richer[i][0]];
        if (quiet[temp] < quiet[min]) {
          map[origin] = temp;
          min = temp;
        }
        if (temp > cur) dfs(richer[i][0], origin);
      }
    }
  };
  for (let i = 0; i < quiet.length; i++) map[i] = i;
  for (let i = 0; i < quiet.length; i++) dfs(i, i);
  return map;
};

console.log(
  loudAndRich(
    [
      [0, 2],
      [1, 2],
    ],
    [0, 1, 2]
  )
);
