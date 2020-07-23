/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// too slow!
// const wordBreak = function (s, wordDict) {
//   const cache = new Map();
//   const search = (_s) => {
//     if (!_s) return true;
//     if (cache.get(_s)) return cache.get(_s);
//     let i = 0;
//     while (i <= _s.length) {
//       const left = _s.substring(0, i);
//       const right = _s.substring(i, _s.length);
//       i++;
//       if (!wordDict.includes(left)) continue;
//       if (search(right, wordDict)) {
//         cache.set(right, true);
//         return true;
//       }
//     }
//     cache.set(_s, false)
//     return false;
//   };
//   return search(s);
// };

const wordBreak = function (s, wordDict) {
  const dp = [];
  dp[0] = true
  for (let i = 0; i < s.length; i++) {
    if (!dp[i]) continue;
    const right = s.substring(i, s.length);
    for (const item of wordDict) {
      if (right.startsWith(item)) dp[i + item.length] = true;
    }
  }
  return dp[s.length] || false
};
console.log(wordBreak("applepenapple", ["apple", "pen"]));
