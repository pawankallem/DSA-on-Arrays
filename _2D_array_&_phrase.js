/* 
2D Array and Phrase
Problem Statement:
You are given an array of n rows and m columns which contains lower case English letters. How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?

input: 
n = 5, m = 5,
matrix = [
  [s,a,f,e,r],
  [a,m,j,a,d],
  [b,a,b,o,l],
  [a,a,r,o,n],
  [s,o,n,g,s]
]

Output : 2

*/ 
function twoArrayAndPhrase(n, m, matrix){
    let count = 0;
    for(let r = 0; r < n; r++) {
       for(let c = 0; c < m; c++) {
           if(c < m-3) {
               let word = matrix[r][c] + matrix[r][c+1] + matrix[r][c+2] + matrix[r][c+3];
               if(word == 'saba') count++;
           }
           if(r < n-3) {
               let word = matrix[r][c] + matrix[r+1][c] + matrix[r+2][c] + matrix[r+3][c];
               if(word== 'saba') count++;
           }
           if( r < n-3 && c < m-3 ) {
               let word = matrix[r][c] + matrix[r+1][c+1] + matrix[r+2][c+2] + matrix[r+3][c+3];
               if(word == 'saba') count++;
           }
           if(r >= 3 && c < m-3) {
               let word = matrix[r][c] + matrix[r-1][c+1] + matrix[r-2][c+2] + matrix[r-3][c+3];
               if(word == 'saba') count++;
           }
       }
    }
    console.log(count);
}

let n = 5, m = 5;
let matrix = [
  ['s','a','f','e','r'],
  ['a','m','j','a','d'],
  ['b','a','b','o','l'],
  ['a','a','r','o','n'],
  ['s','o','n','g','s']
]
twoArrayAndPhrase(n,m,matrix);
