//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let tracker = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[tracker] = nums[i];
            tracker++;
        }
    }
    while(tracker < nums.length){
        nums[tracker] = 0;
        tracker++;
    }
};