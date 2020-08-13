/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
  if (N === 0) return cells;
  let pre = cells;
  let cur = [];
  const set = new Set();
  let R = -1;
  for (let i = 1; i <= N; i++) {
    cur = [];
    cur[0] = 0;
    cur[cells.length - 1] = 0;
    for (let j = 1; j < cells.length - 1; j++) {
      if (pre[j - 1] === pre[j + 1]) cur[j] = 1;
      else cur[j] = 0;
    }
    const key = cur.join("-");
    if (set.has(key)) {
      R = i - 1;
      break;
    }
    set.add(key);
    pre = cur;
  }
  if (R < 0) return cur;
  const arr = [...set];
  const k = (N % R) - 1 < 0 ? R - 1 : (N % R) - 1;
  const ans = arr[k].split("-").map((i) => Number(i));
  return ans;
};

console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000));
console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));
console.log(prisonAfterNDays([1, 1, 0, 1, 1, 0, 1, 1], 6));
