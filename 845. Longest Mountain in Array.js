/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
  let l = 0;
  let r = 1;
  let ans = 0;
  while (r < A.length) {
    let foot = r;
    while (A[r] > A[r - 1]) r++;
    if (foot === r) {
      while (A[r] <= A[r - 1]) r++;
      l = r;
      continue;
    }
    let peak = r;
    while (A[r] < A[r - 1]) r++;
    if (peak === r) {
      while (A[r] >= A[r - 1]) r++;
      l = r;
      continue;
    }

    if (l === 0) l++;
    ans = Math.max(ans, r - l + 1);
    l = r;
  }
  return ans;
};
console.log(longestMountain([2, 0, 2, 0]));
