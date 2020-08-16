/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!this.map.get(nums[i])) this.map.set(nums[i], []);
    this.map.get(nums[i]).push(i);
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const arr = this.map.get(target);
  const len = arr.length;
  const index = Math.floor(Math.random() * len);
  return arr[index];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
