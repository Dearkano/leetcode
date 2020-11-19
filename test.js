/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let ans = "";
  let i = 0;
  while (i < s.length) {
    let p = 0;
    while (!Number.isNaN(s[i])) {
      p = p * 10 + Number(s[i]);
      i++;
    }
    if (p === 0) {
      ans += s[i];
      i++;
      continue;
    }
    let l = 0;
    let r = 0;
    let start = i;
    while (l === 0 || l !== r) {
      if (s[i] === "[") l++;
      if (s[i] === "]") r++;
      i++;
    }
    for (let j = 0; j < p; j++)
      ans += decodeString(s.substring(start + 1, i - 1));
  }
  return ans;
};

console.log(decodeString("3[a]2[bc]"));
