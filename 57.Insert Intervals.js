/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// var insert = function (intervals, newInterval) {
//     var start = 0
//     var end = intervals.length - 1
//     var flag = false
//     if (intervals.length === 0) return [newInterval]
//     if (intervals[intervals.length - 1][1] < newInterval[0]) {
//         intervals.push(newInterval)
//         return intervals
//     } else if (intervals[0][0] > newInterval[1]) {
//         return [newInterval, ...intervals]
//     } else {
//         for (var i = 0; i < intervals.length; i++) {
//             if (newInterval[0] <= intervals[i][1]) {
//                 start = i
//                 for (var j = i; j < intervals.length; j++) {
//                     if (newInterval[1] <= intervals[j][1]) {
//                         if (newInterval[1] < intervals[j][0]) {
//                             var arr1 = intervals.slice(0, start)
//                             var arr2 = intervals.slice(j, intervals.length)
//                             newInterval[0] = intervals[start][0] < newInterval[0] ? intervals[start][0] : newInterval[0]
//                             return [...arr1, newInterval, ...arr2]
//                         }
//                         end = j
//                         flag = true
//                         break
//                     }
//                     flag = true
//                 }
//                 if (flag) break
//             }
//         }
//         var a, b;
//         var arr1 = intervals.slice(0, start)
//         var arr2 = intervals.slice(end + 1, intervals.length)
//         a = newInterval[0] < intervals[start][0] ? newInterval[0] : intervals[start][0]
//         b = newInterval[1] > intervals[end][1] ? newInterval[1] : intervals[end][1]
//         var insertInterval = [a, b]
//         return [...arr1, insertInterval, ...arr2]
//     }

// };

var insert = function (intervals, newInterval) {
    var arr = [...intervals, newInterval]
    var ans = merge(arr)
    return ans
}
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
    [1, 5],
    [10, 14]
];

console.log(insert(arr, [7, 9]))