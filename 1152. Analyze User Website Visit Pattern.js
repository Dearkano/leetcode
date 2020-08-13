/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function (username, timestamp, website) {
  const map = new Map();
  const tuple = [];
  const set = new Set();
  for (let i = 0; i < username.length; i++) {
    tuple.push({
      username: username[i],
      timestamp: timestamp[i],
      website: website[i],
    });
    set.add(username[i]);
  }
  let ans = [];
  let max = 0;
  for (const n of set) {
    const t = tuple
      .filter((item) => item.username === n)
      .sort((a, b) => a.timestamp - b.timestamp);
    for (let i = 0; i < t.length - 2; i++) {
      for (let j = i + 1; j < t.length - 1; j++) {
        for (let k = j + 1; k < t.length; k++) {
          const arr = [t[i].website, t[j].website, t[k].website];
          const key = arr.join("-");
          if (map.get(key) === undefined) map.set(key, new Set());
          map.get(key).add(n);
          if (map.get(key).size > max) {
            max = map.get(key).size;
            ans = arr;
          } else if (map.get(key).size === max) {
            if (ans.join("-") > key) ans = arr;
          }
        }
      }
    }
  }
  return ans;
};

console.log(
  mostVisitedPattern(
    [
      "h",
      "eiy",
      "cq",
      "h",
      "cq",
      "txldsscx",
      "cq",
      "txldsscx",
      "h",
      "cq",
      "cq",
    ],
    [
      527896567,
      334462937,
      517687281,
      134127993,
      859112386,
      159548699,
      51100299,
      444082139,
      926837079,
      317455832,
      411747930,
    ],
    [
      "hibympufi",
      "hibympufi",
      "hibympufi",
      "hibympufi",
      "hibympufi",
      "hibympufi",
      "hibympufi",
      "hibympufi",
      "yljmntrclw",
      "hibympufi",
      "yljmntrclw",
    ]
  )
);
