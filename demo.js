/*console.log("printjfjfljfd")
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


let ary = [1,12,3,4,5,5,6,5]
for(i =1; i< ary.length;i++){
    console.log(ary[i])
}

console.log("16 th May")
{
    let obj  = 4;
    obj = 100
    console.log(obj)
}
var obj = {
    name :"Manthan"
    
  }

  var obj = 5
  
  console.log(obj.name)
  //Object.freeze(obj)
  obj.name = 5;
  console.log(obj.name)
  obj.surnane = "ksdfldjf";
  console.log(obj.surnane)
 
are =  [35,3,4,88,9,10,21,5,6]
let cnt = 0
are.sort()
console.log(are)
for( i = 0; i < are.length;i++){
    if(are[i] == (are[i+1]-1)){
        cnt++
    }
    else{
        cnt =1;
    }

    
}
console.log("count "+cnt) */

ary = [35,3,4,88,9,10,21,5,6]
console.log(ary.sort())