/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let res1 = 0;
  let sign1 = 1;
  let res2 = 1;
  let sign2 = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    if (s[i] === "(") {
      let l = 0;
      let r = 0;
      let j = i;
      for (; j < s.length; j++) {
        if (s[j] === "(") l++;
        if (s[j] === ")") r++;
        if (l === r) break;
      }
      const temp = calculate(s.substring(i + 1, j));
      res2 = sign2 === 1 ? res2 * temp : Math.floor(res2 / temp);
      i = j;
    } else if (!isNaN(Number(s[i]))) {
      let num = Number(s[i]);
      while (i + 1 < s.length && s[i + 1] !== " " && !isNaN(Number(s[i + 1]))) {
        num = num * 10 + Number(s[i + 1]);
        i++;
      }
      res2 = sign2 === 1 ? res2 * num : Math.floor(res2 / num);
    } else if (s[i] === "+" || s[i] === "-") {
      res1 = res1 + sign1 * res2;
      res2 = 1;
      sign2 = 1;
      sign1 = s[i] === "+" ? 1 : -1;
    } else if (s[i] === "*" || s[i] === "/") {
      sign2 = s[i] === "*" ? 1 : -1;
    }
  }
  return res1 + sign1 * res2;
};
console.log(calculate("(2+6* 3+5- (3*14/7+2)*5)+3"));
