// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    //implement bubblesort

    for(let i = 0 ; i< arr.length; i++){
        for (let j= 0; j< (arr.length - i -1);i++ ){
            if(arr[j]> arr[j+1]){
                const k = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = k;
            }


        }
    }

    return arr;

    //return array results
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
