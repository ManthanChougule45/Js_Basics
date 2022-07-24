function swaparray(arr, start,end){
    if(end <= start){
        //console.log(arr)
        return;
    }
    temp = arr[start];
    //console.log(temp)
    arr[start] = arr[end]
    arr[end] = temp
    swaparray(arr,start+1,end-1)
    return arr;
}

arr = [1,2,3,2,2,4,5,7,9,0,7,5,4,3,1,3,4,6,7,8,9,0,7,6,4,3,4,6,4,7,9,1,223,45,67,89,76,33,23,44,55,66,12,13,14,15,16,17,18,19,20,23,234];
console.log(swaparray(arr,0,arr.length -1))