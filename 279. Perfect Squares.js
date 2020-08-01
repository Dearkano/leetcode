/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (n < 2) return n;
  let ans = 0;
  const queue = [0];
  let idx = 0;
  const visited = new Set();
  while (idx < queue.length) {
    const len = queue.length;
    for (let i = idx; i < len; i++) {
      const cur = queue[idx++];
      for (let j = 1; cur + j * j <= n; j++) {
        const next = cur + j * j;
        if (next === n) return ans + 1;
        if (!visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    ans++;
  }
  return 0;
};

console.log(numSquares(192));
