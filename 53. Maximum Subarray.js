/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var cur = nums[0]
    var max = nums[0]
    if (nums.length === 1) return nums[0]
    for (var i = 1; i < nums.length; i++) {
        cur = nums[i] > nums[i] + cur ? nums[i] : nums[i] + cur
        if (cur > max) max = cur
    }
    return max
};