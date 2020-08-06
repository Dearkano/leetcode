/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const count = [];
  for (let i = 0; i < 26; i++) count[i] = 0;
  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 97]++;
  }
  let l = 0;
  let cnt = s1.length;
  for (let r = 0; r < s2.length; r++) {
    if (count[s2.charCodeAt(r) - 97] > 0) {
      cnt--;
    }
    count[s2.charCodeAt(r) - 97]--;
    if (cnt === 0) return true;
    if (r - l === s1.length - 1) {
      if (count[s2.charCodeAt(l) - 97] >= 0) cnt++;
      count[s2.charCodeAt(l) - 97]++;
      l++;
    }
  }
  return false;
};
