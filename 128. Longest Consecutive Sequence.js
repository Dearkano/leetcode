// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;
//   let ans = 1;
//   const map = new Map();
//   const group = new Map();
//   const find = (i) => {
//     if (group.get(i) === i) return i;
//     const x = find(group.get(i));
//     map.set(i, x);
//     return x;
//   };
//   for (const n of nums) {
//     map.set(n, 1);
//     group.set(n, n);
//   }
//   for (const n of nums) {
//     if (group.get(n - 1) && group.get(n) === n) {
//       const a = find(n);
//       const b = find(n - 1);
//       const g = Math.min(a, b);
//       const len = map.get(a) + map.get(b);
//       group.set(n, g);
//       group.set(n - 1, g);
//       map.set(g, len);
//       ans = Math.max(ans, len);
//     }
//   }
//   return ans;
// };

const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;
  const map = new Map();
  let ans = 1;
  for (const n of nums) {
    if (map.get(n)) continue;
    const left = map.get(n - 1) || 0;
    const right = map.get(n + 1) || 0;
    const len = left + right + 1;
    map.set(n, len);
    ans = Math.max(ans, len);
    map.set(n - left, len);
    map.set(n + right, len);
  }
  return ans;
};
console.log(longestConsecutive([1, 3, 5, 2, 4]));
