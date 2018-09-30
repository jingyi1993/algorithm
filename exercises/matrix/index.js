// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let minRow =0;
    let maxRow = n-1;
    let minColumn =0;
    let maxColumn = n-1;
    let index =1;
    let array = [];
    for(let i= 0; i< n; i++){
        array.push([]);
    }


        while(minRow<= maxRow && minColumn<= maxColumn){


            for(let i = minColumn; i<= maxColumn; i++){
                array[minRow][i]= index;
                index++;

            }
            minRow ++;
            for(let i = minRow; i<= maxRow; i++){
                array[i][maxColumn]= index;
                index++;
            }
            maxColumn--;
            for(let i = maxColumn; i>= minColumn; i--){
                array[maxRow][i]= index;
                index++;
            }
            maxRow --;
            for(let i = maxRow; i>= minRow; i--){
                array[i][minColumn]= index;
                index++;
            }
            minColumn++;

        }


    return array;
}

module.exports = matrix;
