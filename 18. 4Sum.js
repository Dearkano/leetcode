// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */
// var fourSum = function (nums, target) {
//   const map = new Map();
//   const distinct = new Set();
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (!map.get(nums[i] + nums[j])) map.set(nums[i] + nums[j], []);
//       const key = `${Math.max(i, j)},${Math.min(i, j)}`;
//       if (!distinct.has(key)) {
//         map.get(nums[i] + nums[j]).push(key);
//         distinct.add(key);
//       }
//     }
//   }
//   const set = new Set();
//   const ans = [];
//   for (const pair of map) {
//     const [val, arr1] = pair;
//     if (map.get(target - val) && !set.has(val)) {
//       const arr2 = map.get(target - val);
//       set.add(val);
//       set.add(target - val);
//       for (const str1 of arr1) {
//         for (const str2 of arr2) {
//           const left = str1.split(",").map((i) => Number(i));
//           const right = str2.split(",").map((i) => Number(i));
//           if (
//             left[0] !== right[0] &&
//             left[0] !== right[1] &&
//             left[1] !== right[0] &&
//             left[1] !== right[1]
//           ) {
//             const temp = [...left, ...right];
//             temp.sort((a, b) => a - b);
//             const values = temp.map((i) => nums[i]);
//             values.sort((a, b) => a - b);
//             const key = temp.join(",");
//             const vKey = values.join(",");
//             if (!distinct.has(key) && !set.has(vKey)) {
//               ans.push([...values]);
//               distinct.add(key);
//               set.add(vKey);
//             }
//           }
//         }
//       }
//     }
//   }
//   return ans;
// };

const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  return kSum(nums, 0, 4, target);
};

const kSum = (nums, start, k, target) => {
  const ans = [];
  if (k === 2) {
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        ans.push([nums[left], nums[right]]);
        while (left < right && nums[left + 1] === nums[left]) left++;
        while (left < right && nums[right - 1] === nums[right]) right--;
        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  } else {
    for (let i = start; i < nums.length - k + 1; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;
      const arr = kSum(nums, i + 1, k - 1, target - nums[i]);
      const res = arr.map((item) => {
        item.unshift(nums[i]);
        return item;
      });
      ans.push(...res);
    }
  }
  return ans;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
