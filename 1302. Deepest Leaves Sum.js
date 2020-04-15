/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    var sum = 0
    var depth = 0
    var recursiveSearch = function(node, curDepth) {
        curDepth++
        if(!node.left && !node.right) {

            if(curDepth===depth){
                sum += node.val
                return
            }else if(curDepth>depth){
                depth = curDepth
                sum = node.val
                return
            }
        }
        if(node.left)recursiveSearch(node.left, curDepth)
        if(node.right)recursiveSearch(node.right, curDepth)
    }
    recursiveSearch(root, 0)
    return sum
};