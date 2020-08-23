/**
 * @param {number[]} arr
 * @return {number}
 */
var maxNumberOfApples = function (arr) {
  let ans = 0;
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (const n of arr) {
    sum += n;
    if (sum <= 5000) ans++;
    else break;
  }
  return ans;
};
console.log(maxNumberOfApples([100, 200, 150, 1000]));
