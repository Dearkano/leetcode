/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function (s) {
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (map.get(s[i]) === undefined) map.set(s[i], 0);
//     map.set(s[i], map.get(s[i]) + 1);
//   }
//   const arr = [...map];
//   arr.sort((a, b) => b[1] - a[1]);
//   let ans = "";
//   arr.forEach((item) => {
//     for (let i = 0; i < item[1]; i++) ans += item[0];
//   });
//   return ans;
// };

var frequencySort = function (s) {
  const arr = [];
  for (let i = 0; i <= 122; i++)
    arr[i] = { key: String.fromCharCode(i), value: 0 };
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i)].value++;
  }
  arr.sort((a, b) => b.value - a.value);
  let ans = "";
  let i = 0;
  while (arr[i].value > 0) {
    for (let j = 0; j < arr[i].value; j++) ans += arr[i].key;
    i++
  }
  return ans;
};
