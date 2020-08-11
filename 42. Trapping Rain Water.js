/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0;
  let r = height.length - 1;
  let ans = 0;
  let maxLeft = 0;
  let maxRight = 0;
  while (l <= r) {
    if (height[l] < height[r]) {
      if (height[l] > maxLeft) {
        maxLeft = height[l];
      } else {
        ans += maxLeft - height[l];
      }
      l++;
    } else {
      if (height[r] > maxRight) {
        maxRight = height[r];
      } else {
        ans += maxRight - height[r];
      }
      r--;
    }
  }
  return ans;
};
