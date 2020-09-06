/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = [];
  for (let i = 1; i <= numRows; i++) {
    if (i === 1) {
      ans.push([1]);
    } else if (i === 2) {
      ans.push([1, 1]);
    } else {
      const arr = [1];
      for (let j = 1; j < i - 1; j++)
        arr.push(ans[i - 2][j - 1] + ans[i - 2][j]);
      arr.push(1);
      ans.push(arr);
    }
  }
  return ans;
};
console.log(generate(5));
