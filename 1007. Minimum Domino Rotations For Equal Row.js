// /**
//  * @param {number[]} A
//  * @param {number[]} B
//  * @return {number}
//  */
// var minDominoRotations = function (A, B) {
//   const ans = [];
//   const mapA = new Map();
//   const mapB = new Map();
//   for (let i = 0; i < 6; i++) {
//     ans[i] = [];
//     mapA.set(i, 0);
//     mapB.set(i, 0);
//   }
//   for (let i = 0; i < A.length; i++) {
//     ans[A[i] - 1][i] = 1;
//     ans[B[i] - 1][i] = 1;
//     mapA.set(A[i] - 1, mapA.get(A[i] - 1) + 1);
//     mapB.set(B[i] - 1, mapB.get(B[i] - 1) + 1);
//   }
//   const possibles = [];
//   for (let i = 0; i < 6; i++) {
//     let flag = false;
//     for (let j = 0; j < A.length; j++) {
//       if (!ans[i][j]) {
//         flag = true;
//         break;
//       }
//     }
//     if (!flag) possibles.push(i);
//   }
//   if (possibles.length === 0) return -1;
//   let min = Infinity;
//   for (const p of possibles) {
//     const mA = Math.min(mapA.get(p), A.length - mapA.get(p));
//     const mB = Math.min(mapB.get(p), A.length - mapB.get(p));
//     min = Math.min(min, mA, mB);
//   }
//   return min;
// };

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {
  let ans = Infinity;
  for (let v = 1; v <= 6; v++) {
    let a = 0;
    let b = 0;
    let i = 0;
    for (; i < A.length; i++) {
      if (A[i] === v) a++;
      if (B[i] === v) b++;
      if (A[i] !== v && B[i] !== v) break;
    }
    if (i === A.length) {
      const res = A.length - Math.max(a, b);
      if (ans > res) ans = res;
    }
  }
  return ans === Infinity ? -1 : ans;
};

console.log(
  minDominoRotations([1, 2, 1, 1, 1, 2, 2, 2], [2, 1, 2, 2, 2, 2, 2, 2])
);
