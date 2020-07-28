/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function (A, B) {
  let a = 0;
  let b = 0;
  let ans = "";
  const len = A + B;
  for (let i = 0; i < len; i++) {
    if (A > B) {
      if (a < 2) {
        ans += "a";
        a++;
        A--;
        b = 0;
      } else {
        ans += "b";
        b++;
        a = 0;
        B--;
      }
    } else {
      if (b < 2) {
        ans += "b";
        b++;
        B--;
        a = 0;
      } else {
        ans += "a";
        a++;
        A--;
        b = 0;
      }
    }
  }
  return ans;
};
console.log(strWithout3a3b(3, 1));
