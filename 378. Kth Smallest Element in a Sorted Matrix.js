// /**
//  * @param {number[][]} matrix
//  * @param {number} k
//  * @return {number}
//  */
// var kthSmallest = function (matrix, k) {
//   const m = matrix.length;
//   if (m === 0) return 0;
//   const n = matrix[0].length;

//   const arr = [];
//   for (let i in matrix) {
//     const row = matrix[i];
//     for (const j of row) {
//       arr.push(j);
//     }
//   }
//   arr.sort((a, b) => a - b);
//   return arr[k - 1];
// };

const kthSmallest = (matrix, k) => {
  const m = matrix.length;
  if (m === 0) return 0;
  const n = matrix[0].length;
  let l = matrix[0][0];
  let r = matrix[m - 1][n - 1];
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    let count = 0;
    for (let i = 0; i < m; i++) {
      let j = n - 1;
      while (j >= 0 && matrix[i][j] > mid) j--;
      count += j + 1;
    }
    if (count >= k) r = mid;
    else l = mid + 1;
  }
  return l;
};
