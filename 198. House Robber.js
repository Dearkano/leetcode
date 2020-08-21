/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let pre = 0;
  let cur = 0;
  for (const n of nums) {
    const temp = cur;
    cur = Math.max(pre + n, cur);
    pre = temp;
  }
  return cur;
};
