/*array = [1,2,3,4]

for( let i = 0; i < array.length - 1 ; i++){
    let swapDone = false;

    for(j = 0 ; j < array.length-1-i; j++){
        
        if(array[j] > array[j+1] && j < array.length){
            //console.log(j,j+1)
            temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
            swapDone = true;

        }
    }
    if(swapDone == false){
        return;
    }
    console.log(i , "th iteramtion")
}
console.log(array)*/

function swap(arr, x, y){ //swap elements at x and y index
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function bubbleSort(arr, n){

    for(let i = 0; i < n-1; i++){
        let swapDone = false;
        for(let j = 0; j < n-1-i ; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                swapDone =true;
            }
        }
        console.log(i, "th iteration completed");
        console.log(arr);
        if(swapDone == false){
            return;
        }
    }
}

let arr = [5, 3, 4, 2, 1];
let arr1 = [1, 2, 3, 4, 5];
bubbleSort(arr1, 5);
 