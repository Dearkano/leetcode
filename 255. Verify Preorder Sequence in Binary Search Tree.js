/**
 * @param {number[]} preorder
 * @return {boolean}
 */
// var verifyPreorder = function (preorder) {
//   const verify = (l, r) => {
//     if (r - l < 3) return true;
//     if (r - l === 3) {
//       if (preorder[l + 2] < preorder[l] && preorder[l + 1] > preorder[l])
//         return false;
//       else return true;
//     }
//     let root = preorder[l];
//     let idx = r;
//     for (let i = l + 1; i < r; i++) {
//       if (preorder[i] > root) {
//         idx = i;
//         break;
//       }
//     }
//     for (let i = idx; i < r; i++) {
//       if (preorder[i] < root) return false;
//     }
//     return verify(l + 1, idx) && verify(idx, r);
//   };
//   return verify(0, preorder.length);
// };

// const verifyPreorder = (preorder) => {
//   const stack = [];
//   let low = -Infinity;
//   for (const p of preorder) {
//     if (p < low) return false;
//     while (stack.length > 0 && p > stack[stack.length - 1]) {
//       low = stack.pop();
//     }
//     stack.push(p);
//   }
//   return true
// };

const verifyPreorder = (preorder) => {
  let i = -1;
  let low = -Infinity;
  for (const p of preorder) {
    if (p < low) return false;
    while (i >= 0 && p > preorder[i]) {
      low = preorder[i--];
    }
    preorder[++i] = p;
  }
  return true;
};

console.log(verifyPreorder([1, 3, 2]));
