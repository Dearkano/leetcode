/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while(start<end) {
        let mid = Math.floor(start+(end-start)/2)
        if(nums[mid]<target){
            start = mid + 1
        }else if(nums[mid]>target){
            end = mid - 1
        }else{
            return mid 
        }
    }
    if(nums[start]>=target){
        return start
    }else{
        return start + 1
    }
};