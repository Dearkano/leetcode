/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
var generateSentences = function (synonyms, text) {
  const arr = text.split(" ");
  const visited = [];
  const temp = [];
  for (let i = 0; i < synonyms.length - 1; i++) {
    if (!visited[i]) {
      const combine = synonyms[i];
      visited[i] = true;
      for (let j = i + 1; j < synonyms.length; j++) {
        if (combine.includes(synonyms[j][0])) {
          combine.push(synonyms[j][1]);
          visited[j] = true;
        } else if (combine.includes(synonyms[j][1])) {
          combine.push(synonyms[j][0]);
          visited[j] = true;
        }
      }
      temp.push(combine);
    }
  }
  if (!visited[synonyms.length - 1]) temp.push(synonyms[synonyms.length - 1]);
  synonyms = [];
  const keys = [];
  const valid = [];
  for (const i in arr) {
    for (let j = 0; j < temp.length; j++) {
      const words = temp[j];
      if (words.includes(arr[i])) {
        keys.push(arr[i]);
        arr[i] = "?";
        valid[j] = true;
      }
    }
  }
  for (let i = 0; i < temp.length; i++) {
    if (valid[i]) synonyms.push(temp[i]);
  }
  const ans = [];

  const dfs = (start, path) => {
    if (path.length === keys.length) {
      ans.push([].concat(path));
    }

    for (let i = start; i < keys.length; i++) {
      for (let j = 0; j < synonyms.length; j++) {
        if (synonyms[j].includes(keys[i])) {
          for (const s of synonyms[j]) {
            path.push(s);
            dfs(i + 1, path);
            path.pop();
          }
        }
      }
    }
  };
  dfs(0, []);
  const res = [];
  for (const comp of ans) {
    const temp = [];
    let i = 0;
    for (const c of arr) {
      if (c !== "?") temp.push(c);
      else temp.push(comp[i++]);
    }
    res.push(temp.join(" "));
  }
  res.sort((a, b) => (a < b ? -1 : 1));
  return res;
};

console.log(
  generateSentences(
    [
      ["happy", "joy"],
      ["sad", "sorrow"],
      ["joy", "cheerful"],
    ],
    "I am happy today but was sad yesterday"
  )
);
