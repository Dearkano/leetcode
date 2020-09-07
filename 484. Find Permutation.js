/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function (s) {
  const ans = [];
  const n = s.length;
  for (let i = 0; i <= n; i++) ans[i] = i + 1;
  const swap = (i, j) => {
    ans[i] ^= ans[j];
    ans[j] ^= ans[i];
    ans[i] ^= ans[j];
  };
  const reverse = (l, r) => {
    while (l < r) {
      swap(l, r);
      l++;
      r--;
    }
  };
  for (let i = 0; i < n; i++) {
    if (s[i] === "D") {
      let j = i;
      while (i < n && s[i] === "D") i++;
      reverse(j, i);
    }
  }
  return ans;
};
