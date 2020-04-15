var isValidBST = function(root) {
    var isValid = function (node, min, max) {
        if(!node) return true
        if(node.val>min&&node.val<max){
            return isValid(node.left,min,node.val)&&isValid(node.right,node.val,max)
        }

        else return false
    }
    return isValid(root, -Infinity, Infinity)
};

console.log(isValidBST({val:2,left:{val:1,left:null,right:null},right:{val:3,left:null,right:null}}))