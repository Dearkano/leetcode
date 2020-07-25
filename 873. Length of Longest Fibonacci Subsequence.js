/**
 * @param {number[]} A
 * @return {number}
 */
// var lenLongestFibSubseq = function (A) {
//   const dp = [1, 1];
//   const fib = [[], [[A[0]]]];
//   for (let i = 2; i < A.length; i++) {
//     if (!dp[i]) dp[i] = 1;
//     if (!fib[i]) fib[i] = [];
//     for (let j = i - 1; j > 0; j--) {
//       for (let k = 0; k < j; k++) {
//         if (A[k] + A[j] === A[i]) {
//           let flag = false;
//           for (const arr of fib[j]) {
//             if (arr[arr.length - 1] === A[k]) {
//               if (!flag) flag = true;
//               const newArr = [].concat(arr, A[j]);
//               fib[i].push(newArr);
//               dp[i] = Math.max(dp[i], newArr.length);
//             }
//           }
//           if (!flag) {
//             fib[i].push([A[k], A[j]]);
//             dp[i] = Math.max(dp[i], 2);
//           }
//         }
//       }
//     }
//   }
//   let ans = 1;
//   for (const len of dp) if (ans < len) ans = len;
//   return ans === 1 ? 0 : ans + 1;
// };

const lenLongestFibSubseq = (A) => {
  let ans = 0;
  const dp = [];
  for (let i = 0; i < A.length; i++) dp[i] = [];
  for (let i = 2; i < A.length; i++) {
    let l = 0,
      r = i - 1;
    while (l < r) {
      if (A[l] + A[r] > A[i]) {
        r--;
      } else if (A[l] + A[r] < A[i]) {
        l++;
      } else {
        if (!dp[l][r]) dp[l][r] = 0;
        dp[r][i] = dp[l][r] + 1;
        ans = Math.max(ans, dp[r][i]);
        l++;
        r--;
      }
    }
  }
  return ans === 0 ? 0 : ans + 2;
};
console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
