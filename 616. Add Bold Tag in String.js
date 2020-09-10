/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
var addBoldTag = function (s, dict) {
  const flag = new Array(s.length).fill(false);
  for (let i = 0, rightmost = 0; i < s.length; i++) {
    for (const str of dict) {
      if (s.startsWith(str, i)) {
        rightmost = Math.max(rightmost, i + str.length);
      }
    }
    flag[i] = i < rightmost;
  }
  let ans = "";
  let i = 0;
  while (i < s.length) {
    while (i < s.length && !flag[i]) {
      ans += s[i];
      i++;
    }
    if (i === s.length) break;
    ans += "<b>";
    while (i < s.length && flag[i]) {
      ans += s[i];
      i++;
    }
    ans += "</b>";
  }
  return ans;
};
