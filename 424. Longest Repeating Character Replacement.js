/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let ans = 0;
  let l = 0;
  let r = 0;
  let cur = 0;
  const count = [];
  for (let i = 0; i < 26; i++) count[i] = 0;
  while (r < s.length) {
    // the most char's number in current window
    cur = Math.max(cur, count[s.charCodeAt(r) - 65] + 1);
    count[s.charCodeAt(r) - 65]++;

    while (r - l + 1 - cur > k) {
      count[s.charCodeAt(l) - 65]--;
      l++;
    }

    ans = Math.max(ans, r - l + 1)
    r++
  }
  return ans;
};
console.log(characterReplacement("ABAB", 1));
