var MyCalendar = function () {
  this.root = null;
};
var TreeNode = function (s, e, left, right) {
  this.s = s;
  this.e = e;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};
/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (!this.root) {
    this.root = new TreeNode(start, end);
    return true;
  }
  const traversal = (s, e, node) => {
    if (node.e <= s) {
      if (node.right) return traversal(s, e, node.right);
      node.right = new TreeNode(s, e);
      return true;
    } else if (node.s >= e) {
      if (node.left) return traversal(s, e, node.left);
      node.left = new TreeNode(s, e);
      return true;
    }
    return false;
  };

  return traversal(start, end, this.root);
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
