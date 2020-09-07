/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function (length, updates) {
  const arr = new Array(length + 1).fill(0);
  for (const op of updates) {
    arr[op[0]] += op[2];
    arr[op[1] + 1] -= op[2];
  }

  for (let i = 1; i < length + 1; i++) {
    arr[i] += arr[i - 1];
  }
  arr.pop();
  return arr;
};
