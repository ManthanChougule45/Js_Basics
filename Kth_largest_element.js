//using slection sort

function swap(array, x, y){
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp ;
}
// t swap there is one concept i javascrip called destructuring 
//[array[x] , array[y]] = [array[y], array[x]] // only applicable in javascript

function findMinIdex(array, start,k){
    let candidateMinIdx = start;
    for(let i = start; i< n-1; i++){
        if(array[i] > array[candidateMinIdx]){
            candidateMinIdx = i;
        }
    }
    return candidateMinIdx 
}


function selectionsort(array, n,k){//n-1 --> if rest all elements are sorted then we dont have to check for last element as it is in right postion
    for(let start = 0; start < k; start++){
        let minimumcandidateindex = findMinIdex(array, start,k);
        swap(array, start, minimumcandidateindex)
    }
}
 let array = [5,2,6,1,4,10,8,55,44,66,54,7,88,444,5559,534,6543,644654,646544,4646464,648865,64644,6486565464,66,64,6,64];
 let n = array.length;
 console.log(array);
 selectionsort(array, n,3)
 console.log(array)


 //Bubble sort

 function bubbleSort(arr, n, k){

    for(let i = 0; i < k; i++){
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

let arr1 = [5, 3, 4, 2, 1];
let arr = [1, 2, 3, 4, 5];
bubbleSort(arr1, 5,3);
 
