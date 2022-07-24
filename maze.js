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