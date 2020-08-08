/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function (workers, bikes) {
  // greedy not works
  const assigned = [];
  let min = Infinity;
  const dfs = (start, curDistance) => {
    if (start === workers.length) {
      min = Math.min(min, curDistance);
      return;
    }

    for (let i = 0; i < bikes.length; i++) {
      if (!assigned[i]) {
        assigned[i] = true;
        dfs(
          start + 1,
          curDistance +
            Math.abs(workers[start][0] - bikes[i][0]) +
            Math.abs(workers[start][1] - bikes[i][1])
        );
        assigned[i] = false;
      }
    }
  };
  dfs(0, 0);
  return min;
};
