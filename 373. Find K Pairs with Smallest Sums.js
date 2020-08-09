/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// var kSmallestPairs = function (nums1, nums2, k) {
//   let ans = [];
//   let i = 0;
//   let j = 0;
//   for (; k > 0 && (i < nums1.length && j < nums2.length); k--) {
//     ans.push([nums1[i], nums2[j]]);
//     if (i < nums1.length - 1 && j < nums2.length - 1) {
//       if (nums1[i + 1] + nums2[j] < nums1[i] + nums2[j + 1]) {
//         i++;
//       } else {
//         j++;
//       }
//     } else if (i === nums1.length - 1) j++;
//     else i++;
//   }
//   return ans;
// };
var kSmallestPairs = function (nums1, nums2, k) {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      ans.push([nums1[i], nums2[j]]);
    }
  }
  ans.sort((a, b) => a[0] + a[1] - b[0] - b[1]);
  return ans.slice(0, k);
};

console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 3));
