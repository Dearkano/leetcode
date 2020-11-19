/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let ans = 0;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") cnt++;
    ans = Math.max(cnt, ans);
    if (s[i] === ")") cnt--;
  }
  return ans;
};
