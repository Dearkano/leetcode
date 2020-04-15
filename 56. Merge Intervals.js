/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a1, a2)=>{
        if(a1[0]>a2[0])return 1
        else if(a1[0]<a2[0])return -1
        else return 0

    })
    var ans = []
    var pre = []
    for(var i=0;i<intervals.length;i++) {
        var arr = intervals[i]
        if(pre.length===0){
            pre = arr
        }
        else if( arr[0] > pre[1]){
            ans.push(pre)
            pre = arr
        }else if(arr[1] > pre[1]){
            pre = [pre[0]<arr[0]?pre[0]:arr[0], arr[1]]
        }
        if(i===intervals.length-1) ans.push(pre)
    }
    return ans
};