/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
// var employeeFreeTime = function (schedule) {
//   const ans = new Set();
//   ans.add({ start: -Infinity, end: Infinity });
//   for (const employee of schedule) {
//     for (const workTime of employee) {
//       const temp = new Set();
//       for (const interval of ans) {
//         if (!(workTime.start > interval.end || interval.start > workTime.end)) {
//           ans.delete(interval);
//           if (workTime.start > interval.start)
//             temp.add({ start: interval.start, end: workTime.start });
//           if (interval.end > workTime.end)
//             temp.add({ start: workTime.end, end: interval.end });
//         }
//       }
//       for (const item of temp) ans.add(item);
//     }
//   }
//   const arr = [...ans];
//   arr.sort((a, b) => a.start - b.start);
//   return arr.filter((item) => item.start > -Infinity && item.end < Infinity);
// };

const employeeFreeTime = (schedule) => {
  const events = [];
  for (const employee of schedule) {
    for (const interval of employee) {
      events.push({ val: interval.start, type: 0 });
      events.push({ val: interval.end, type: 1 });
    }
  }

  events.sort((a, b) => (a.val === b.val ? a.type - b.type : a.val - b.val));

  const ans = [];
  let pre = -Infinity;
  let balance = 0;
  for (const e of events) {
    if (pre >= 0 && balance === 0) {
      ans.push({ start: pre, end: e.val });
    }
    balance += e.type === 0 ? 1 : -1;
    pre = e.val;
  }
  return ans;
};

console.log(
  employeeFreeTime([
    [
      { start: 1, end: 2 },
      { start: 5, end: 6 },
    ],
    [{ start: 1, end: 3 }],
    [{ start: 4, end: 10 }],
  ])
);
