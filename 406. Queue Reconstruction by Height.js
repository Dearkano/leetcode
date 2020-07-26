/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] - b[0] > 0) return -1;
    else if (a[0] - b[0] < 0) return 1;
    else {
      if (a[1] > b[1]) return 1;
      else return -1;
    }
  });
  let queue = [];
  for (const p of people) {
    if (!queue[p[1]]) queue[p[1]] = p;
    else queue = [].concat(queue.slice(0, p[1]), [p], queue.slice(p[1]));
  }
  return queue;
};

console.log(
  reconstructQueue([[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]])
);
