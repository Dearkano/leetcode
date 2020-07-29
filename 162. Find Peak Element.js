/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = nums.length
    let l = 0
    let r = n - 1
    while(l<r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]<nums[mid+1]){
            l = mid + 1
        }else{
            r = mid
        }
    }
    return l
};