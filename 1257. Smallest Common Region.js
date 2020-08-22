/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function (regions, region1, region2) {
  const map = new Map();
  const set = new Set();

  for (const region of regions) {
    for (let i = 1; i < region.length; i++) {
      map.set(region[i], region[0]);
    }
  }

  while (region1) {
    set.add(region1);
    region1 = map.get(region1);
  }

  while (region2) {
    if (set.has(region2)) return region2;
    region2 = map.get(region2);
  }
};
