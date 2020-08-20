/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // nums1 is always the longer one
  if (nums1.length > nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  let l = 0;
  let r = nums1.length;
  while (l <= r) {
    let i = Math.floor((l + r) / 2);
    let j = Math.ceil((nums1.length + nums2.length) / 2) - i;
    if (i < r && nums2[j - 1] > nums1[i]) {
      l = i + 1;
    } else if (i > l && nums1[i - 1] > nums2[j]) {
      r = i - 1;
    } else {
      let maxLeft = 0;
      if (i === 0) maxLeft = nums2[j - 1];
      else if (j === 0) maxLeft = nums1[i - 1];
      else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      if ((nums1.length + nums2.length) % 2 === 1) return maxLeft;
      let minRight = 0;
      if (i === nums1.length) minRight = nums2[j];
      else if (j === nums2.length) minRight = nums1[i];
      else minRight = Math.min(nums2[j], nums1[i]);
      return (minRight + maxLeft) / 2;
    }
  }
  return 0;
};
