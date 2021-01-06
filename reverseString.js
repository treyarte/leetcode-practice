/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 
 create two pointers right and left
 
 left start at the first element
 right start at the last element
 
 while left less than right
     
    swap nums left and right

return s
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while(left < right){
        swap(s, left, right)
        left++;
        right--;
    }
    
    return s;
};

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}