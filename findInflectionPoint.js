function findInflectionPoint(arr){
    let start = 0;
    let end = arr.length - 1;
    
    while(start <= end){
          let mid = Math.floor((start + end)/2);
        
        if(start === mid && arr[mid] > arr[end]){
            return start;
        } else if(start === mid && arr[mid] < arr[end]){
            return end;
        }
    if(arr[mid] <= arr[mid - 1] || arr[mid] >= arr[mid + 1]){
      return mid;
    } else if(arr[mid] >= arr[mid - 1] && arr[mid] <= arr[mid + 1]){
     
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    }
}