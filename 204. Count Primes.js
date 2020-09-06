/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(true);
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans++;
      for (let j = i; j < n / i; j++) {
        isPrime[i * j] = false;
      }
    }
  }
  return ans
};
