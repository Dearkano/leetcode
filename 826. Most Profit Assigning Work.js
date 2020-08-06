/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    const jobs = [];
    for (let i = 0; i < difficulty.length; i++) {
      jobs.push({ difficulty: difficulty[i], profit: profit[i] });
    }
    worker.sort((a, b) => a - b);
    jobs.sort((a, b) => a.difficulty - b.difficulty);
    let ans = 0;
    let start = 0;
    let max = 0;
    for (const p of worker) {
      let i = start;
      for (; i < jobs.length; i++) {
        const job = jobs[i];
        if (job.difficulty <= p) {
          if (job.profit > max) {
            max = job.profit;
          }
        } else break;
      }
      start = i;
      ans += max;
    }
    return ans;
  };