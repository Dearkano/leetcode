var preorderTraversal = function(root) {
    var ans = []
    var stack = []
    if(!root) return []
    stack.push(root)
    while(stack.length!==0){
        var ele = stack.pop()
        ans.push(ele.val)
        if(ele.right) stack.push(ele.right)
        if(ele.left) stack.push(ele.left)
    }
    return ans
};