/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  const M = A.length;
  const N = A[0].length;
  let ans = 0;
  ans += (1 << (N - 1)) * M;
  for (let j = 1; j < N; j++) {
    let count = 0;
    for (let i = 0; i < M; i++) {
      // if A[i][0] is 1, then these points are 1 too
      // count the 1s in col j
      if (A[i][j] === A[i][0]) {
        count++;
      }
    }
    // 1s > 0s
    if (count > M - count) {
      ans += (1 << (N - j - 1)) * count;
    } else {
      ans += (1 << (N - j - 1)) * (M - count);
    }
  }
  return ans;
};
console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
);
