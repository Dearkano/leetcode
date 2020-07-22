/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim();
  let sign = 1;
  let pre = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "+" || char === "-") {
      const substr = s.substring(pre, i);
      pre = i + 1;
      const temp = calculateInOrder(substr);
      result = result + temp * sign;
      if (char === "+") sign = 1;
      else sign = -1;
    }
  }
  const last = calculateInOrder(s.substring(pre, s.length));
  result = result + last * sign;
  return result;
};

const calculateInOrder = (s) => {
  let result = 0;
  let sign = "+";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === " ") continue;
    if (!isNaN(Number(char))) {
      const num = Number(char);
      let r = num;
      let next = s[i + 1];
      while (i + 1 < s.length && !isNaN(Number(next)) && next !== " ") {
        r = r * 10 + Number(s[i + 1]);
        i++;
        next = s[i + 1];
      }
      switch (sign) {
        case "+":
          result += r;
          break;
        case "*":
          result *= r;
          break;
        case "/":
          result = Math.floor(result / r);
        default:
      }
    } else {
      sign = char;
    }
  }
  return result;
};
console.log(calculate("14/3-2"));
