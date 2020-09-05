// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function (coins, amount) {
//   coins.sort((a, b) => b - a);
//   let ans = Infinity;
//   const dfs = (cur, curAmount, c) => {
//     if (cur >= amount) {
//       if (cur === amount) {
//         ans = Math.min(ans, curAmount);
//         return true;
//       }
//       return false;
//     }
//     for (let i = c; i < coins.length; i++) {
//       if (dfs(cur + coins[i], curAmount + 1, i)) return true;
//       if (i + 1 < coins.length && dfs(cur + coins[i + 1], curAmount + 1, i + 1))
//         return true;
//     }
//     return false;
//   };
//   dfs(0, 0, 0);
//   return ans === Infinity ? -1 : ans;
// };

const coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
console.log(coinChange([186, 419, 83, 408], 6249));
console.log(coinChange([1, 2, 5], 11));
