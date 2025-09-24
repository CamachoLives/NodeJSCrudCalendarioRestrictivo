class Solution {
    /**
    * @param {number[]} nums
    * @return {number[]}
    */
    maxValNumOfOccurrences(nums) {
    
    let maxVal = nums[0]
    let count = 0
    
    for(let val of nums){
       if(val > maxVal){
           maxVal = val
           count = 1
       }else if(val == maxVal){
           count++
       }
    }
    
    const Arreglo = [maxVal,count];
    
    return Arreglo
    
    }
}