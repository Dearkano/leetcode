/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const helper = (l, r) => {
    if (l + k > r) return 0;
    const count = new Array(26).fill(0);
    for (let i = l; i < r; i++) {
      count[s.charCodeAt(i) - 97]++;
    }
    for (let c = 0; c < 26; c++) {
      if (count[c] > 0 && count[c] < k) {
        for (let i = l; i < r; i++) {
          if (s.charCodeAt(i) - 97 === c) {
            return Math.max(helper(l, i), helper(i + 1, r));
          }
        }
      }
    }
    return r - l;
  };
  return helper(0, s.length);
};
console.log(longestSubstring("", 2));
