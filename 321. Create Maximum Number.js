/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  const n = nums1.length;
  const m = nums2.length;
  let ans = [];
  // i is the number of element selected from nums1, i ranges from 0, Math.min(k, n) if k<m
  // if k>m, the there must be at least k-m elements selected from nums1, i ranges from k-m to Math.min(k, n)
  for (let i = Math.max(0, k - m); i <= k && i <= n; i++) {
    const candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i), k);
    if (greater(candidate, 0, ans, 0)) ans = candidate;
  }
  return ans;
};

const merge = (nums1, nums2, k) => {
  const arr = [];
  for (let i = 0, j = 0, r = 0; r < k; r++) {
    arr[r] = greater(nums1, i, nums2, j) ? nums1[i++] : nums2[j++];
  }
  return arr;
};

const greater = (nums1, i, nums2, j) => {
  while (i < nums1.length && j < nums2.length && nums1[i] === nums2[j]) {
    i++;
    j++;
  }
  return j === nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
};

// find the max array of nums at length len, with the relative position preserved.
const maxArray = (nums, len) => {
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    if (
      stack.length + nums.length - i > len &&
      stack.length > 0 &&
      stack[stack.length - 1] < nums[i]
    ) {
      stack.pop();
    }
    if (stack.length < len) {
      stack.push(nums[i]);
    }
  }
  return stack;
};
