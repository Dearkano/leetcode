/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function (S) {
  const ans = [];
  const split = (s) => {
    if (s === "" && ans.length > 2) return true;
    for (let i = 1; i <= s.length; i++) {
      if (ans.length <= 1 && i > s.length / 2) return false;
      if (s[0] === "0" && i > 1) return false;
      const cur = Number(s.slice(0, i));
      if (cur > Math.pow(2, 31) - 1) return false;
      if (ans.length >= 2 && cur > ans[ans.length - 2] + ans[ans.length - 1])
        return false;
      if (
        ans.length <= 1 ||
        cur === ans[ans.length - 2] + ans[ans.length - 1]
      ) {
        ans.push(cur);
        if (split(s.slice(i))) {
          return true;
        }
        ans.pop();
      }
    }
    return false;
  };
  split(S);
  return ans;
};
