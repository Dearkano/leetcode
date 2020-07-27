// /**
//  * @param {number[]} stones
//  * @return {number}
//  */
// var lastStoneWeight = function (stones) {
//   stones.sort((a, b) => a - b);
//   while (stones.length > 1) {
//     const a = stones.pop();
//     const b = stones.pop();
//     if (a > b) {
//       stones.push(a - b);
//       stones.sort((a, b) => a - b);
//     }
//   }
//   return stones[0] || 0;
// };

const lastStoneWeight = (stones) => {
  stones.sort((a, b) => a - b);
  for (let i = stones.length - 1; i > 0; i--) {
    stones[i - 1] = stones[i] - stones[i - 1];
    stones.sort((a, b) => a - b);
  }
  return stones[0];
};

console.log(lastStoneWeight([3, 7, 8]));
