function quickSort(arr) {
    if(arr.length<= 1){
        return arr;
    }

    let len = Math.floor(arr.length/2);

    let cur = arr.splice(len, 1);

    let left =[];
    let right =[];
    // for (let i= 0; i< arr.length; i++){
    //     if(cur> arr[i]){
    //         left.push(arr[i])
    //     }
    //    else{
    //         right.push(arr[i])
    //     }
    // }
    function sort(ele){
        if(cur> ele){
            return left.push(ele)
        }else{
            return right.push(ele);
        }

    }

    arr.filter(sort);
    // console.log(quickSort(left).concat(cur, quickSort(right)));
    return quickSort(left).concat(cur, quickSort(right));

}



console.log(quickSort([1,7,5,8,9,6,5,8,4,0,3,9,2,5,7]));