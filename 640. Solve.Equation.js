var solveEquation = function(equation) {
    function cal(ele){
        var cache = []
        var lastSym = ''
        var thisCoet = thisNum = 0
        for(var index = 0;index<ele.length;index++){
            var char = ele[index]
            if(char!=='+'&&char!=='-'&&char!=='x'){
                cache.push(char)
            }
            if(char==='x'){
                var curCoet = 0
                if(cache.length===0) curCoet = 1
                for(var i =0, j=cache.length-1; i<cache.length;i++, j--){
                    curCoet += cache[i] * Math.pow(10, j)
                }
                if(lastSym==='-') curCoet*=-1
                thisCoet += curCoet
                cache = []
            }
            if(char==='+'){
                if(cache.length!==0){
                    var curNum = 0
                    for(var i =0, j=cache.length-1; i<cache.length;i++, j--){
                        curNum += cache[i] * Math.pow(10, j)
                    }
                    if(lastSym==='-')curNum*=-1
                    thisNum+=curNum
                }
                lastSym = '+'
                cache = []
            }
            if(char==='-'){
                if(cache.length!==0){
                    var curNum = 0
                    for(var i =0, j=cache.length-1; i<cache.length;i++, j--){
                        curNum += cache[i] * Math.pow(10, j)
                    }
                    if(lastSym==='-')curNum*=-1
                    thisNum+=curNum
                }
                lastSym = '-'
                cache = []
            }

            if(index === ele.length-1 && cache.length!==0){
                var curNum = 0
                for(var i =0, j=cache.length-1; i<cache.length;i++, j--){
                    curNum += cache[i] * Math.pow(10, j)
                }
                if(lastSym==='-')curNum*=-1
                thisNum+=curNum
            }
        }
        return [thisCoet, thisNum]
    }
    var arr = equation.split('=')
    var left = arr[0], right = arr[1]
    var leftRes = cal(left)
    var rightRes= cal(right)
    leftCoet = leftRes[0]
    leftNum = leftRes[1]
    rightCoet = rightRes[0]
    rightNum = rightRes[1]
    
    if(leftCoet === rightCoet){
        if(leftNum === rightNum) return 'Infinite solutions'
        else return 'No solution'
    }

    var finCoet = leftCoet - rightCoet
    var finNum = rightNum - leftNum
    var x = finNum/finCoet
    return `x=${x}`
};
