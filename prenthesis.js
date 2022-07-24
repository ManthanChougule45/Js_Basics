function prenthesis(n,open,close,str,mstr){

    if(open == 0 && close == 0){
        mstr.push(str);
        //console.log(mstr)
        return;
    }
    if(open != 0){
        //str
        
        prenthesis(n,open-1,close,str + '{',mstr)
    }
    if(close > open){
        //output2  = str
        //output2 = output + '}'
        prenthesis(n,open,close,str + '}' ,mstr)
    }
    //return;
}
mstr = []
str = ''
//console.log(mstr)
prenthesis(2,0,0,str,mstr)