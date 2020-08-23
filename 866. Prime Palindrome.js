/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function (N) {
  if (N >= 8 && N <= 11) return 11;
  const isPrime = (n) => {
    if (n < 2 || n % 2 === 0) return n === 2;
    for (let i = 3; i <= n ** 0.5; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  for (let i = 0; ; i++) {
    const s = Number(i + i.toString().split("").reverse().join("").substring(1));
    if (s >= N && isPrime(s)) return s;
  }
};
