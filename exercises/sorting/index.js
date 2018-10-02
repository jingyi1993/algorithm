// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    //implement bubblesort

    for(let i = 0 ; i< arr.length; i++){
        for (let j= 0; j< (arr.length - i -1);j++ ){
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
for(let i =0; i< arr.length; i++){
    let indexOfMin = i;
    for(let j = i+1 ; j< arr.length; j++){
        if(arr[j]< arr[indexOfMin]){
            indexOfMin =j
        }
    }
    //arr[i] arr[indexOfMin]
    let k =arr[i];
    arr[i] = arr[indexOfMin];
    arr[indexOfMin]=k;


}
return arr


}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
