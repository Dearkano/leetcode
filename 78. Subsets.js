/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];
  var permute = function (k) {
    const n = nums.length;
    const dfs = (start, path) => {
      if (path.length === k) {
        ans.push([].concat(path));
        return;
      }
      for (let i = start; i < n; i++) {
        path.push(nums[i]);
        dfs(i + 1, path);
        path.pop();
      }
    };
    dfs(0, []);
    return ans;
  };
  for (let i = 0; i <= nums.length; i++) {
    permute(i);
  }
  return ans;
};

console.log(subsets([1, 2, 3]));
