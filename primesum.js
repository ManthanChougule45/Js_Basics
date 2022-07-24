 /* 
 
 //This is the general code without the optimization for creating the sieve with the prime numbers
 
 let seive = [];
 let n = 1000
 seive.push(false) //index 0
 seive.push(false) //index 1
 
 //initially all index of arry as prime number i.e. mark as true
 for( let  i = 2 ; i <= n ; i++){
    seive.push(true); 
 }

 // This for loop is the logic of the creating sieve

 for(let i = 2 ; i <= n ; i++){
    if(seive[i] == true){//i is prime
        //mark all the multiples as non prime
        for(let j = 2*i; j <= n ; j= j +i){
            seive[j] = false;
        }
    }
 }
 //print prime number
 for(let i = 2; i <= n; i++){
    if(seive[i] == true){
        console.log(i)
    }
 }
// End of the code

//==========================================================================================================
*/ 


//1st optimized code













