// Person constructor of question 1
function Person (name, age){
    this.name = name;
    this.age = age;
    this.sayHallo = function () {
        console.log(`Hello, myself ${this.name} and I am ${this.age} years old.`);
    }
}

function Employee (name, age, designation){
    Person.call(this, name, age);
    this.designation = designation;
    this.getDetails = function(){
        console.log(`Employee Details:\nName: ${this.name}\nAge: ${this.age}\nDesignation: ${this.designation}`)
    }
}

const employee1 = new Employee("Manik", 21, "Developer");
employee1.getDetails();
/**
Employee Details:
Name: Manik
Age: 21
Designation: Developer
 */