/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const n = nums.length;
  const ans = [];
  const set = new Set()
  const dfs = (path) => {
    if (path.length === n) {
      ans.push([].concat(path));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!set.has(nums[i])) {
        path.push(nums[i]);
        set.add(nums[i])
        dfs(path);
        set.delete(nums[i])
        path.pop();
      }
    }
  };
  dfs([]);
  return ans;
};

console.log(permute([1, 2, 3]));
