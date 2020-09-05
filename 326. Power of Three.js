/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  const max = Math.pow(3, 19);
  return n > 0 && max % n === 0;
};

console.log(isPowerOfThree(1234));
