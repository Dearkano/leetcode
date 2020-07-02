function string2int(s) {
    var arr = s.split('').map(function(x){
        return +x;
    })
    console.log(arr)
    return arr.reduce(function(prev,res){
       return prev*10+res;
    })
}

console.log(string2int('35151'))