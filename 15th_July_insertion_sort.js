function insertionsort(arr,n){
    //i,x,J
    for(i=1; i <n;i++){
        let x = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > x){// shifting greater than x element on rihgt 
            arr[j+1] = arr[j]; //right shift jth element
            j--;
        }
        arr[j+1] = x;
    }
} 
let arr = [1,5,6,7,2,566,4,8,88,46]
insertionsort(arr, arr.length)
console.log(arr)