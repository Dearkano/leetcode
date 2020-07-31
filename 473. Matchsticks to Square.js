/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function (nums) {
  if (nums.length < 4) return false;
  let sum = 0;
  for (const num of nums) sum += num;
  if (sum % 4 !== 0) return false;
  const edge = sum / 4;
  nums.sort((a, b) => b - a);

  const dfs = (index, sums) => {
    if (index === nums.length) {
      if (
        sums[0] === edge &&
        sums[1] === edge &&
        sums[2] === edge &&
        sums[3] === edge
      )
        return true;
      else return false;
    }
    for (let i = 0; i < 4; i++) {
      if (sums[i] + nums[index] > edge) continue;
      sums[i] += nums[index];
      if (dfs(index + 1, sums)) return true;
      sums[i] -= nums[index];
    }
    return false;
  };
  return dfs(0, [0, 0, 0, 0]);
};

console.log(makesquare([3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]));
