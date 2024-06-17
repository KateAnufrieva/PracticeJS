function addTenPercent(arr){
    return arr.map(element => element + element * 0.1)
}

console.log(addTenPercent([-98,30,2,12,7]));