function heapSort(arr){
    // Build a max-heap
    buildMaxHeap(arr)

    // Heapify the heap and swap the root with the last element
    for(let i=arr.length -1; i>0; i--){
        [arr[0],arr[i]] = [arr[i], arr[0]];
        console.log([arr[0],arr[i]] = [arr[i], arr[0]],"heapSort")
        heapify(arr,0,i)
    }
    return arr;
}

function buildMaxHeap(arr){
    const n= arr.length
    for(let i=Math.floor(n/2)-1; i>=0; i--){
        console.log(arr,i,n, "buildmaxHeap")
        heapify(arr,i,n);
    }
}

function heapify(arr,i,heapSize){
    const left = 2*i+1
    const right = 2*i+2
    let largest = i;

    if(left < heapSize && arr[left] > arr[largest]){
        largest = left
    }

    if(right < heapSize && arr[right]> arr[largest]){
        largest = right
    }

    if(largest !== i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr,largest,heapSize)
    }
}

// Example usage:
const array = [12, 11, 13, 5, 6, 7];
const sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray);