/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 1) return nums[0];
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[l] < nums[r]) return nums[l];
      let mid = Math.floor((l + r) / 2);
      if (nums[mid] >= nums[l]) {
        l = mid + 1;
      } else if (nums[mid] < nums[l]) {
        r = mid;
      }
    }
    return nums[l]
  };
  