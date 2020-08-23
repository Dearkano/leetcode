/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let ans = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") l++;
    if (s[i] === "R") l--;
    if (l === 0) ans++;
  }
  return ans;
};
