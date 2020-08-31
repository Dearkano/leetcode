/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let ans = 0;
  while (n >= 5) {
    ans += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return ans;
};
console.log(trailingZeroes(30));
