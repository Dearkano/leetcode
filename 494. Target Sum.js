/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  if (nums.length === 0) return;
  const map = new Map();
  const dfs = (preSum, index) => {
    const temp = map.get(`${index}-${preSum}`);
    if (temp) return temp;
    if (index === nums.length) {
      if (preSum === S) {
        return 1;
      }
      return 0;
    }
    const p = dfs(preSum + nums[index], index + 1);
    const n = dfs(preSum - nums[index], index + 1);
    map.set(`${index}-${preSum}`, p + n);
    return p + n;
  };
  return dfs(0, 0);
};
console.log(
  findTargetSumWays(
    [13, 21, 33, 0, 0, 50, 14, 35, 12, 36, 50, 7, 0, 9, 40, 10, 37, 42, 12, 0],
    19
  )
);
