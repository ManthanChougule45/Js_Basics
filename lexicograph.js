function lex(start, n){
    if(start > n){
        return
    }
    else console.log(start);
    
    for(let i = 0; i<= 9; i++){
        //start = start + i ;
        //console.log(start)
        lex(start*10 + i , n)
        
    }
    //console.log(n)
    
}
for(j =1 ; j<=9; j++)
{ x = lex(j,17);}