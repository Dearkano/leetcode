/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    pairs.sort((a, b) => {
        if (a[0] < b[0]) return -1
        else if (a[0] > b[0]) return 1
        else {
            if (a[1] < b[1]) return -1
            else return 1
        }
    })
    var dp = new Array(pairs.length).fill(1)
    dp.fill(1, 0, pairs.length)
    var ans = 1
    for (var i = 1; i < pairs.length; i++) {
        for (var j = 0; j < i; j++) {
            if (pairs[i][0]>pairs[j][1]){
               dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    for(var x of dp) if(x>ans)ans = x
    return ans
};
console.log(findLongestChain(
    [[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]]))