/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function (s) {
  const count = [];
  for (let i = 0; i < 150; i++) count[i] = 0;
  for (let c of s) {
    count[c.charCodeAt(0)]++;
  }
  let midChar = "";
  let midCount = 0;
  const sideChars = [];
  for (let i = 0; i < 150; i++) {
    if (count[i] % 2 === 1) {
      if (midCount > 0) return [];
      midChar = String.fromCharCode(i);
      midCount++;
      for (let j = 0; j < (count[i] - 1) / 2; j++)
        sideChars.push(String.fromCharCode(i));
      flag = true;
    } else
      for (let j = 0; j < count[i] / 2; j++)
        sideChars.push(String.fromCharCode(i));
  }
  let visited = [];
  const ans = [];
  const sideAns = [];
  const dfs = (str, path, type) => {
    if (path.length === str.length) {
      if (type === 0) midAns.push(path);
      else sideAns.push(path);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      if (!visited[i]) {
        if (i > 0 && str[i] === str[i - 1] && !visited[i - 1]) continue;
        visited[i] = true;
        dfs(str, path + str[i], type);
        visited[i] = false;
      }
    }
  };
  dfs(sideChars.join(""), "", 1);
  for (const side of sideAns) {
    ans.push(side + midChar + side.split("").reverse().join(""));
  }
  return ans;
};

console.log(generatePalindromes("aaa"));
