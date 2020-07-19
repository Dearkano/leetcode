/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const ans = [];
  for (let i = 2; i <= n; i++) ans[i] = 0;
  ans[0] = ans[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      const leftTreeNodeNum = j;
      const rightTreeNodeNum = i - j - 1;
      ans[i] += ans[leftTreeNodeNum] * ans[rightTreeNodeNum];
    }
  }
  return ans[n];
};
