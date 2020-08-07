/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  const dfs = (indices, path) => {
    if (path.length === nums.length) {
      ans.push([].concat(path));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!indices[i]) {
        if (i > 0 && nums[i] === nums[i - 1] && !indices[i - 1]) continue;
        path.push(nums[i]);
        indices[i] = true;
        dfs(indices, path);
        path.pop();
        indices[i] = false;
      }
    }
  };
  dfs([], []);
  return ans;
};
console.log(permuteUnique([1, 1, 2]));