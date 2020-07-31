/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function (expression) {
  const process = (str) => {
    if (!str.includes("?")) return str;
    let l = 0;
    let r = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "?") l++;
      if (str[i] === ":") r++;
      if (l === r && l > 0) {
        const left = str.substring(2, i);
        const right = str.substring(i + 1);
        if (str[0] === "T") {
          return process(left);
        } else {
          return process(right);
        }
      }
    }
  };
  return process(expression)
};
