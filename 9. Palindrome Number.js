/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = `${x}`
    if(str === str.split('').reverse().join('')) return true
    else return false
};