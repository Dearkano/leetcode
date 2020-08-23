/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
  const map = new Map();
  for (const rs of reservedSeats) {
    if (!map.get(rs[0])) map.set(rs[0], []);
    map.get(rs[0]).push(rs[1]);
  }
  let total = 2 * n;
  for (const r of map.keys()) {
    const rows = map.get(r);
    const seat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (const n of rows) {
      seat[n - 1] = 1;
    }
    let two = true;
    for (let i = 1; i <= 8; i++) {
      if (seat[i] !== 0) two = false;
    }
    if (two) continue;
    if (
      (seat[1] === 0 && seat[2] === 0 && seat[3] === 0 && seat[4] === 0) ||
      (seat[3] === 0 && seat[4] === 0 && seat[5] === 0 && seat[6] === 0) ||
      (seat[5] === 0 && seat[6] === 0 && seat[7] === 0 && seat[8] === 0)
    )
      total -= 1;
    else total -= 2;
  }
  return total;
};
console.log(
  maxNumberOfFamilies(3, [
    [1, 2],
    [1, 3],
    [1, 8],
    [2, 6],
    [3, 1],
    [3, 10],
  ])
);
console.log(
  maxNumberOfFamilies(4, [
    [2, 10],
    [3, 1],
    [1, 2],
    [2, 2],
    [3, 5],
    [4, 1],
    [4, 9],
    [2, 7],
  ])
);
