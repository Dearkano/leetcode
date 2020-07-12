/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    var res = mergeSort(nums)
    if(res.type==='num')return res.value
    var arr = res.value
    for (var i = 0; i < nums.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return arr[i]
        }
    }
};

var mergeSort = function (arr) {
    var cur = arr
    for (let i = 1; i < arr.length; i *= 2) {
        var rs = []
        while (cur.length > 0) {
            var l1 = cur.slice(0, i)
            cur = cur.slice(i, cur.length)
            var l2 = cur.slice(0, i)
            cur = cur.slice(i, cur.length)
            while (l1.length > 0 && l2.length > 0) {
                if (l1[0] > l2[0]) {
                    rs.push(l2[0])
                    l2.shift()
                } else if (l2[0] > l1[0]) {
                    rs.push(l1[0])
                    l1.shift()
                }else {
                    return {
                        type: 'num',
                        value: l1[0]
                    }
                }
            }
            if (l1.length > 0) {
                for(const item of l1){
                    rs.push(item)
                }
            }
            if (l2.length > 0) {
                for(const item of l2){
                    rs.push(item)
                }
            }
        }
        cur = rs
    }
    return {
        type: 'arr',
        value: cur
    }
}

console.log(findDuplicate([26,2,9,20,31,7,14,32,37,15,29,6,12,38,48,22,19,45,42,40,1,12,25,36,39,30,35,4,27,12,49,16,47,3,44,41,8,17,21,23,10,43,12,34,24,28,33,13,46,11]))