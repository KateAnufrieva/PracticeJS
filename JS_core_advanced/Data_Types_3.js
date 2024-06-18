function comparingObjects(obj1, obj2){
   if(Object.keys(obj1).length !== Object.keys(obj2).length){
     return 'Объекты разные';
   }
    for(key in obj1){
        for(key in obj2){
            if(obj1[key] === obj2[key]){
                
        }else return 'Объекты разные';
    }
   
    }
    return 'Объекты одинаковые';
}


let user1 ={
    name: "John",
    age: 30,
    isAdmin: true
};

let user2 ={
    name: "John",
    age: 30,
    isAdmin: true
};

let user3 ={
    name: "Jack",
    age: 30,
    isAdmin: true
};

console.log(comparingObjects(user1, user2));
console.log(comparingObjects(user1, user3));