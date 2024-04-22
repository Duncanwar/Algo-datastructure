function peakElement(arr){
    let left=0
    let right= arr.length-1

    while(left<right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle]>arr[middle+1]){
            right = middle
     }
     else 
    left = middle+1
    }
    return arr[left]
}

const arr= [1,2,3,4,5,6,7,8,9]
const result = peakElement(arr)
console.log(result)