/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  let map = new Map();
  const stack = [];
  let i = 0;
  while (i < formula.length) {
    const c = formula[i];
    i++;
    if (c === "(") {
      stack.push(map);
      map = new Map();
    } else if (c === ")") {
      //count the coe
      let coe = 0;
      while (Number.isInteger(Number(formula[i]))) {
        coe = coe * 10 + Number(formula[i]);
        i++;
      }
      if (coe === 0) coe = 1;
      if (stack.length > 0) {
        const temp = map;
        map = stack.pop();
        for (const key of temp.keys()) {
          if (!map.get(key)) map.set(key, 0);
          map.set(key, map.get(key) + temp.get(key) * coe);
        }
      }
    } else {
      let start = i - 1;
      while (formula.charCodeAt(i) >= 97 && formula.charCodeAt(i) <= 122) i++;
      const key = formula.substring(start, i);
      let coe = 0;
      while (Number.isInteger(Number(formula[i]))) {
        coe = coe * 10 + Number(formula[i]);
        i++;
      }
      if (coe === 0) coe = 1;
      if (!map.get(key)) map.set(key, 0);
      map.set(key, map.get(key) + coe);
    }
  }
  const arr = [...map];
  arr.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  let ans = "";
  for (const pair of arr) {
    ans += pair[0];
    if (pair[1] > 1) ans += pair[1];
  }
  return ans;
};

console.log(countOfAtoms("K4(ON(SO3)2)2"));
