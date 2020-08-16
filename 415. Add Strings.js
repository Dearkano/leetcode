/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0;
  let ans = "";
  for (
    let i = num1.length - 1, j = num2.length - 1;
    i >=0 || j >=0;
    i--, j--
  ) {
    let sum = 0;
    if (i >= 0 && j >= 0) {
      sum = Number(num1[i]) + Number(num2[j]) + carry;
    } else if (i < 0) {
      sum = Number(num2[j]) + carry;
    } else {
      sum = Number(num1[i]) + carry;
    }
    carry = sum >= 10 ? 1 : 0;
    ans = `${sum % 10}${ans}`;
  }
  if (carry === 1) ans = `1${ans}`;
  return ans;
};

console.log(addStrings("9333852702227987", "85731737104263"));
