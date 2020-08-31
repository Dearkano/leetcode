/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    ans += (s.charCodeAt(i) - 64) * Math.pow(26, s.length - i - 1);
  }
  return ans;
};
