const DoubleLinkedListNode = function (val) {
  this.val = val === undefined ? null : val;
  this.next = null;
  this.pre = null;
};

const DoubleLinkedList = function () {
  this.head = new DoubleLinkedListNode();
  this.tail = new DoubleLinkedListNode();
  this.head.next = this.tail;
  this.tail.pre = this.head;
  this.addNode = (node) => {
    this.tail.pre.next = node;
    node.pre = this.tail.pre;
    node.next = this.tail;
    this.tail.pre = node;
  };
  this.removeNode = (node) => {
    node.next.pre = node.pre;
    node.pre.next = node.next;
  };
  this.getFirst = () => {
    return this.head.next;
  };
};

/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.cache = new Map();
  this.count = new Set();
  this.list = new DoubleLinkedList();
  for (const n of nums) {
    if (!this.count.has(n)) {
      const node = new DoubleLinkedListNode(n);
      this.cache.set(n, node);
      this.list.addNode(node);
      this.count.add(n);
    } else if (this.cache.get(n)) {
      this.list.removeNode(this.cache.get(n));
      this.cache.delete(n);
    }
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  const node = this.list.getFirst();
  if (node.val !== null) return node.val;
  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  if (!this.count.has(value)) {
    this.count.add(value);
    const node = new DoubleLinkedListNode(value);
    this.list.addNode(node);
    this.cache.set(value, node);
  } else if (this.cache.get(value)) {
    this.list.removeNode(this.cache.get(value));
    this.cache.delete(this.cache.get(value));
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
