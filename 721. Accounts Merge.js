/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const map = new Map();
  for (const account of accounts) {
    if (map.get(account[0]) === undefined) map.set(account[0], new Set());
    const temp = new Set();
    for (let i = 1; i < account.length; i++) {
      temp.add(account[i]);
    }
    map.get(account[0]).add(temp);
  }

  for (const account of accounts) {
    const set = map.get(account[0]);
    let cur = null;
    for (const s of set) {
      for (let i = 1; i < account.length; i++) {
        if (s.has(account[i])) {
          if (!cur) {
            for (let i = 1; i < account.length; i++) s.add(account[i]);
            cur = s;
          } else {
            const arr = [...s];
            arr.forEach((item) => cur.add(item));
            set.delete(s);
          }
          break;
        }
      }
    }
  }
  const ans = [];
  for (const pair of map) {
    for (const set of pair[1]) {
      const arr = [...set];
      arr.sort((a, b) => (a < b ? -1 : 1));
      ans.push([pair[0], ...arr]);
    }
  }
  return ans;
};

// console.log(
//   accountsMerge([
//     ["John", "johnsmith@mail.com", "john00@mail.com"],
//     ["John", "johnnybravo@mail.com"],
//     ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//     ["Mary", "mary@mail.com"],
//   ])
// );

console.log(
  accountsMerge([
    ["David", "David0@m.co", "David1@m.co"],
    ["David", "David3@m.co", "David4@m.co"],
    ["David", "David4@m.co", "David5@m.co"],
    ["David", "David2@m.co", "David3@m.co"],
    ["David", "David1@m.co", "David2@m.co"],
  ])
);
