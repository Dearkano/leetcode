/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  var permuteUnique = function (k) {
    const dfs = (start, path) => {
      if (path.length === k) {
        ans.push([].concat(path));
        return;
      }
      for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        path.push(nums[i]);
        dfs(i + 1, path);
        path.pop();
      }
    };
    dfs(0, []);
    return ans;
  };
  for (let i = 0; i <= nums.length; i++) {
    permuteUnique(i);
  }
  return ans;
};
