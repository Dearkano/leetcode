/**
 * [1, 2, 3, -2, 4] 1 2 6 -12 -48 |  1 2 6 -2 4
 * [-2, 0, -1] 0
 * [2, 3, -2, -3] 2 6 -12 36 | 2 6 -2 6
 * []
 */

const maxProduct = (arr) => {
  if (arr.length === 0) return 0;
  let ans = -Infinity;
  let cur = 1;
  let nCur = 1;
  for (let r = 0; r < arr.length; r++) {
    if (arr[r] === 0) {
      cur = 0;
      nCur = 0;
    } else if (arr[r] * cur > 0) {
      cur *= arr[r];
      nCur *= arr[r];
    } else {
      nCur *= arr[r];
      cur = arr[r];
    }
    ans = Math.max(ans, cur, nCur);
  }
  return ans;
};

console.log(maxProduct([-2]));
console.log(maxProduct([2, 3, -2, -3, -1, 12]));
console.log(maxProduct([1, 2, 3, -2, 4]));
