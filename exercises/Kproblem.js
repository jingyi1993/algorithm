function k(str, len) {



    if(len>0){

        if(str[len-1]=== 'k'){
            // return str[len-1] ='j' ;
            console.log(len-1);
             let arr = str.split('');
             arr[len-1]='j';
             str = arr.join('');

            //vhhksjnkkk




        }


        return k(str, len-1 )

    }else{
        console.log(str);
        // return str
    }

}

k('vhhksjnkkk',10);

