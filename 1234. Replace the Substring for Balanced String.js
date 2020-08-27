/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const count = [0, 0, 0, 0];
  const mapping = { Q: 0, W: 1, E: 2, R: 3 };
  for (let i = 0; i < s.length; i++) {
    count[mapping[s[i]]]++;
  }
  const n = s.length / 4;
  if (count[0] === n && count[1] === n && count[2] === n && count[3] === n)
    return 0;
  let ans = Infinity;
  for (let r = 0, l = 0; r < s.length; r++) {
    count[mapping[s[r]]]--;
    while (count[0] <= n && count[1] <= n && count[2] <= n && count[3] <= n) {
      ans = Math.min(ans, r - l + 1);
      count[mapping[s[l++]]]++;
    }
  }
  return ans;
};
console.log(balancedString("QWER"));
console.log(balancedString("WQWRQQQW"));
console.log(balancedString("WWEQERQWQWWRWWERQWEQ"));
