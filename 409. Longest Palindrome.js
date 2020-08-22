/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindrome = function (s) {
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (!map.get(s[i])) map.set(s[i], 0);
//     map.set(s[i], map.get(s[i]) + 1);
//   }
//   let ans = 0;
//   for (const key of map.keys()) {
//     ans += map.get(key) - (map.get(key) % 2);
//   }
//   if (s.length !== ans) ans++;
//   return ans;
// };

var longestPalindrome = (s) => {
  const set = new Set();
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.delete(s[i]);
      cnt++;
    } else {
      set.add(s[i]);
    }
  }
  if (set.size > 0) return cnt * 2 + 1;
  else return cnt * 2;
};
