/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let ans = 0;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    if (area > ans) ans = area;
    if (height[l] > height[r]) r--;
    else l++;
  }
  return ans;
};
