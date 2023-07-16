/*
Rotate By 90
statement: Given a square matrix, turn it by 90 degrees in an anti-clockwise direction.

Input : 
  [
    [1,2,3,4],
    [5,6,7,8],
    [1,2,3,4],
    [5,6,7,8]
  ]
Output : 
  4 8 4 8
  3 7 3 7
  2 6 2 6
  1 5 1 5

*/
function rotateBy90(R, matrix) {
  for (let col = R - 1; col >= 0; col--) {
    let str = '';
    for (let row = 0; row < R; row++) {
      str += matrix[row][col] + " ";
    }
    console.log(str);
  }
}
let input =
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]
  ]
rotateBy90(input.length, input)