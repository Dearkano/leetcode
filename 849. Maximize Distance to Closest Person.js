// /**
//  * @param {number[]} seats
//  * @return {number}
//  */
// var maxDistToClosest = function (seats) {
//   let l = -1;
//   let r = 0;
//   for (let i = 0; i < seats.length; i++) {
//     if (seats[i] === 1 && l < 0) l = i;
//     else if (seats[i] === 1) {
//       r = i;
//       break;
//     }
//   }
//   if (r === 0) r = seats.length;
//   let max = -Infinity;
//   for (let i = 0; i < seats.length; i++) {
//     if (seats[i] === 1 && i === r) {
//       l = r;
//       while (r < seats.length) {
//         r++;
//         if (seats[r] === 1) break;
//       }
//       continue;
//     }
//     let dis = 0;
//     if (r < seats.length) dis = Math.min(Math.abs(i - r), Math.abs(i - l));
//     else dis = Math.abs(i - l);
//     if (max < dis) max = dis;
//   }
//   return max;
// };

// console.log(maxDistToClosest([1, 1, 1, 1, 0, 1]));
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const t = [];
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) t.push(i);
  }
  let idx = 0;
  let l = t[idx++];
  let r = seats.length;
  if (t.length > 0) r = t[idx++];
  let max = -Infinity;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (i === r) {
        l = r;
        if (t.length > 0) r = t[idx++];
        else r = seats.length;
      }
      continue;
    }
    let dis = 0;
    if (r < seats.length) dis = Math.min(Math.abs(i - r), Math.abs(i - l));
    else dis = Math.abs(i - l);
    if (max < dis) max = dis;
  }
  return max;
};

console.log(maxDistToClosest([1, 1, 1, 0, 1, 1, 1]));
