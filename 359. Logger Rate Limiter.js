/**
 * Initialize your data structure here.
 */
var Logger = function () {
  this.old = new Map();
  this.new = new Map();
  this.start = -Infinity;
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (timestamp - this.start >= 20) {
    this.old.clear();
    this.new.clear();
    this.start = timestamp;
  } else if (timestamp - this.start >= 10) {
    const temp = this.old;
    this.old = this.new;
    this.new = temp;
    this.new.clear();
    this.start = timestamp;
  }
  if (this.new.get(message) !== undefined) return false;
  if (
    this.old.get(message) !== undefined &&
    timestamp - this.old.get(message) < 10
  )
    return false;
  this.new.set(message, timestamp);
  return true;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
var logger = new Logger();
logger.shouldPrintMessage(1, "foo");
logger.shouldPrintMessage(2, "bar");
logger.shouldPrintMessage(3, "foo");
logger.shouldPrintMessage(8, "bar");
logger.shouldPrintMessage(10, "foo");
logger.shouldPrintMessage(11, "foo");
