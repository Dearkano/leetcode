/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  // find medium
  const midIndex = Math.floor(nums.length / 2);
  quickSelection(nums, midIndex);
  const median = nums[midIndex];
  let i = 0;
  let j = 0;
  let k = nums.length - 1;
  const map = (n) => (1 + 2 * n) % (nums.length | 1);
  while (j <= k) {
    if (nums[map(j)] > median) {
      swap(map(j++), map(i++));
    } else if (nums[map(j)] < median) {
      swap(map(j), map(k--));
    } else j++;
  }
};

const quickSelection = (nums, k) => {
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  const qSort = (l, r) => {
    if (l >= r) return;
    let p = l - 1;
    for (let i = l; i <= r; i++) {
      if (nums[i] <= nums[r]) {
        p++;
        swap(i, p);
      }
    }
    if (p < k) {
      qSort(p + 1, r);
    } else if (p > k) {
      qSort(l, p - 1);
    }
  };

  qSort(0, nums.length - 1);
  return nums[k];
};

console.log(wiggleSort([1, 3, 2, 2, 3, 1]));
console.log(wiggleSort([1, 5, 1, 1, 6, 4]));
