var divide = function (dividend, divisor) {
    var isPositive = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)
    var max = Math.pow(2, 31)
    var a = Math.abs(dividend)
    var b = Math.abs(divisor)
    var count = 0
    while (a >= b) {
        var curDivisor = b,
            num = 1
        while (a >= curDivisor) {
            a -= curDivisor
            count += num
            curDivisor += curDivisor
            num += num
        }
    }
    if ((isPositive && count > Math.pow(2, 31) - 1) || (count > Math.pow(2, 31) && !isPositive)) return Math.pow(2, 31) - 1
    return isPositive ? count : -count
};