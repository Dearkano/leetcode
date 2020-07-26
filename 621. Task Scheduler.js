/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const map = new Map();
  const countMap = new Map();
  let ans = 0;
  const swap = (i, j) => {
    const temp = tasks[i];
    tasks[i] = tasks[j];
    tasks[j] = temp;
  };
  for (let i = 0; i < tasks.length; i++) {
    if (!countMap.get(tasks[i])) countMap.set(tasks[i], 0);
    countMap.set(tasks[i], countMap.get(tasks[i]) + 1);
  }
  for (let i = 0; i < tasks.length; ) {
    let max = 0;
    let nextTask = "";
    countMap.forEach((v, k) => {
      if (!map.get(k)) map.set(k, 0);
      if (max < v && map.get(k) === 0) {
        max = v;
        nextTask = k;
      }
    });
    map.forEach((v, k) => {
      if (v > 0) map.set(k, v - 1);
    });
    if (nextTask) {
      let j = i;
      while (j < tasks.length) {
        if (tasks[j] === nextTask) break;
        j++;
      }
      swap(i, j);
      map.set(nextTask, n);
      countMap.set(nextTask, countMap.get(nextTask) - 1);
      i++;
    }
    ans++;
  }
  return ans;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
