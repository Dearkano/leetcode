/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.arr.push({
    val: x,
    min: Math.min(this.getMin(), x),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.arr.length === 0) return Infinity;
  return this.arr[this.arr.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
const s = new MinStack();
s.push(1);
s.push(2);
s.push(3);
s.getMin();
s.top();
s.pop();
s.getMin();
