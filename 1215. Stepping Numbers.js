/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var countSteppingNumbers = function (low, high) {
  const ans = [];

  const dfs = (path) => {
    const num = Number(path.join(""));
    if (num >= low && num <= high) ans.push(num);
    if (path.length !== 0 && num > high) return;
    for (let i = 0; i <= 9; i++) {
      if (
        (path.length === 0 && i !== 0) ||
        Math.abs(path[path.length - 1] - i) === 1
      ) {
        path.push(i);
        dfs(path);
        path.pop();
      }
    }
  };
  
  dfs([]);
  ans.sort((a, b) => a - b);
  return ans;
};

console.log(countSteppingNumbers(10, 21));
