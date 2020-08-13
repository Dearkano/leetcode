/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const digitLog = [];
  const alphalog = [];
  for (const log of logs) {
    const arr = log.split(" ");
    if (isNaN(Number(arr[1]))) alphalog.push(log);
    else digitLog.push(log);
  }
  alphalog.sort((a, b) => {
    const sa = a.substring(a.indexOf(" ") + 1);
    const sb = b.substring(b.indexOf(" ") + 1);
    if (sa < sb) return -1;
    else if (sa > sb) return 1;
    else
      return a.substring(0, a.indexOf(" ")) < b.substring(0, b.indexOf(" "))
        ? -1
        : 1;
  });
  alphalog.push(...digitLog);
  return alphalog;
};
