// /**
//  * @param {number[]} A
//  * @param {number} S
//  * @return {number}
//  */
// var numSubarraysWithSum = function (A, S) {
//   return numSubarraysWithAtMostSum(A, S) - numSubarraysWithAtMostSum(A, S - 1);
// };
// const numSubarraysWithAtMostSum = (A, S) => {
//   if (S < 0) return 0;
//   let ans = 0;
//   for (let r = 0, l = 0; r < A.length; r++) {
//     S -= A[r];
//     while (S < 0) S += A[l++];
//     ans += r - l + 1;
//   }
//   return ans;
// };

const numSubarraysWithSum = (A, S) => {
  const count = new Array(A.length + 1).fill(0);
  let sum = 0;
  let ans = 0;
  count[0] = 1;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum >= S) ans += count[sum - S];
    count[sum]++;
  }
  return ans;
};
