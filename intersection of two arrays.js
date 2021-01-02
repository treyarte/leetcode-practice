var intersection = function(nums1, nums2) {
    
    let numsToSet = nums1.length < nums2.length ? nums2 : nums1;
    
    let numsSet= new Set(numsToSet);
    let intersect = new Set();
    
    let numsToLoop = nums1.length < nums2.length ? nums1 : nums2;
    
    for(let i = 0; i < numsToLoop.length; i++){
        const val = numsToLoop[i];
        if(numsSet.has(val)){
            intersect.add(val)
        }
    }
    
    return [...intersect]
};

