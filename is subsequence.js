var isSubsequence = function(s, t) {
    let subIdx = 0;
    
    for(let i = 0; i < t.length; i++){
        let subVal = s[subIdx];
        let mainVal = t[i];
        
        if(subVal === mainVal) subIdx++;
    }
    
    return subIdx === s.length;
};