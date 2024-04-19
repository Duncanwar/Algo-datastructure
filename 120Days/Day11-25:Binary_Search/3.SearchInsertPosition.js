function searchInsert(arr,target){
    let left=0;
    let right=arr.length -1

    while(left<=right){
      let  middle= left + ((right-left)>>1)
        if(arr[middle]==target){
            return middle
        }
        if(arr[middle] < target){
            left = middle+1
        }
        else {
            right = middle -1
        }
    }
    return left
}

console.log("The target should be inserted at",searchInput([1,2,4,5,7,8],3))
