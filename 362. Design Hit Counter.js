/**
 * Initialize your data structure here.
 */
var HitCounter = function () {
  this.hits = new Array(300).fill(0);
  this.timestamp = [];
  for (let i = 0; i < 300; i++) this.timestamp[i] = i;
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  const index = timestamp % 300;
  if (this.timestamp[index] === timestamp) {
    this.hits[index]++;
  } else {
    this.hits[index] = 1;
    this.timestamp[index] = timestamp;
  }
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  let ans = 0;
  for (let i = 0; i < 300; i++) {
    if (timestamp - this.timestamp[i] < 300) {
      ans += this.hits[i];
    }
  }
  return ans;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
