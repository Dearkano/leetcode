/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) return 0;
  let far = 0;
  let thisStep = 0;
  let step = 0;
  for (let i = 0; i < nums.length; i++) {
    far = far > i + nums[i] ? far : i + nums[i];
    if (far >= nums.length - 1) {
      step++;
      break;
    }
    if (i === thisStep) {
      step++;
      thisStep = far;
    }
  }
  return step;
};

console.log(
  jump([
    8,
    2,
    4,
    4,
    4,
    9,
    5,
    2,
    5,
    8,
    8,
    0,
    8,
    6,
    9,
    1,
    1,
    6,
    3,
    5,
    1,
    2,
    6,
    6,
    0,
    4,
    8,
    6,
    0,
    3,
    2,
    8,
    7,
    6,
    5,
    1,
    7,
    0,
    3,
    4,
    8,
    3,
    5,
    9,
    0,
    4,
    0,
    1,
    0,
    5,
    9,
    2,
    0,
    7,
    0,
    2,
    1,
    0,
    8,
    2,
    5,
    1,
    2,
    3,
    9,
    7,
    4,
    7,
    0,
    0,
    1,
    8,
    5,
    6,
    7,
    5,
    1,
    9,
    9,
    3,
    5,
    0,
    7,
    5,
  ])
);
