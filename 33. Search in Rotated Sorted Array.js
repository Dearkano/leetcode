/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var mid = findNode(nums);
  if(nums.length===0)return -1
  if (nums[nums.length - 1] < target) {
    return bs(nums.slice(0, mid + 1), target);
  } else if (nums[nums.length - 1] > target) {
    var rs = bs(nums.slice(mid, nums.length), target);
    if (rs >= 0) return rs + mid;
    else return rs;
  } else {
    return nums.length-1;
  }
};

var bs = function (nums, target) {
  var start = 0;
  var end = nums.length - 1;
  while (true) {
    if (end - start <= 1 && nums[start] !== target && nums[end] !== target) {
      return -1;
    }
    var mid = Math.floor((start + end) / 2);
    if (nums[mid] > target) {
      end = mid;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      return mid;
    }
  }
};

var findNode = function (nums) {
  var mid = find(0, nums.length - 1, nums);
  return mid;
};
var find = function (start, end, nums) {
  if (end - start <= 1) {
    return nums[end] < nums[start] ? end : start;
  }
  var mid = Math.floor((start + end) / 2);
  if (nums[mid] <= nums[end] && nums[mid] >= nums[start]) {
    return start;
  } else if (nums[mid] > nums[end]) {
    return find(mid, end, nums);
  } else if (nums[mid] < nums[start]) {
    return find(start, mid, nums);
  }
};

var arr = [0, 1];

console.log(search(arr, 1));
