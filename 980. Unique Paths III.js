/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    var m = grid.length
    var n = grid[0].length
    var start = []
    var step = 0
    var ans = 0
    for (var i in grid) {
        for (var j in grid[i]) {
            if (grid[i][j] === 1) {
                start = [i, j]
            }
            if (grid[i][j] !== -1) {
                step++
            }
        }
    }

    var dfs = function (i, j, s) {
        s--
        if (s < 0) return
        if (grid[i][j] === 2) {
            if (s === 0) ans++
            return
        }
        grid[i][j] = 3
        if (i !== m - 1 && grid[i + 1][j]%2 === 0) {
            dfs(i + 1, j, s)
        }
        if (i !== 0 && grid[i - 1][j]%2 === 0) {
            dfs(i - 1, j, s)
        }
        if (j !== n - 1 && grid[i][j + 1]%2 === 0) {
            dfs(i, j + 1, s)
        }
        if (j !== 0 && grid[i][j - 1]%2 === 0) {
            dfs(i, j - 1, s)
        }

        grid[i][j] = 0
    }

    dfs(parseInt(start[0]), parseInt(start[1]), step)
    return ans
};

console.log(uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2]
]))