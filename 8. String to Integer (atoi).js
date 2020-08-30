/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.trim();
  let i = 0;
  let base = 0;
  let sign = 1;
  if (str[i] === "-" || str[i] === "+") {
    if (str[i] === "-") sign *= -1;
    i++;
  }
  while (i < str.length && str[i] !== " " && !isNaN(Number(str[i]))) {
    base = base * 10 + Number(str[i]);
    if (base > 2 ** 31 - 1) {
      if (sign > 0) return 2 ** 31 - 1;
      else return -(2 ** 31);
    }
    i++;
  }
  return base * sign;
};

console.log(myAtoi("   -42"));
