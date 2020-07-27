// /**
//  * @param {number[]} A
//  * @param {number[]} B
//  * @return {number[]}
//  */
// var advantageCount = function (A, B) {
//   A.sort((a, b) => a - b);
//   const findNextBig = (i, v) => {
//     let min = Infinity;
//     let j = i;
//     let ans = A.length;
//     for (; j < A.length; j++) {
//       if (A[j] > v) {
//         if (min > A[j]) {
//           min = A[j];
//           ans = j;
//         }
//       }
//     }
//     return ans;
//   };
//   const findNextSmall = (i) => {
//     let min = Infinity;
//     let j = i;
//     let ans = j;
//     for (; j < A.length; j++) {
//       if (min > A[j]) {
//         min = A[j];
//         ans = j;
//       }
//     }
//     return ans;
//   };
//   const swap = (i, j) => {
//     const temp = A[i];
//     A[i] = A[j];
//     A[j] = temp;
//   };
//   for (let i = 0; i < B.length; i++) {
//     let j = findNextBig(i, B[i]);
//     if (j !== A.length) {
//       swap(i, j);
//     } else {
//       j = findNextSmall(i);
//       swap(i, j);
//     }
//   }
//   return A;
// };
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function (A, B) {
  A.sort((a, b) => a - b);
  const BWithIdx = [];
  for (let i in B) {
    BWithIdx.push({ index: Number(i), value: B[i] });
  }
  BWithIdx.sort((a, b) => b.value - a.value);
  let l = 0;
  let r = A.length - 1;
  const res = [];
  for (let i = 0; i < BWithIdx.length; i++) {
    const { index, value } = BWithIdx[i];
    if (A[r] > value) res[index] = A[r--];
    else res[index] = A[l++];
  }
  return res;
};
console.log(advantageCount([9, 1, 2, 4, 5], [6, 2, 9, 1, 4]));
