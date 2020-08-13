var DoubleLinkedListNode = function (key, val, next, pre) {
  this.key = key === undefined ? null : key;
  this.val = val === undefined ? null : val;
  this.next = next === undefined ? null : next;
  this.pre = pre === undefined ? null : pre;
};

var DoubleLinkedList = function () {
  this.head = new DoubleLinkedListNode(0, 0);
  this.tail = new DoubleLinkedListNode(0, 0);
  this.head.next = this.tail;
  this.tail.pre = this.head;
  this.size = 0;
  this.addNode = (node) => {
    this.head.next.pre = node;
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next = node;
    this.size++;
  };
  this.removeNode = (node) => {
    node.pre.next = node.next;
    node.next.pre = node.pre;
    this.size--;
  };
  this.removeTail = () => {
    const key = this.tail.pre.key;
    this.tail.pre.pre.next = this.tail;
    this.tail.pre = this.tail.pre.pre;
    this.size--;
    return key;
  };
};
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.cache = new Map();
  this.frequency = new Map();
  this.lists = [];
  this.capacity = capacity;
  this.size = 0;
  this.addNewNode = (node) => {
    if (this.capacity === 0) return;
    if (this.size + 1 > this.capacity) {
      for (let i = 1; ; i++) {
        if (this.lists[i].size > 0) {
          const key = this.lists[i].removeTail();
          this.size--;
          this.cache.delete(key);
          break;
        }
      }
    }
    if (!this.lists[1]) this.lists[1] = new DoubleLinkedList();
    this.lists[1].addNode(node);
    this.cache.set(node.key, node);
    this.frequency.set(node.key, 1);
    this.size++;
  };
  this.addFrequency = (node) => {
    let f = this.frequency.get(node.key);
    this.lists[f].removeNode(node);
    f++;
    if (!this.lists[f]) this.lists[f] = new DoubleLinkedList();
    this.lists[f].addNode(node);

    this.frequency.set(node.key, f);
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.cache.get(key)) return -1;
  const node = this.cache.get(key);
  this.addFrequency(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, val) {
  if (!this.cache.get(key)) {
    const node = new DoubleLinkedListNode(key, val);
    this.addNewNode(node);
  } else {
    const node = this.cache.get(key);
    node.val = val;
    this.addFrequency(node);
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const cache = new LFUCache(1 /* capacity */);

cache.put(2, 1);
console.log(cache.get(2)); // returns 1
cache.put(3, 2); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3.
cache.put(4, 4); // evicts key 1.
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4
