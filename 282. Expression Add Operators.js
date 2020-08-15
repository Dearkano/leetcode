/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  if (num.length === 0) return [];
  const nums = num.split("").map((i) => Number(i));
  const ans = [];
  const dfs = (str, start, cur, factor) => {
    if (start === nums.length) {
      if (cur === target) ans.push(str);
      return;
    }
    let curNum = 0;
    for (let i = start; i < nums.length; i++) {
      // string as 032 is invalid number
      if (nums[start] === 0 && i > start) break;
      curNum = curNum * 10 + nums[i];
      if (start === 0) {
        dfs(str + curNum, i + 1, curNum, curNum);
      } else {
        dfs(str + "+" + curNum, i + 1, cur + curNum, curNum);
        dfs(str + "-" + curNum, i + 1, cur - curNum, -curNum);
        dfs(
          str + "*" + curNum,
          i + 1,
          cur - factor + factor * curNum,
          factor * curNum
        );
      }
    }
  };
  dfs("", 0, 0, 0);
  return ans;
};

console.log(addOperators("232", 8));
