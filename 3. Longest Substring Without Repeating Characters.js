/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  const set = new Set();
  let max = 0;
  let cur = "";
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      for (let j = 0; j <= cur.indexOf(s[i]); j++) {
        set.delete(cur[j]);
      }
      cur = cur.substring(cur.indexOf(s[i]) + 1);
    }
    cur += s[i];
    set.add(s[i]);
    max = Math.max(max, set.size);
  }
  return max;
};

console.log(lengthOfLongestSubstring("qrsvbspk"));
