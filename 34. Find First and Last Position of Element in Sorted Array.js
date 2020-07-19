/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  if (start === end) {
    if (target === nums[0]) {
      return [0, 0];
    } else {
      return [-1, -1];
    }
  }
  let ans = { start: -1, end: -1 };
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      ans.start = mid;
      ans.end = mid;
      while (ans.start > start) {
        if (nums[ans.start - 1] === target) {
          ans.start--;
        } else {
          break;
        }
      }
      while (ans.end < end) {
        if (nums[ans.end + 1] === target) {
          ans.end++;
        } else {
          break;
        }
      }
      break;
    }
  }
  return [ans.start, ans.end];
};

var arr = [1, 2];
console.log(searchRange(arr, 2));
