/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//   if (!digits) return [];
//   digits = digits.split("").map((i) => Number(i));
//   const map = [
//     [],
//     [],
//     ["a", "b", "c"],
//     ["d", "e", "f"],
//     ["g", "h", "i"],
//     ["j", "k", "l"],
//     ["m", "n", "o"],
//     ["p", "q", "r", "s"],
//     ["t", "u", "v"],
//     ["w", "x", "y", "z"],
//   ];
//   const ans = []

//   const getCharArr = (i) => {
//     if (i === digits.length - 1) return map[digits[i]];
//     let temp = [];
//     let arr = getCharArr(i + 1);
//     for (const char of map[digits[i]]) {
//       temp = temp.concat(arr.map((s) => char + s));
//     }
//     return temp;
//   };
//   return getCharArr(0);
// };
var letterCombinations = function (digits) {
  if (!digits) return [];
  digits = digits.split("").map((i) => Number(i));
  const map = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  const ans = [];

  const getCharArr = (i, res) => {
    if (res.length === digits.length) ans.push(res);
    if (i < digits.length)
      for (const char of map[digits[i]]) {
        getCharArr(i + 1, res + char);
      }
  };
  getCharArr(0, "");
  return ans;
};

console.log(letterCombinations("23"));
