/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  return remove(num, k) || '0';
};
const remove = (num, k) => {
  if (k === 0) return num;
  let firstZero = num.length;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "0") {
      firstZero = i;
      break;
    }
  }
  if (firstZero < num.length && k >= firstZero) {
    num = num.substring(firstZero + 1, num.length);
    k = k - firstZero;
    return remove(num, k);
  }
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] > num[i + 1]) {
      num = num.substring(0, i) + num.substring(i + 1);
      k--;
      return remove(num, k)
    }
  }
  if (k > 0) num = num.substring(0, num.length - k);
  return num;
};
console.log(removeKdigits("709423102314", 5));