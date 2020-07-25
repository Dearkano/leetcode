/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  const fib = [1, 1];
  for (let i = 2; i < N; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[N - 1];
};
