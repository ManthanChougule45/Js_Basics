
/*function subsequence(input, output){
    if(input == ""){
        console.log(output); 
        return;
    }
    //self work
    let restofInput = input.substring(1);
    let firstchar = input[0];
    subsequence(restofInput, output)//exclude
    subsequence(restofInput, output+ firstchar); //include
}
//console.log(cnt)
subsequence('abcdefgh','')*/

function subsets(input, output){
    //base case
    if(input.length <= 0){
        console.log(output);
        return;
    }

    //self work
    let firstNumber = input[0];
    input.shift();
    //let restOfInput = input;
    //recursive calls
    subsets(input, output); //exclude
    output.push(firstNumber)
    subsets(input, output); //include


    input.unshift(firstNumber); //backtracking input
    output.pop();//backtracking output
}

let inputArr = [1, 2, 3];
let output = [];
subsets(inputArr, output);
