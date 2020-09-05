/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // no carry
  if (b === 0) return a;
  // a is the result without considering carry, b is the carry
  return getSum(a ^ b, (a & b) << 1);
};
