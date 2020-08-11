const DoubleLinkedListNode = function (key, value, pre, next) {
  this.key = key || null;
  this.value = value || null;
  this.pre = pre || null;
  this.next = next || null;
};
const DoubleLinkedList = function () {
  this.head = new DoubleLinkedListNode();
  this.tail = new DoubleLinkedListNode();
  this.head.next = this.tail;
  this.tail.pre = this.head;
  this.addNode = (node) => {
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next.pre = node;
    this.head.next = node;
  };
  this.removeNode = (node) => {
    node.pre.next = node.next;
    node.next.pre = node.pre;
  };
  this.wakeNode = (node) => {
    this.removeNode(node);
    this.addNode(node);
  };
  this.removeTail = () => {
    const key = this.tail.pre.key;
    this.tail.pre.pre.next = this.tail;
    this.tail.pre = this.tail.pre.pre;
    return key;
  };
};
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.list = new DoubleLinkedList();
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.get(key) !== undefined) {
    this.list.wakeNode(this.cache.get(key));
    return this.cache.get(key).value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.get(key) !== undefined) {
    const node = this.cache.get(key);
    node.value = value;
    this.list.wakeNode(node);
  } else {
    const node = new DoubleLinkedListNode(key, value);
    this.list.addNode(node);
    this.cache.set(key, node);
    if (this.cache.size > this.capacity) {
      const key = this.list.removeTail();
      this.cache.delete(key);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var cache = new LRUCache(2 /* capacity */);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4));
