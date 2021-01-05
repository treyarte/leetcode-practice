var twoSum = function(nums, target) {
    if(nums === 2) return [0, 1];
    
    const exist = new Map();
    
    for(let i = 0; i < nums.length; i++){
        const difference = target - nums[i];
        
        if(exist.has(difference)){
            return [exist.get(difference), i];
        } 
        
        exist.set(nums[i], i);
    }
};