/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let offset = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        offset = i + 1;
        break;
      }
    }
    const getVal = (i) => nums[(i + offset) % nums.length];
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (getVal(mid) === target) return true;
      else if (getVal(mid) > target) r = mid - 1;
      else l = mid + 1;
    }
    return false;
  };
  