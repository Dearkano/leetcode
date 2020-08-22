/**
 * @param {string} s
 * @return {number}
 */
// var countSubstrings = function (s) {
//   const dp = [];
//   const n = s.length;
//   let cnt = 0;
//   for (let i = 0; i < n; i++) {
//     dp[i] = new Array(n).fill(false);
//     dp[i][i] = true;
//     cnt++;
//   }

//   for (let i = 1; i < n; i++) {
//     const e = n - i;
//     for (let l = 0, r = i; l < e; r++, l++) {
//       if (s[r] === s[l] && (i === 1 || dp[l + 1][r - 1])) {
//         dp[l][r] = true;
//         cnt++;
//       }
//     }
//   }
//   return cnt
// };

const countSubstrings = (s) => {
  let ans = 0;
  const extendPalindromes = (l, r) => {
    while (l >= 0 && r < s.length && s[l--] === s[r++]) ans++;
  };

  for (let i = 0; i < s.length; i++) {
    extendPalindromes(i, i + 1);
    extendPalindromes(i, i);
  }
  return ans
};
