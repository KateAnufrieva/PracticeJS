class Human{
    
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    getInfo(){
        console.log(`Name: ${this.name}\nAge: ${this.age}\nCountry: ${this.country}\n`);
    }
}

let Human1 = new Human ("Kate", 20, "Belarus");
let Human2 = new Human ("Mark", 45, "Russia");

Human1.getInfo();
Human2.getInfo();