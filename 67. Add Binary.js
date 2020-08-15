/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ans = '';
  let carry = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const curA = i >= 0 ? Number(a[i]) : 0;
    const curB = j >= 0 ? Number(b[j]) : 0;
    let sum = curA + curB + carry;
    if (sum === 3) {
      carry = 1;
      ans = '1' + ans
    } else if (sum === 2) {
      carry = 1;
      ans = '0' + ans
    } else if (sum === 1) {
      carry = 0;
      ans = '1' + ans
    } else {
      carry = 0;
      ans = '0' + ans
    }
  }
  if (carry) ans = '1' + ans
  return ans;
};

console.log(addBinary("1010", "1011"));
console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);
