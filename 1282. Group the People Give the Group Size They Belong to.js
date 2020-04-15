/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    var objArr = []
    for(var i in groupSizes) {
        objArr.push({index: i, val: groupSizes[i]})
    }
    objArr.sort((a, b)=>a.val<b.val?1:-1)
    var ans = []
    for(var i in objArr) {
        var size = objArr[i].val
        var curGroup = []
        if(ans.length>0) curGroup = ans[ans.length-1]
        if( curGroup.length === 0 || curGroup.length>=size){
            ans.push([objArr[i].index])
        }else{
            curGroup.push(objArr[i].index)
            ans[ans.length-1] = curGroup
        }
    }
    return ans
};

