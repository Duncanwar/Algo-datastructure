function binarySearch(arr, target, isLower){
    let left = 0;
    let right = arr.length -1
    let result =-1

    while(left <= right){
        const mid =left + ((right - left)>>1);
        if((isLower && arr[mid] >= target) || (!isLower && arr[mid] <= target)){
            console.log(isLower,"isLower=")
            result = mid;
            isLower ? right = mid -1 : left = mid + 1
        }else {
            isLower ? left = mid +1 : right= mid - 1
        }

    }
    return result;
}

const findBounds = (arr, target)=>{
    const lowerBound = binarySearch(arr,target,true)
    const upperBound = binarySearch(arr,target,false)
    return [lowerBound, upperBound]
}

const arr = [1, 2, 3, 3, 3, 4, 5, 5, 6, 7];
const target = 4;
const [lowerBound, upperBound] = findBounds(arr, target);
console.log("Lower Bound:", lowerBound); // Output: 2
console.log("Upper Bound:", upperBound); // Output: 4
