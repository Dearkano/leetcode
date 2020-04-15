/**
 * @param {number} x
 * @return {number}
 */


var reverse = function(x) {
  
    var arr = []
    while(x!=0){
        var digit = x%10
        arr.push(digit)
        x = parseInt(x/10)
    }
    var num = 0
    for(var i = arr.length-1, j =0;i>=0;i--, j++){
        num += arr[i] * Math.pow(10, j)
    }
    if(num>Math.pow(2,31)||num<-Math.pow(2,31)) return 0
    return num
};
