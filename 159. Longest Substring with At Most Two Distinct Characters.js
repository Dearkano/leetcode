/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstringTwoDistinct = function (s) {
//   const set = new Set();
//   let max = 0;
//   let cur = "";
//   for (let i = 0; i < s.length; i++) {
//     if (!set.has(s[i]) && set.size < 2) {
//       set.add(s[i]);
//     } else if (!set.has(s[i]) && set.size === 2) {
//       const firstChar = cur[0];
//       set.delete(firstChar);
//       let start = cur.lastIndexOf(firstChar) + 1;
//       if (start === cur.length) {
//         set.clear();
//         let i = start - 1;
//         while (cur[i] === cur[i - 1]) i--;
//         start = i;
//         set.add(cur[i]);
//       }
//       cur = cur.substring(start);
//       set.add(s[i]);
//     } else {
//     }
//     cur += s[i];
//     if (cur.length > max) max = cur.length;
//   }
//   return max;
// };

// const lengthOfLongestSubstringTwoDistinct = (s) => {
//   let l = 0;
//   let r = 0;
//   const set = new Set();
//   const map = new Map();
//   let ans = 0;
//   while (r < s.length) {
//     if (!set.has(s[r])) {
//       if (set.size === 2) {
//         const twoChars = [];
//         for (const item of set) twoChars.push(item);
//         const [a, b] = twoChars;
//         while (map.get(a) > 0 && map.get(b) > 0) {
//           map.set(s[l], map.get(s[l]) - 1);
//           l++;
//         }
//         if (map.get(a) === 0) set.delete(a);
//         if (map.get(b) === 0) set.delete(b);
//       }
//       map.set(s[r], 0);
//       set.add(s[r]);
//     }
//     map.set(s[r], map.get(s[r]) + 1);
//     r++;
//     ans = Math.max(ans, r - l);
//   }
//   return ans;
// };

const lengthOfLongestSubstringTwoDistinct = (s) => {
  if (s.length === 1) return 1;
  // the head of cur substring
  let p1 = 0;
  // the first char's last index
  let p2 = -1;
  let ans = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      continue;
    }
    // s[p1] is the first char s[p2] is the second char
    // now let's check if s[i] the third char
    if (p2 > -1 && s[i] !== s[p2]) {
      ans = Math.max(ans, i - p1);
      // update p1 to the second char's first index (the new first char)
      p1 = p2 + 1;
    }
    // update p2 to the second (the new first) char's last index
    p2 = i - 1;
  }
  return Math.max(ans, s.length - p1);
};
console.log(lengthOfLongestSubstringTwoDistinct("abcc"));
