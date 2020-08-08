/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  let arr = [1];
  const indices = [];
  for (let i = 0; i < primes.length; i++) indices[i] = 0;
  for (let i = 1; i < n; i++) {
    let min = Infinity;
    for (let j = 0; j < primes.length; j++) {
      min = Math.min(min, arr[indices[j]] * primes[j]);
    }
    arr[i] = min
    for (let j = 0; j < primes.length; j++) {
      if (min === arr[indices[j]] * primes[j]) indices[j]++;
    }
  }
  return arr[n - 1];
};
