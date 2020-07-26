/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // find the minimum number of intervals that cover all points
  if (points.length === 0) return 0;
  points.sort((a, b) => a[0] - b[0]);
  const map = new Map();
  const g = (p) => `${p[0]}-${p[1]}`;
  for (const i in points) {
    map.set(Number(i), g(points[i]));
  }
  let ans = 1;
  const isIntersect = (a, b) => {
    const pre = map.get(a).split("-");
    const preStart = Number(pre[0]);
    const preEnd = Number(pre[1]);
    if (preEnd < points[b][0] || points[b][1] < preStart) return false;
    const start = Math.max(preStart, points[b][0]);
    const end = Math.min(preEnd, points[b][1]);
    map.set(b, g([start, end]));
    return true;
  };
  for (let i = 1; i < points.length; i++) {
    if (!isIntersect(i - 1, i)) ans++;
  }
  return ans;
};

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);
