/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const arr = [1];
  let f2 = 0;
  let f3 = 0;
  let f5 = 0;
  for (let i = 1; i < n; i++) {
    arr[i] = Math.min(arr[f2] * 2, arr[f3] * 3, arr[f5] * 5);
    if (arr[i] === arr[f2] * 2) f2++;
    if (arr[i] === arr[f3] * 3) f3++;
    if (arr[i] === arr[f5] * 5) f5++;
  }
  return arr[n - 1];
};
console.log(nthUglyNumber(10))
