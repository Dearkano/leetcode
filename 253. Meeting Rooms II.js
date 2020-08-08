/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const starts = [];
  const ends = [];
  for (const interval of intervals) {
    starts.push(interval[0]);
    ends.push(interval[1]);
  }
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let ans = 0;
  let endIndex = 0;
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endIndex]) {
      ans++;
    } else {
      endIndex++;
    }
  }
  return ans
};
