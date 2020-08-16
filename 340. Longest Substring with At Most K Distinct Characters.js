/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  const set = new Set();
  const map = new Map();
  let l = 0;
  let r = 0;
  let ans = 0;
  for (; r < s.length; r++) {
    set.add(s[r]);
    if (map.get(s[r]) === undefined) map.set(s[r], 0);
    map.set(s[r], map.get(s[r]) + 1);
    if (set.size <= k) {
      ans = Math.max(ans, r - l + 1);
      continue;
    }
    while (set.size > k) {
      map.set(s[l], map.get(s[l]) - 1);
      if (map.get(s[l]) === 0) set.delete(s[l]);
      l++;
    }
  }
  return ans;
};

console.log(lengthOfLongestSubstringKDistinct("ab", 0));
