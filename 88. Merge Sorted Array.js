/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   if (m === 0) {
//     for (let i = 0; i < n; i++) nums1[i] = nums2[i];
//   } else {
//     for (let i = 0; i < n; i++) {
//       for (let j = m; j >= 0; j--) {
//         if (j > 0 && nums1[j - 1] > nums2[i]) {
//           nums1[j] = nums1[j - 1];
//         } else {
//           nums1[j] = nums2[i];
//           break;
//         }
//       }
//       m++;
//     }
//   }
// };

// const merge = function (nums1, m, nums2, n) {
//   for (let i = m; i < m + n; i++) nums1[i] = nums2[i - m];
//   nums1.sort((a, b) => a - b);
// };

const merge = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let p3 = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums2[p2] > nums1[p1]) {
      nums1[p3--] = nums2[p2--];
    } else {
      nums1[p3--] = nums1[p1--];
    }
  }
  if (p2 >= 0) {
    while (p2 >= 0) nums1[p3--] = nums2[p2--];
  }
};
console.log(merge([2, 0], 1, [1], 1));
