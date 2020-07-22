/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const cache = [];
  let result = 0;
  let sign = 1;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === " ") continue;
    if (!isNaN(Number(char))) {
      const num = Number(char);
      let r = num;
      const next = s[i + 1];
      while (i + 1 < s.length && !isNaN(Number(s[i + 1])) && s[i + 1] !== " ") {
        r = r * 10 + Number(s[i + 1]);
        i++;
      }
      result += r * sign;
    } else {
      switch (char) {
        case "+":
          sign = 1;
          break;
        case "-":
          sign = -1;
          break;
        case "(":
          cache.push(result);
          cache.push(sign);
          result = 0;
          sign = 1;
          break;
        case ")":
          const prevSign = cache.pop();
          const prevResult = cache.pop();
          result = prevResult + prevSign * result;
        default:
      }
    }
  }
  return result;
};

console.log(calculate("1 + 1"));
