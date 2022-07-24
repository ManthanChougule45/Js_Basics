function subsets(input,output,){
    let arr1 = []
    let sumarr = []
    if(input.length <= 0){
        arr1.push(output)
        //console.log(output)
        let sum = 0;
        for(let i = 0 ; i<= arr1.length-1; i++){
            let temp = arr1[i]
            for(j =0 ; j <= temp.length; j++  ){
                sum = sum + temp[i]
                sumarr.push(sum)
            }
            
            //console.log(sum)
            //arr1.push(output)
            //console.log(arr1)
            
        }
        console.log(sumarr)
        //console.log(arr1)
        return;
        
        
    }
    console.log(arr1)
    let firstnumber = input[0]
    input.shift();
    subsets(input,output)
    //arr1.push(output)
    output.push(firstnumber)
    subsets(input,output,)
    //arr1.push(output)
    input.unshift(firstnumber)
    output.pop()
}

input = [1,2,3];
subsets(input,[])
//console.log(subsets(input,[]))