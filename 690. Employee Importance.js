/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const map = new Map();
  for (const item of employees) {
    map.set(item.id, { value: item.importance, subs: item.subordinates });
  }
  const queue = [id];
  let ans = 0;
  while (queue.length) {
    const cur = queue.shift();
    const { value, subs } = map.get(cur);
    ans += value;
    for (const sub of subs) {
      queue.push(sub);
    }
  }
  return ans;
};
