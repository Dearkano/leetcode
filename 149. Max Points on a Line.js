/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length === 0) return 0;
  const pMap = new Map();
  const map = new Map();
  const set = new Set();
  let ans = 1;
  for (const point of points) {
    const key = `${point[0]},${point[1]}`;
    if (!pMap.get(key)) pMap.set(key, 0);
    pMap.set(key, pMap.get(key) + 1);
    ans = Math.max(ans, pMap.get(key));
  }
  const arr = [...pMap];
  for (let i = 0; i < arr.length - 1; i++) {
    const s = new Set();
    for (let j = i + 1; j < arr.length; j++) {
      const [x1, y1] = arr[i][0].split(",").map((i) => Number(i));
      const [x2, y2] = arr[j][0].split(",").map((i) => Number(i));
      const gcd = getGCD(y2 - y1, x2 - x1);
      const diffY = (y2 - y1) / gcd;
      const diffX = (x2 - x1) / gcd;
      const k = `${diffY} / ${diffX}`;
      let key = "";
      if (k === Infinity || k === -Infinity) {
        key = `x=${x1}`;
      } else {
        const b = y1 - k * x1;
        key = `y=${k}x+${b}-${k * x1}+${y1}`;
      }
      if (set.has(key)) continue;
      if (!map.get(key)) map.set(key, arr[i][1]);
      map.set(key, map.get(key) + arr[j][1]);
      ans = Math.max(ans, map.get(key));
      s.add(key);
    }
    for (const item of s) set.add(item);
  }
  return ans;
};
const getGCD = (a, b) => {
  if (b === 0) return a;
  else return getGCD(b, a % b);
};
console.log(
  maxPoints([
    [0, 0],
    [94911151, 94911150],
    [94911152, 94911151],
  ])
);
console.log(
  maxPoints([
    [4, 0],
    [4, -1],
    [4, 5],
  ])
);
console.log(
  maxPoints([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
);
console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ])
);
