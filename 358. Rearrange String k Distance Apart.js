/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function (s, k) {
  const count = new Array(26).fill(0);
  const pre = new Array(26).fill(-k);
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < s.length; i++) {
    let candidate = -1;
    for (let j = 0; j < 26; j++) {
      if (i - pre[j] >= k && count[j] > 0) {
        if (candidate === -1 || count[j] > count[candidate]) {
          candidate = j;
        }
      }
    }
    if (candidate === -1) return "";
    ans += String.fromCharCode(candidate + 97);
    count[candidate]--;
    pre[candidate] = i;
  }
  return ans;
};
