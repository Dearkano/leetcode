/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) return true;
  const visited = [];
  for (let i = 0; i < numCourses; i++) visited[i] = true;
  let count = 0;
  const map = new Map();
  for (const pair of prerequisites) {
    // if a course shows up in pair[1], means that it has a pre course
    if (visited[pair[0]]) {
      visited[pair[0]] = false;
      count++;
    }
    if (!map.get(pair[0])) map.set(pair[0], []);
    const arr = map.get(pair[0]);
    arr.push(pair[1]);
    map.set(pair[0], arr);
  }
  if (count === 0) return false;
  let first = true;
  while (count > 0) {
    let pre = count;
    for (let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      const a = pair[1];
      const b = pair[0];
      if (visited[a] && !visited[b]) {
        const arr = map.get(b);
        if (arr.includes(a)) {
          arr.splice(arr.indexOf(a), 1);
        }
        if (arr.length === 0) {
          visited[b] = true;
          count--;
        }
      }
    }
    if (pre === count && !first) return false;
    first = false;
  }
  return true;
};

console.log(
  canFinish(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ])
);
