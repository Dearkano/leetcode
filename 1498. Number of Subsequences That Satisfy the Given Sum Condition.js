/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  let ans = 0;
  const pow = [1];
  for (let i = 1; i < nums.length; i++) {
    pow[i] = (pow[i - 1] * 2) % (10 ** 9 + 7);
  }
  while (l <= r) {
    if (nums[l] + nums[r] > target) {
      r--;
    } else {
      ans = (ans + pow[r - l]) % (10 ** 9 + 7);
      l++;
    }
  }
  return ans;
};

console.log(1);
setTimeout(() => console.log(1.5), 0);
new Promise((resolve) => {
  console.log(2);
  resolve(3);
})
  .then((n) => {
    console.log(n);
    return new Promise((resolve) => {
      resolve(5);
    });
  })
  .then((n) => console.log(n));
console.log(4);
