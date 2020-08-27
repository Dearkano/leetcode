/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const count = { a: 0, b: 0, c: 0 };
  let ans = 0;
  for (let r = 0, l = 0; r < s.length; r++) {
    count[s[r]]++;
    while (count["a"] > 0 && count["b"] > 0 && count["c"] > 0) {
      ans += s.length - r;
      count[s[l++]]--;
    }
  }
  return ans;
};
