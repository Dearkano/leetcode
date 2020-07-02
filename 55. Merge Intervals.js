/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
    // first range
    intervals.sort((a, b) => a[0] - b[0])
    var result = []
    if (intervals.length === 1) result.push(intervals[0])
    for (var i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] < intervals[i + 1][0]) {
            result.push(intervals[i])
        } else {
            if (intervals[i][1] < intervals[i + 1][1]) {
                intervals[i + 1] = [intervals[i][0], intervals[i + 1][1]]
            } else {
                intervals[i + 1] = intervals[i]
            }
        }
        if (i === intervals.length - 2) {
            result.push(intervals[i + 1])
        }
    }
    return result
};
var arr = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
    [3, 4]
]
console.log(merge([[1,3]]))