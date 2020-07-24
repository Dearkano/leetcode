/**
 * @param {number[]} A
 * @return {number}
 */
// var maxTurbulenceSize = function (A) {
//   if (A.length < 2) return A.length;
//   let ans = 1;
//   const getSign = (a, b) => {
//     if (A[a] > A[b]) return 1;
//     if (A[a] < A[b]) return -1;
//     else return 0;
//   };
//   for (let start = 0; start < A.length - 1; start++) {
//     let cur = start;
//     let first = true;
//     let len = 1;
//     let sign = null;
//     for (let i = start + 1; i < A.length; i++) {
//       if (first) {
//         if (getSign(cur, i) === 0) continue;
//         first = false;
//       }
//       if (sign !== null && sign !== -1 * getSign(cur, i)) break;
//       len++;
//       sign = getSign(cur, i);
//       cur = i;
//     }
//     if (ans < len) ans = len;
//   }
//   return ans;
// };

const maxTurbulenceSize = (A) => {
  // compare to leetcode 376, this problem does not delete the node
  // therefore, we only need to maintain the longest length of up-down-up or down-up-down, instead of every point
  if (A.length < 2) return A.length;
  let up_down = 1;
  let down_up = 1;
  let ans = 1;
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
      down_up = up_down + 1;
      up_down = 1;
    } else if (A[i] < A[i - 1]) {
      up_down = down_up + 1;
      down_up = 1;
    } else {
      down_up = 1;
      up_down = 1;
    }
    let max = Math.max(up_down, down_up);
    if (ans < max) ans = max;
  }
  return ans;
};

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]));
