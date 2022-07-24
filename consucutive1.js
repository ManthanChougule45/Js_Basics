//var cnt = 0
function consucutive1(input,pre){
    if(input == 0){
        //console.log(output)
        //cnt++
        return 1;
    }
    let totalcount = consucutive1(input -1 , 0);
    if(pre != '1'){
        totalcount = consucutive1(input -1 , 1) + totalcount;
    }
    return totalcount;
}
let cnt  = consucutive1(3,'')
console.log(cnt)