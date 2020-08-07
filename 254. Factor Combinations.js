/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function (n) {
  const factors = getDistinctFactors(n);
  if (factors.length === 0) return [];
  const ans = [];
  const dfs = (start, path, cur) => {
    if (cur === n) {
      ans.push([].concat(path));
      return;
    } else if (cur > n) return;

    for (let i = start; i < factors.length; i++) {
      path.push(factors[i]);
      dfs(i, path, cur * factors[i]);
      path.pop();
    }
  };
  dfs(0, [], 1);
  return ans;
};

const getDistinctFactors = (n) => {
  const ans = [];
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) ans.push(i);
  }
  return ans;
};
console.log(getFactors(12));
