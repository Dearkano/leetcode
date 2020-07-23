/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// too slow!
// const wordBreak = function (s, wordDict) {
//   const cache = new Map();
//   const ans = [];
//   let stack = [];
//   const search = (_s) => {
//     if (_s == "penapple") {
//       console.log("1");
//     }
//     if (!_s || wordDict.includes(_s)) {
//       if (wordDict.includes(_s)) stack.push(_s);
//       ans.push(stack.join(" "));
//       stack = [];
//       return true;
//     }
//     if (cache.get(_s) === false) return cache.get(_s);
//     let i = 0;
//     while (i <= _s.length) {
//       const left = _s.substring(0, i);
//       if(left==='applepen'){
//           console.log(11)
//       }
//       const right = _s.substring(i, _s.length);
//       i++;
//       if (!search) continue;
//       stack.push(left);
//       if (search(right, wordDict)) {
//         cache.set(right, true);
//         console.log(right)
//         if (_s === s) continue;
//         return true;
//       }
//     }
//     cache.set(_s, false);
//     return false;
//   };
//   search(s);
//   return ans;
// };

const wordBreak = function (s, wordDict) {
  const map = new Map();
  const dp = new Map();
  const dfs = (str) => {
    if (map.get(str)) return map.get(str);
    if (!str) return [""];
    if (dp.get(str) === false) return [];
    else if (dp.get(str) === true) {
    } else {
      if (!check(str, wordDict)) {
        dp.set(str, false);
        return [];
      } else {
        dp.set(str, true);
      }
    }
    const newList = [];
    for (const item of wordDict) {
      if (str.startsWith(item)) {
        const list = dfs(str.substring(item.length));
        for (const l of list) {
          const _s = l ? `${item} ${l}` : item;
          newList.push(_s);
        }
      }
    }
    map.set(str, newList);
    return newList;
  };
  const ans = dfs(s);
  return ans;
};
const check = function (s, wordDict) {
  const dp = [];
  dp[0] = true;
  for (let i = 0; i < s.length; i++) {
    if (!dp[i]) continue;
    const right = s.substring(i, s.length);
    for (const item of wordDict) {
      if (right.startsWith(item)) dp[i + item.length] = true;
    }
  }
  return dp[s.length] || false;
};
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
