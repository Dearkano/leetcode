/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  const digits = [];
  while (N > 0) {
    digits.push(N % 10);
    N = Math.floor(N / 10);
  }
  digits.reverse();
  let cur9 = digits.length
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] < digits[i - 1]) {
      digits[i - 1]--;
      for (let j = i; j < cur9; j++) digits[j] = 9;
      cur9 = i
    }
  }
  return Number(digits.join(""));
};

console.log(monotoneIncreasingDigits(10));
