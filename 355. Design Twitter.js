/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.tweets = [];
  this.users = new Map();
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tweets.push({ userId, tweetId, time: Date.now() });
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  if (!this.users.get(userId)) this.users.set(userId, new Set());
  let news = [];
  this.tweets.forEach((item) => {
    if (item.userId === userId || this.users.get(userId).has(item.userId))
      news.push(item.tweetId);
  });
  return news.reverse().slice(0, 10);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.users.get(followerId)) this.users.set(followerId, new Set());
  this.users.get(followerId).add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.users.get(followerId)) this.users.set(followerId, new Set());
  this.users.get(followerId).delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

var obj = new Twitter();
obj.postTweet(1, 5);
console.log(obj.getNewsFeed(1));
