/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const numLen = nums?.length;
    const rotations = k%numLen;
    if(rotations === 0)
        return;
    // reversing the array
    let secondPointer = numLen - 1;
    let firstPointer = 0;
    while(firstPointer < secondPointer){
        let temp = nums[firstPointer];
        nums[firstPointer] = nums[secondPointer];
        nums[secondPointer] = temp;
        firstPointer++;
        secondPointer--;
    }  
    firstPointer = rotations;
    secondPointer = numLen-1;
    while(firstPointer < secondPointer){
        let temp1 = nums[firstPointer];
        nums[firstPointer] = nums[secondPointer];
        nums[secondPointer] = temp1;
        firstPointer++;
        secondPointer--;
    }
    firstPointer = 0;
    secondPointer = rotations-1;
    while(firstPointer < secondPointer){
        let temp1 = nums[firstPointer];
        nums[firstPointer] = nums[secondPointer];
        nums[secondPointer] = temp1;
        firstPointer++;
        secondPointer--;
    }
};