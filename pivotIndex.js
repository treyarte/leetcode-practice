var pivotIndex = function(nums) {
    if(!nums.length) return -1;
    let sum = nums.reduce((acc, x) => acc + x);
     let leftSum = 0;
     
     for(let i = 0; i < nums.length; i++){
         if(leftSum === sum - (leftSum + nums[i])){
             return i;
         } 
         
         leftSum += nums[i];
     }
     
     return -1;
 };