var isPerfectSquare = function(num) {
    if(num === 1 || num === 0) return true;
    
    let start = 0;
    let end = num;
    
    while(start <= end){
        const midVal = Math.floor((start + end)/2);
        
        if(midVal * midVal === num){
            return true
        } else if(midVal * midVal  < num){
            start = midVal + 1;
        } else if(midVal * midVal > num){
            end = midVal - 1;
        }
    }
    
    return false;
    
};