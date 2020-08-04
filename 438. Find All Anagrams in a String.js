/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const targetArr = p.split("").map((i) => i.charCodeAt(0));
  const hash = [];
  for (let i = 96; i <= 122; i++) hash[i] = 0;
  for (const i of targetArr) {
    hash[i]++;
  }
  let l = 0;
  let r = 0;
  let count = p.length;
  const ans = [];
  while (r < s.length) {
    if (hash[s.charCodeAt(r)] >= 1) {
      count--;
    }
    hash[s.charCodeAt(r)]--;
    r++;
    if (count === 0) {
      ans.push(l);
    }
    // longer 1
    if (r - l === p.length) {
      if (hash[s.charCodeAt(l)] >= 0) count++;
      hash[s.charCodeAt(l)]++;
      l++;
    }
  }
  return ans;
};
