/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const ans = [];
  const dfs = (start, path, cur) => {
    if (cur === target) {
      ans.push(path);
      return;
    }
    if (cur > target) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      dfs(i + 1, [].concat(path, candidates[i]), cur + candidates[i]);
    }
  };
  dfs(0, [], 0);
  return ans;
};
