/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  if (deadends.includes("0000")) return -1;
  const set = new Set();
  const targetArr = target.split("").map((i) => Number(i));
  for (const item of deadends) set.add(item);
  const queue = ["0000"];
  let idx = 0;
  let levelLength = queue.length;
  let ans = 0;
  while (idx < queue.length) {
    while (idx < levelLength) {
      const cur = queue[idx++];
      if (cur === target) return ans;
      set.add(cur);
      const curArr = cur.split("").map((i) => Number(i));
      for (let i = 0; i < 4; i++) {
        const temp = curArr[i];
        if (curArr[i] <= targetArr[i]) {
          curArr[i]++;
          if (curArr[i] > 9) curArr[i] = curArr[i] % 10;
          let str = curArr.join("");
          if (!set.has(str)) {
            set.add(str);
            queue.push(str);
          }
          curArr[i] = temp;
        }
        if (curArr[i] <= targetArr[i] || curArr[i] - targetArr[i] < 5) {
          curArr[i]--;
          if (curArr[i] < 0) curArr[i] += 10;
          str = curArr.join("");
          if (!set.has(str)) {
            set.add(str);
            queue.push(str);
          }
          curArr[i] = temp;
        }
      }
    }
    levelLength = queue.length;
    ans++;
  }
  return -1;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
