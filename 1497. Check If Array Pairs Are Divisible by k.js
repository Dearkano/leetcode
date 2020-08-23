/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const map = new Array(k).fill(0);
  for (let n of arr) {
    n = n % k;
    if (n < 0) n += k;
    map[n]++;
  }
  if (map[0] % 2 !== 0) return false;
  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (map[i] !== map[k - i]) return false;
  }
  return true;
};
console.log(canArrange([1, 5, 2, 4, 3, 3, 3], 6));
