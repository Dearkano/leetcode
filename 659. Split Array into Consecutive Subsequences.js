/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  let pre = nums[0] - 1;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  for (let i = 0; i < nums.length; ) {
    let count = 0;
    let cur = nums[i];
    for (cur = nums[i]; i < nums.length && cur === nums[i]; i++) {
      count++;
    }
    if (cur !== pre + 1) {
      if (p1 !== 0 || p2 !== 0) {
        return false;
      }
      p1 = count;
      p2 = 0;
      p3 = 0;
      pre = cur;
      continue;
    } else {
      if (count < p1 + p2) return false;
      // length 2 = pre length 1
      let c2 = p1 < count ? p1 : count;
      // length 3 = new length 3(pre length2) + the longer ones (p3)
      // but there's a case, if count < p1 + p2, there's no enough nums[i] to maintain the c2 and c3
      // hence, c3 can be negative
      const t = count - p1 - p2 - p3 > 0 ? p3 : count - p1 - p2;
      let c3 = p2 + t;
      let c1 = count - p1 - p2 - p3 > 0 ? count - p1 - p2 - p3 : 0;
      p1 = c1;
      p2 = c2;
      p3 = c3;
      pre = cur;
    }
  }
  return p1 === 0 && p2 === 0;
};

console.log(isPossible([1, 2, 3, 4, 4, 5]));
