/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (A, target) {
  A.sort((a, b) => a - b);
  return kSum(A, 0, 3, target) % (10 ** 9 + 7);
};

const kSum = (nums, start, k, target) => {
  let ans = 0;
  if (k === 2) {
    let l = start;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        if (nums[l] === nums[r]) {
          let n = r - l + 1;
          ans += (n * (n - 1)) / 2;
          break;
        } else {
          let lc = 1;
          while (l < r - 1 && nums[l + 1] === nums[l]) {
            l++;
            lc++;
          }
          let rc = 1;
          while (l < r - 1 && nums[r - 1] === nums[r]) {
            r--;
            rc++;
          }
          ans += lc * rc;
          l++;
          r--;
        }
      } else if (nums[l] + nums[r] > target) r--;
      else l++;
    }
  } else {
    for (let i = start; i < nums.length - k + 1; i++) {
      ans += kSum(nums, i + 1, k - 1, target - nums[i]);
    }
  }
  return ans;
};
console.log(threeSumMulti([0, 0, 0, 0, 0, 0], 0));
