/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let ans = 0;
  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - 97] === 0) ans++;
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
    if (count[t.charCodeAt(i) - 97] === 0) ans--;
  }
  return ans === 0;
};
