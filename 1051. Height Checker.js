/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const sorted = [].concat(heights).sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    if (sorted[i] !== heights[i]) ans++;
  }
  return ans;
};
