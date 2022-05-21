console.log("printjfjfljfd")
//Doubt
var newYear2022 = ( function(y) { return y*y;}(2022)); 
console.log(newYear2022)
marks = 36;
let num = 0;
(marks >= 40)?(console.log("Pass")):(console.log("Fail"))
switch(true){
    case(num > 0):
        console.log("posivitve")
        break;
    case(num == 0):
        console.log("zero")
        break;
    case(num < 0):
        console.log("positive")


}
let num1 =15
let num2 = 15;
let num3 = 15;

if(num1 > num2 && num1 > num3){
    console.log(num1)
}else if(num2 > num1 && num2 > num3){
    console.log(num2)
}else{
    console.log(num3)
}

let sum =0;
function sumdigit(x){
    let sum = 0;
    while(x != 0){
      sum = sum + (x%10);
        x =  parseInt(x/10);
    }
    console.log(sum);
  }
  sumdigit(123)

function amnumber(x){
    let sum = 0;
    let num = x
    while(x !=0){
        rem = x %10;
        sum = sum+ rem*rem*rem;
        console.log(sum)
        x = parseInt(x/10);
    }
    if(sum == num){
        console.log("yes")
    }else{
        console.log("no")
    }
}
amnumber(153)

console.log("Prime Number")

function primenum(num){
    for(i =3 ; i<= num;i++){
        for(j =3; j<i ; j++){
            if(i%j != 0){
                console.log(i)
            }else{
                console.log("not proine")
            }
            
        }

    }
}
primenum(9)

//console.log(sumofalldigits(123))