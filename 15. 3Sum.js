/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const arr = kSum(nums, 0, 3, 0);
  const set = new Set();
  const ans = [];
  for (const item of arr) {
    const key = item.join("-");
    if (!set.has(key)) {
      ans.push(item);
      set.add(key);
    }
  }
  return ans;
};
const kSum = (nums, start, k, target) => {
  const ans = [];
  if (k === 2) {
    let l = start;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        ans.push([nums[l], nums[r]]);
        l++;
        r--;
      } else if (nums[l] + nums[r] < target) {
        l++;
      } else {
        r--;
      }
    }
  } else {
    for (let i = start; i < nums.length - k + 1; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;
      const res = kSum(nums, i + 1, k - 1, target - nums[i]);
      res.map((item) => {
        item.unshift(nums[i]);
        ans.push(item);
      });
    }
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
