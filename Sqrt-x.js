var mySqrt = function(x) {
    if(x < 2) return x;

    
    let start = 0;
    let end = x;

    while(start <= end){
        const midVal = Math.floor((start + end)/2);
 
        
        if(Math.pow(midVal,2) > x){
            end = midVal - 1;
        } else if(Math.pow(midVal,2) < x){
            start = midVal + 1;
        } else {
        
            return midVal;
        }
    }
        
    return end
};