/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var dp = new Array(s.length).fill([])
    for (var i in dp)
        dp[i] = new Array(s.length).fill(false)
    if (!s || s.length === 1) return s
    if (s.length === 2) return s[0] === s[1] ? s : s[0]

    dp[0][0] = true
    dp[0][1] = s[0] === s[1]
    var ans =dp[0][1]?[0,1]: [0, 0]
    for (var i = 2; i < s.length; i++) {
        for (j = 0; j < i; j++) {
            if (j + 1 === i - 1) dp[j + 1][i - 1] = true
            if (i === j + 1) dp[j][i] = s[j] === s[i]
            else
                dp[j][i] = dp[j + 1][i - 1] && s[i] === s[j]

            if (dp[j][i] && i - j >= ans[1] - ans[0]) {
                ans = [j, i]
            }

        }
    }
    return s.substring(ans[0], ans[1] + 1)
}