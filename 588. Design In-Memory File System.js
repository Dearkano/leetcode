var FileSystem = function () {
  this.fs = {};
};

/**
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function (path) {
  path = path.substring(1);
  const arr = path.split("/");
  let dir = this.fs;
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    if (p) dir = dir[p];
  }
  const ans = [];
  if (typeof dir === "string") {
    return [arr[arr.length - 1]];
  }
  for (const key of Object.keys(dir)) {
    ans.push(key);
  }
  return ans.sort((a, b) => (a < b ? -1 : 1));
};

/**
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function (path) {
  path = path.substring(1);
  let dir = this.fs;
  const arr = path.split("/");
  for (const p of arr) {
    if (!dir[p]) dir[p] = {};
    dir = dir[p];
  }
};

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function (path, content) {
  path = path.substring(1);
  let dir = this.fs;
  const arr = path.split("/");
  for (let i = 0; i < arr.length - 1; i++) {
    const p = arr[i];
    if (!dir[p]) dir[p] = {};
    dir = dir[p];
  }
  if (dir[arr[arr.length - 1]]) dir[arr[arr.length - 1]] += content;
  else dir[arr[arr.length - 1]] = content;
};

/**
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function (path) {
  path = path.substring(1);
  let dir = this.fs;
  const arr = path.split("/");
  for (const p of arr) {
    dir = dir[p];
  }
  return dir;
};

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */

const fs = new FileSystem();
fs.mkdir("/a/b/c");
fs.addContentToFile('/a/b/c/d', '')
console.log(fs.readContentFromFile('/a/b/c/d'));
[
  "FileSystem",
  "mkdir",
  "ls",
  "ls",
  "mkdir",
  "ls",
  "ls",
  "addContentToFile",
  "ls",
  "ls",
  "ls",
][
  ([],
  ["/goowmfn"],
  ["/goowmfn"],
  ["/"],
  ["/z"],
  ["/"],
  ["/"],
  ["/goowmfn/c", "shetopcy"],
  ["/z"],
  ["/goowmfn/c"],
  ["/goowmfn"])
];
