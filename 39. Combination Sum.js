/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  const dfs = (start, path, cur) => {
    if (cur === target) {
      ans.push(path);
      return;
    }
    if (cur > target) return;
    for (let i = start; i < candidates.length; i++) {
      dfs(i, [].concat(path, candidates[i]), cur + candidates[i]);
    }
  };
  dfs(0, [], 0);
  return ans;
};

console.log(combinationSum([2, 3, 6, 7], 7));
