let i = 0;
let numbers = setInterval(function(){
    i++;
    if(i === 50){
        clearInterval(numbers);
    } else {
        console.log(i);
    }
    
}, 1000);