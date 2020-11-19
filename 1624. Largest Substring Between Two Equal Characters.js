/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const map = new Map()
    let ans = -1
    for(let i = 0;i<s.length;i++) {
        if(map.get(s[i])!==undefined) {
            ans = Math.max(ans, i - map.get(s[i]) - 1)
        }
        else {
            map.set(s[i], i)
        }  
    }
    return ans
};