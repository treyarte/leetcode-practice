/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        
        while(start <= end){
            const midNum = Math.floor((start + end)/2);
            
            if(isBadVersion(midNum) === false){
                start = midNum + 1;
            } else{
                end = midNum - 1;
            }
        }
        
        return start;
    };
};