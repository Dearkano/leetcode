/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    var index = 0
    var end = 0
    var ans = []
    while(index<S.length){
        var char = S[index]
        var lastIndex = S.lastIndexOf(char)
        end = lastIndex
        for(var i = index+1;i<end;i++){
            char = S[i]
            lastIndex = S.lastIndexOf(char)
            if(lastIndex>end) end = lastIndex
        }
        ans.push(end - index + 1)
        index = end + 1
    }
    return ans
};