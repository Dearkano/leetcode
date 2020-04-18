/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var m = obstacleGrid.length
    var n = obstacleGrid[0].length
    var dp = new Array(m).fill([])
    for (var i in dp) dp[i] = new Array(n).fill(0)

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
                continue
            }
            if (i === 0 && j === 0) dp[i][j] = 1
            else if ((i === 0 || dp[i - 1][j] === 0)&&j!==0) dp[i][j] = dp[i][j - 1]
            else if (j === 0 || dp[i][j - 1] === 0) dp[i][j] = dp[i - 1][j]
            else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }

        }
    }
    return dp[m - 1][n - 1]
};

console.log(uniquePathsWithObstacles([
    [1],[0]
  ]))