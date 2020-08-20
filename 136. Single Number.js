/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const set = new Set();
  let sum = 0;
  let distinctSum = 0;
  for (const n of nums) {
    if (!set.has(n)) {
      set.add(n);
      distinctSum += n;
    }
    sum += n;
  }
  return 2 * distinctSum - sum;
};
