/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums?.length === 1)
        return 0;
    else{
        let leftSum = 0;
        let rightSum = 0;
        // calculated sum from index 1 to last index and stored that in rightSum 
        for(let i=1; i<nums?.length; i++ ){
            rightSum += nums[i];
        }
        for(let j=0; j<nums?.length; j++){
            if(rightSum === leftSum)
                return j;
            else{
                if(j === nums?.length - 1)
                    return -1;
                else{
                    rightSum = rightSum - nums[j+1];
                    leftSum = leftSum+ nums[j];
                }
            }
        }
    }
        
}