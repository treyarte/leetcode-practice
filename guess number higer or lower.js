var guessNumber = function(n) {
    if(n === 1) return n;
     
     let start = 0
     let end = n;
     
     while(start <= end){
         const midVal = Math.floor((start + end)/2);
         const feedBack  = guess(midVal);
         
         if(feedBack === -1){
             end = midVal - 1;
         } else if(feedBack === 1){
             start = midVal + 1;
         } else if(feedBack === 0){
             return midVal;
         }
     }
 };
 