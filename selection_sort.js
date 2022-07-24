function swap(array, x, y){
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp ;
}
// t swap there is one concept i javascrip called destructuring 
//[array[x] , array[y]] = [array[y], array[x]] // only applicable in javascript

function findMinIdex(array, start){
    let candidateMinIdx = start;
    for(let i = start; i< array.length; i++){
        if(array[i] < array[candidateMinIdx]){
            candidateMinIdx = i;
        }
    }
    return candidateMinIdx 
}


function selectionsort(array, n){//n-1 --> if rest all elements are sorted then we dont have to check for last element as it is in right postion
    for(let start = 0; start < n-1; start++){
        let minimumcandidateindex = findMinIdex(array, start);
        swap(array, start, minimumcandidateindex)
    }
}
 let array = [5,2,6,1,4,10,8,55,44,66,54,7,88,444,5559,534,6543,644654,646544,4646464,648865,64644,6486565464,66,64,6,64];
 let n = array.length;
 console.log(array);
 selectionsort(array, n)
 console.log(array)
