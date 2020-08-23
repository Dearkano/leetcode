/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  const bit = [0];
  for (let i = 0; i < s.length; i++)
    bit[i + 1] = bit[i] ^ (1 << (s.charCodeAt(i) - 97));
  const isValidPalinDromeReplacingK = (q) => {
    const [l, r, k] = q;
    let num = bit[r + 1] ^ bit[l];
    let count = 0;
    while (num) {
      num &= num - 1;
      count++;
    }
    return Math.floor(count / 2) <= k;
  };

  const ans = [];
  for (const q of queries) {
    ans.push(isValidPalinDromeReplacingK(q));
  }
  return ans;
};
console.log(canMakePaliQueries("abcda", [[0, 3, 1]]));
