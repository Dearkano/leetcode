/**
 * @param {string} S
 * @return {string[]}
 */
var expand = function (S) {
  if (!S) return [''];
  if (S.length === 1) return [S];
  const ans = [];
  let i = 0
  if (S[0] === "{") {
    const temp = [];
    i++;
    while (S[i] !== "}") {
      if (S[i] !== ",") temp.push(S[i]);
      i++;
    }
    const rest = expand(S.substring(i + 1));
    for (const c of temp) {
      for (const r of rest) {
        ans.push(c + r);
      }
    }
  } else {
    const rest = expand(S.substring(i + 1));
    for (const r of rest) ans.push(S[i] + r);
  }

  ans.sort((a, b) => (a < b ? -1 : 1));
  return ans;
};

console.log(expand("k{a,b,c,d,e,f,g}"));
