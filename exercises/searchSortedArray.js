function search(arr,key) {

    let midiumIndex = Math.floor(arr.length/2);
    let pivot = arr[midiumIndex];

    if(arr.length<=1){
        console.log('-1');

    }
    if(key===pivot){
        console.log('1');

    }else {
        if(key >pivot){
            return search(arr.slice(midiumIndex+1), key);
        }else if(key < pivot){
            return search(arr.slice(1,midiumIndex), key);
        }


    }
    // console.log('01')
}

search([1,3,5,7,9],10);