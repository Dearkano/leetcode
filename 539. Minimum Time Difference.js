/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const minutes = [];

  for (const p of timePoints) {
    const [hour, minute] = p.split(":")
    minutes.push(Number(hour) * 60 + Number(minute));
  }
  minutes.sort((a, b) => a - b);
  minutes.push(minutes[0] + 1440);
  let ans = Infinity;
  for (let i = 1; i < minutes.length; i++) {
    ans = Math.min(ans, minutes[i] - minutes[i - 1]);
  }
  return ans;
};
console.log(findMinDifference(["23:59", "00:00"]));
