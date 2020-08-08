/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function (word) {
  const ans = [];
  const dfs = (i, s) => {
    if (i === word.length) {
      ans.push(s.join(""));
      return;
    }
    // 1. the i-1 char is an abbr, eg. xsa5->ad -> xsa6d
    if (i > 0 && !isNaN(Number(s[s.length - 1]))) {
      s[s.length - 1] = Number(s[s.length - 1]) + 1;
      dfs(i + 1, s);
      s[s.length - 1] = Number(s[s.length - 1]) - 1;
    }
    // 2. the cur char is compressed, eg. safw->sa -> safw1a
    else if (i === 0 || (i > 0 && isNaN(Number(s[s.length - 1])))) {
      s.push("1");
      dfs(i + 1, s);
      s.pop();
    }
    // 3. do not compress the current char, eg. dqf2->sa -> dqf2sa  dasw->dq -> daswdq
    s.push(word[i]);
    dfs(i + 1, s);
    s.pop();
  };
  dfs(0, []);
  return ans;
};

console.log(generateAbbreviations("word"));
