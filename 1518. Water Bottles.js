/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let ans = 0;
  let empty = 0;
  while (numBottles) {
    ans += numBottles;
    const temp = numBottles;
    numBottles = Math.floor((numBottles + empty) / numExchange);
    empty = (temp + empty) % numExchange;
  }
  return ans;
};

console.log(numWaterBottles(15, 8));
