/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const ans = new Array(n).fill(0);
  const stack = [];
  let cur = null;
  for (const log of logs) {
    const [id, type, timestamp] = log.split(":");
    if (type === "start") {
      // recent function not end
      if (cur) {
        cur.time += Number(timestamp) - cur.lastStartTime;
        stack.push(cur);
      }
      cur = {
        id: Number(id),
        time: 0,
        lastStartTime: Number(timestamp),
      };
    } else {
      ans[cur.id] += cur.time + Number(timestamp) - cur.lastStartTime + 1;
      if (stack.length > 0) {
        cur = stack.pop();
        cur.lastStartTime = Number(timestamp) + 1;
      } else cur = null;
    }
  }
  return ans
};
console.log(
  exclusiveTime(1, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "0:start:6",
    "0:end:6",
    "0:end:7",
  ])
);
