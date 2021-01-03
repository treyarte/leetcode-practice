var findMin = function(nums) {
    if(nums.length === 1) return nums[0];
    
    start = 0;
    end = nums.length - 1;

    if(nums[start] < nums[end]) return nums[start]
    
    while(start <= end){
        const midIdx = Math.floor((start + end)/2);
        const midVal = nums[midIdx];
      
        if(midVal < nums[midIdx - 1]){
            return midVal
        }
        
        if(midVal > nums[midIdx + 1]){
            return nums[midIdx + 1]
        }
        
        if(midVal > nums[end]){
            start = midIdx + 1;
        } 
        
        else{
            end = midIdx - 1;
        } 
    }
    return -1
};