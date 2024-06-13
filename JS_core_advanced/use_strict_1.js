'use strict'

function factorial(num){

    if(num < 0) {
        return `${num} Negative numder`;
    }

    if(num == 0){
        return 1;
    }
    
    return num * factorial(num - 1);
};

console.log(factorial(6));
console.log(factorial(-1));
console.log(factorial(0));