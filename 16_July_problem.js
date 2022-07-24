let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let merg = [];
let i = 0;
let j = 0;
while(i<arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
        merg.push(arr1[i]);
        i++;
    }
    else{
        merg.push(arr2[j])
        j++;
    }
}
// remaing arry element in arr1 to push them in merg
while(i< arr1.length){
    merg.push(arr1[i]);
    i++
}
while(j<arr2.length){
    merg.push(arr2[j]);
    j++
}
console.log(merg)