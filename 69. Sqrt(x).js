/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 0;
  let r = Math.floor(x / 2);
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (mid * mid < x) {
      l = mid + 1;
    } else if (mid * mid > x) {
      r = mid;
    } else {
      return mid;
    }
  }
  if (l * l === x) return l;
  else if (l * l < x) return l;
  else return l - 1;
};
