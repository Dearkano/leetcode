/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  let flag = [];
  if (!arr.includes(0)) return false;
  const check = (cur) => {
    if (cur < 0 || cur >= arr.length || flag[cur]) return false;
    if (arr[cur] === 0) return true;
    flag[cur] = true;
    if (check(cur + arr[cur])) return true;
    if (check(cur - arr[cur])) return true;
    return false;
  };

  for (const i in arr) flag[i] = false;
  return check(start);
};
console.log(canReach([0, 3, 0, 6, 3, 3, 4], 6));
