/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const map1 = new Map();
  const map2 = new Map();
  for (const n of A) {
    for (const m of B) {
      if (!map1.get(m + n)) map1.set(m + n, 0);
      map1.set(m + n, map1.get(m + n) + 1);
    }
  }
  for (const n of C) {
    for (const m of D) {
      if (!map2.get(m + n)) map2.set(m + n, 0);
      map2.set(m + n, map2.get(m + n) + 1);
    }
  }
  let ans = 0;
  for (const key of map2.keys()) {
    if (map1.get(-key)) ans += map1.get(-key) * map2.get(key);
  }
  return ans
};
console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
