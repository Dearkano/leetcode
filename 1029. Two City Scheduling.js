/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a1,a2)=>{
        if(a1[1]-a1[0]>a2[1]-a2[0]) return -1
        else return 1
    })
    
    var ans = 0
    for(var i =0 ;i <costs.length/2;i++) ans+=costs[i][0]
    for(var i=costs.length/2;i<costs.length;i++)ans+=costs[i][1]
    
    return ans
};