function findFirstOccurence(arr, target) {
let left=0
let right=arr.length-1
let firstOccurence = -1

while(left<=right){
    let middle = Math.floor((right+left)/2)
        if(arr[middle] === target){
            firstOccurence = middle
            right = middle -1
        }
        else if(arr[middle] < target)
            left = middle +1
        else 
         right = middle -1
    }
return firstOccurence
}

function findLastOccurence(arr, target) {
    let left=0
    let right=arr.length-1
    let lastOccurence = -1
    
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle]===target){
                lastOccurence = middle
                left = middle + 1
            }
            else if(arr[middle] < target)
                left = middle +1
            else 
             right = middle -1
        }
    return lastOccurence
    }
    
function findOccurence(arr, target){
    const firstOccurence = findFirstOccurence(arr, target)
    if(findOccurence === -1){
        return [-1,-1]
    }
    const lastOccurence = findLastOccurence(arr, target)
    return [firstOccurence,lastOccurence]
}
const arr = [1,2,3,4,5,6,6,6,7,7]
const target = 6
console.log(findOccurence(arr, target))
