/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  if (buildings.length === 0) return [];
  buildings.sort((a, b) => b[2] - a[2]);
  const arr = [[0, Infinity, 0]];
  for (const building of buildings) {
    const [l, r, h] = building;
    if (h === 30) {
      console.log(1);
    }
    for (let i = 0; i < arr.length; i++) {
      const [start, end, height] = arr[i];
      if (l >= start && l < end && h > height) {
        const newArr = [];
        if (l > start) newArr.push([start, l, height]);
        newArr.push([l, r, h]);
        if (r < end) newArr.push([r, end, height]);
        arr.splice(i, 1, ...newArr);
      } else if (r > start && r < end && h > height) {
        arr.splice(i, 1, [start, r, h], [r, end, height]);
      } else if (l <= start && r >= end && h > height) {
        arr[i][2] = h;
      } else if (start >= r) break;
    }
  }
  let i = 0;
  while (i + 1 < arr.length) {
    if (arr[i][2] === arr[i + 1][2]) arr.splice(i + 1, 1);
    else i++;
  }
  const ans = [];
  for (const item of arr) {
    if (ans.length === 0 && item[2] === 0) continue;
    ans.push([item[0], item[2]]);
  }
  return ans;
};

console.log(
  getSkyline([
    [2, 4, 70],
    [3, 8, 30],
    [6, 100, 41],
    [7, 15, 70],
    [10, 30, 102],
    [15, 25, 76],
    [60, 80, 91],
    [70, 90, 72],
    [85, 120, 59],
  ])
);
console.log(
  getSkyline([
    [0, 2, 3],
    [2, 5, 3],
  ])
);
console.log(
  getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8],
  ])
);
