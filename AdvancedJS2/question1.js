function Person (name, age){
    this.name = name;
    this.age = age;
    this.sayHallo = function(){
        console.log(`Hello, myself ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Manik", 21);
person1.sayHallo(); // Hello, myself Manik and I am 21 years old.