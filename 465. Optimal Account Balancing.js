/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function (transactions) {
  const debt = [];
  for (const tx of transactions) {
    if (debt[tx[0]] === undefined) debt[tx[0]] = 0;
    if (debt[tx[1]] === undefined) debt[tx[1]] = 0;
    debt[tx[0]] += tx[2];
    debt[tx[1]] -= tx[2];
  }
  const arr = debt.filter((i) => i !== 0);

  // convert the question to use the minimun sum operation to make every element of arr 0
  const dfs = (k) => {
    while (arr[k] === 0) k++;
    if (k === arr.length) return 0;
    let min = Infinity;
    for (let i = k + 1; i < arr.length; i++) {
      //prune
      if (arr[k] * arr[i] < 0) {
        arr[i] += arr[k];
        min = Math.min(min, dfs(k + 1) + 1);
        arr[i] -= arr[k];
      }
    }
    return min === Infinity ? 0 : min;
  };
  return dfs(0);
};

console.log(
  minTransfers([
    [0, 1, 10],
    [2, 0, 5],
  ])
);
