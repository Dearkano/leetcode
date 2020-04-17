var a = 23
var b = 3
var m = 11
var x = 5
var str = ''
var ans = 0
var flag = true
while(flag){
    var t1 = a*x
    var t2 = t1 +b
    var t3 = t2%m
    var tmp = (a*x + b)%m
    str = `${str}${tmp}`
    console.log(str)
    if(str.length %2 === 0) {
        if(str.substr(0, str.length/2) == str.substr(str.length/2 , str.length)){
            ans = str.length /2
            break
        }
    }
    x = tmp
}
console.log(ans)