
/*function fact(n){
    let facto = 1;
    
    while(n >= 1){
        return( n*fact(n-1))
    }
    
}

console.log(fact(3))
// your code goes here
function fib(n){
	let first = 0
	let sec = 1
	if(n ==0 || n ==1){
		return n;
	}
	return (consol.log(fib(n-1))+console.log(fib(n-2)))
}
console.log(fib(10))
function friends(n){
    if(n >= 1){
    return( 1*friends(n-1) +(n-2)*friends(n-2))
    //return tota;
}
}
console.log(friends(2))
//MAZE code
function findway(maze,r,c){
    if (maze[0][0] == -1 || maze[r-1][c-1] == -1){
        return 0;
    }

    for( let i = 0; i < r; i++ ){
        if(maze[i][0] == 0) maze[i][0] =1;
        else break;
    }
    
    for( let i = 1; i < c; i++ ){
        if(maze[0][i] == 0) maze[0][i] =1;
        else continue;
    }

    for(let i = 1; i < r; i++){
        for( j =1; j < c; j++){
            if(maze[i][j] == -1) continue;

            if(maze[i-1][j] > 0){
                maze[i][j] = maze[i][j] + maze[i-1][j]
            }
            
            if(maze[i][j-1] > 0){
                maze[i][j] = maze[i][j] + maze[i][j-1]
            }

        }
    }
    
    return maze[r-1][c-1];
}

maze = [
    [0,0,0,0],
    [0,-1,0,0],
    [-1,0,0,0],
    [0,0,0,0],
];
x = findway(maze,4,4)
console.log(x)


let n =33;
let arr =[]
i = 0 ;
while(n > 0){
    arr[i] = n%2;
    n = Math.floor(n/2);
    console.log(n)
    i++;
}
for(j=i-1; j<=0;j--){
    console.log(arr[j])
}
console.log(arr)
*/

function ways(maze, r,c,i,j){
    if(i >= r || j >= c || maze[i][j] == -1) return 0 ;
    if(i == r-1 || j == c-1) return 1 

    return ways(maze,r,c,i+1,j) + ways(maze,r,c,i,j+1)
}
let maze = [
    [0,0,0,0],
    [0,-1,0,0],
    [-1,0,0,0],
    [0,0,0,0],
];

console.log(ways(maze,4,4,0,0))