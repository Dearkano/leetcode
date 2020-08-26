/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map = new Map();
  let ans = "";
  let min = Infinity;

  for (let i = 0; i < t.length; i++) {
    map.set(t[i], map.get(t[i]) ? map.get(t[i]) + 1 : 1);
  }

  let l = 0;
  let count = t.length;
  for (let r = 0; r < s.length; r++) {
    if (map.get(s[r]) !== undefined) {
      if (map.get(s[r]) > 0) count--;
      map.set(s[r], map.get(s[r]) - 1);
    }

    while (count === 0) {
      if (r - l + 1 < min) {
        min = r - l + 1;
        ans = s.substring(l, r + 1);
      }
      if (map.get(s[l]) !== undefined) {
        if (map.get(s[l]) === 0) count++;
        map.set(s[l], map.get(s[l]) + 1);
      }
      l++;
    }
  }
  return ans;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
