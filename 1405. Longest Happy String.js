/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let curA = 0;
  let curB = 0;
  let curC = 0;
  let s = "";
  const getMostLeftChar = () => {
    if (curA === 2 && (b > 0 || c > 0)) return b >= c ? "b" : "c";
    if (curB === 2 && (a > 0 || c > 0)) return a >= c ? "a" : "c";
    if (curC === 2 && (a > 0 || b > 0)) return a >= b ? "a" : "b";
    if (a >= b && a >= c && curA < 2) return "a";
    if (b >= a && b >= c && curB < 2) return "b";
    if (c >= a && c >= b && curC < 2) return "c";
    return "";
  };
  const add = (v) => {
    switch (v) {
      case "a":
        curA++;
        curB = 0;
        curC = 0;
        a--;
        break;
      case "b":
        curB++;
        curA = 0;
        curC = 0;
        b--;
        break;
      case "c":
        curC++;
        curA = 0;
        curB = 0;
        c--;
        break;
      default:
    }
    s = s + v;
  };
  while (a > 0 || b > 0 || c > 0) {
    const char = getMostLeftChar();
    if (!char) break;
    add(char);
  }
  return s;
};

console.log(longestDiverseString(7, 1, 0));
