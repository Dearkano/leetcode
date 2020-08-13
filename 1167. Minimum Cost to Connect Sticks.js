/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
  if (sticks.length < 2) return 0;
  sticks.sort((a, b) => a - b);
  let idx1 = 0;
  const sum = [];
  let idx2 = 0;
  let ans = 0;
  while (idx1 < sticks.length || idx2 < sum.length - 1) {
    let cur = 0;
    for (let i = 0; i < 2; i++) {
      if (
        idx1 < sticks.length &&
        (idx2 === sum.length || sticks[idx1] < sum[idx2])
      ) {
        cur += sticks[idx1++];
      } else {
        cur += sum[idx2++];
      }
    }
    sum.push(cur);
    ans += cur;
  }
  return ans;
};
