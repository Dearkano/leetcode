/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  maxHeap(nums);
  return nums[k - 1];
};

const maxHeap = (nums) => {
  const adjustHeap = (i, len) => {
    const temp = nums[i];
    for (let k = 2 * i + 1; k < len; k = 2 * k + 1) {
      if (k + 1 < len && nums[k + 1] < nums[k]) {
        k++;
      }
      if (nums[k] < temp) {
        nums[i] = nums[k];
        i = k;
      } else break;
    }
    nums[i] = temp;
  };
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  // build heap
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    adjustHeap(i, nums.length);
  }

  // sort
  for (let l = nums.length - 1; l > 0; l--) {
    swap(0, l);
    adjustHeap(0, l);
  }
};

findKthLargest([3, 2, 1, 5, 6, 4]);
