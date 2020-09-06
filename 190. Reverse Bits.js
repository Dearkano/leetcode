/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let num = 0;
  for (let i = 0; i < 32; i++) {
    if (n % 2 === 1) {
      num += 2 ** (31 - i);
    }
    n = Math.floor(n / 2);
  }
  return num;
};
