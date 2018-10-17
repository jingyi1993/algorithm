function hi(num){
    let mul =[];
    for(let i =1; i<num; i++){
        for(let j = 1;j<=num; j++){
            console.log('!!!',i*j);
            mul.push(i*j)

        }
    }
    console.log(mul) ;
}

hi(12);
console.log(2*2)