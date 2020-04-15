/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    var ans = []
    var map = {}
    var find = function (start, temp) {
        if (temp.length > 1) {
            var str = `${temp}`
            if(!map[str]){
                ans.push([].concat(temp))
                map[str] = true
            }
        }
        for (var i = start; i < nums.length; i++) {
            if (temp.length > 0 && nums[i] < temp[temp.length - 1]) {
                continue
            }
            temp.push(nums[i])
            find(i + 1, temp)
            temp.pop()
        }
    }

    var temp = []
    find(0, temp)

    return ans
};
console.log(findSubsequences([4, 6, 7, 7]))