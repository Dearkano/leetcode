/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function (gas, cost) {
//   const availableStarts = [];
//   for (let i in gas) {
//     if (gas[i] >= cost[i]) {
//       availableStarts.push(i);
//     }
//   }
//   availableStarts.sort((a, b) => gas[b] - gas[a]);
//   for (const start of availableStarts) {
//     let load = 0;
//     let cur = Number(start);
//     let first = true;
//     while (load >= 0) {
//       load = load + gas[cur];
//       load = load - cost[cur];
//       cur = (cur + 1) % gas.length;
//       if (!first && cur === Number(start) && load >= 0) return start;
//       if (first) first = false;
//     }
//   }
//   return -1;
// };

const canCompleteCircuit = (gas, cost) => {
  let start = gas.length - 1;
  let end = 0;
  let load = gas[start] - cost[start];
  while (start > end) {
    // start can go
    if (load >= 0) {
      load += gas[end] - cost[end];
      end++;
    }
    // verify if the previous point before start can go
    else {
      start--;
      load += gas[start] - cost[start];
    }
  }
  return load >= 0 ? start : -1;
};
console.log(canCompleteCircuit([3, 3, 4], [3, 4, 4]));
