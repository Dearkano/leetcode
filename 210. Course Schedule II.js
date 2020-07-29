/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const preq = [];
  for (let i = 0; i < numCourses; i++) preq[i] = 0;
  const map = new Map();
  // init preq
  for (const pair of prerequisites) {
    const a = pair[0];
    const b = pair[1];
    if (!map.get(`${a}-${b}`)) {
      preq[a]++;
    }
    map.set(`${a}-${b}`, 1);
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (preq[i] === 0) queue.push(i);
  }
  let mark = 0;
  while (mark < queue.length) {
    const pre = queue[mark++];
    for (let i = 0; i < numCourses; i++) {
      if (map.get(`${i}-${pre}`)) {
        preq[i]--;
        if (!preq[i]) {
          queue.push(i);
        }
      }
    }
  }
  return mark === numCourses ? queue : [];
};
