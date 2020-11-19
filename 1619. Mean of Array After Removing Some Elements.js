/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  const l = [];
  const r = [];
  let sum = 0;
  const n = parseInt(arr.length * 0.05);
  for (let i = 0; i < n; i++) {
    l[i] = arr[i];
    r[i] = arr[i];
    sum += arr[i];
  }
  l.sort((a, b) => a - b);
  r.sort((a, b) => a - b);
  for (let i = n; i < arr.length; i++) {
    if (arr[i] < l[n - 1]) {
      l[n - 1] = arr[i];
      l.sort((a, b) => a - b);
    }
    if (arr[i] > r[0]) {
      r[0] = arr[i];
      r.sort((a, b) => a - b);
    }
    sum += arr[i];
  }
  for (let i = 0; i < n; i++) {
    sum -= l[i];
    sum -= r[i];
  }
  return sum / (arr.length - n * 2);
};
console.log(
  trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
);
