const DoubleLinkedListNode = function (val) {
  this.val = val === undefined ? null : val;
  this.next = null;
  this.pre = null;
};

const DoubleLinkedList = function () {};
/**
 * initialize your data structure here.
 */
var MaxStack = function () {
  this.head = new DoubleLinkedListNode();
  this.tail = new DoubleLinkedListNode();
  this.head.next = this.tail;
  this.tail.pre = this.head;
  this.cache = new Map();
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  const node = new DoubleLinkedListNode(x);
  node.max = Math.max(x, this.peekMax());
  this.tail.pre.next = node;
  node.pre = this.tail.pre;
  this.tail.pre = node;
  node.next = this.tail;
  if (!this.cache.get(x)) {
    this.cache.set(x, []);
  }
  this.cache.get(x).push(node);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  const val = this.tail.pre.val;
  this.tail.pre.pre.next = this.tail;
  this.tail.pre = this.tail.pre.pre;
  this.cache.get(val).pop();
  if (this.cache.get(val).length === 0) this.cache.delete(val);
  return val;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.tail.pre.val;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  let max = -Infinity;
  for (const key of this.cache.keys()) {
    max = Math.max(max, key);
  }
  return max;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  const node = this.cache.get(this.peekMax()).pop();
  node.pre.next = node.next;
  node.next.pre = node.pre;
  const val = node.val;
  if (this.cache.get(val).length === 0) this.cache.delete(val);
  return node.val;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
const s = new MaxStack();
s.push(5);
s.push(1);
console.log(s.top());
s.popMax();
console.log(s.peekMax());
s.pop();
s.top();
