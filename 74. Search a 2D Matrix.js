// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var searchMatrix = function (matrix, target) {
//   let m = matrix.length;
//   if (m === 0) return false;
//   let n = matrix[0].length;
//   let top = 0;
//   let bottom = m - 1;
//   // choose the row
//   while (top <= bottom) {
//     let mid = Math.floor((top + bottom) / 2);
//     if (matrix[mid][n - 1] >= target && matrix[mid][0] <= target) {
//       let left = 0;
//       let right = n - 1;
//       while (left <= right) {
//         let m = Math.floor((left + right) / 2);
//         if (matrix[mid][m] === target) return true;
//         else if (matrix[mid][m] > target) {
//           right = m - 1;
//         } else {
//           left = m + 1;
//         }
//       }
//       return false;
//     } else if (target < matrix[mid][0]) {
//       bottom = mid - 1;
//     } else {
//       top = mid + 1;
//     }
//   }
//   return false;
// };
const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  if (m === 0) return false;
  const n = matrix[0].length;
  const getVal = (i) => {
    const y = i % n;
    const x = Math.floor(i / n);
    return matrix[x][y];
  };
  let l = 0;
  let r = m * n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (getVal(mid) === target) return true;
    else if (getVal(mid) > target) r = mid - 1;
    else l = mid + 1;
  }
  return false;
};

console.log(searchMatrix([[1, 3, 5]], 1));
