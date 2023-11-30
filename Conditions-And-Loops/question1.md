# Conditional statement
Conditional statements, also known as control flow statements, are used to execute specific blocks of code based on certain conditions. They allow us to control the flow of our program by making decisions based on the values of variables or expressions. JavaScript offers various conditional statements that cater to different scenarios and decision-making requirements.

##  if Statement:
The if statement is used to execute a block of code if a specified condition evaluates to true.
### Syntax
```js
if (condition){
    // execute code if condition is true
}
```
### Example 
```js
let age = 18;
if (age >= 18){
    console.log(`You are an adult`);
}
// Output - You are an adult
```

## if-else Statement:
The if-else statement extends the if statement by providing an alternative code block to execute if the condition is not met.
### Syntax
```js
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```
### Example
```js
let myName = "Manik";
if (myName.length < 6){
    console.log(`Your name is short`);
}
else{
    console.log(`Your name is long`)
}
// Output - Your name is short
```
## else if Statement:
The else if statement allows for multiple conditions to be checked sequentially. It executes the first code block that matches a true condition.
### Syntax
```js
if (condition1) {
  // Code to execute if condition1 is true
} 
else if (condition2) {
  // Code to execute if condition2 is true
} 
else {
  // Code to execute if none of the conditions are true
}
```
### Example
```js
let marks = 60;
let grade = "F";

if (marks > 90) {
    grade = "A";
} 
else if (marks >= 70) {
    grade = "B";
} 
else if (marks >= 50) {
    grade = "C";
} 
else {
    grade = "F";
}
console.log(`Grade is ${grade}`); // Output - Grade is C
```
##  Switch Statement:
The switch statement evaluates an expression and executes the code block associated with the matching case value. We use break keyword to exit the switch statement after executing the corresponding code block.
### Syntax
```js
switch (expression) {
  case value1:
    // Code to execute if expression matches value1
    break;
  case value2:
    // Code to execute if expression matches value2
    break;
  default: 
    // Code to execute if no case matches
}
```

### Example
```js
const time = new Date();
let day = time.getDay();
let dayOfWeek = "Sunday";
switch (day) {
    case 0:
        dayOfWeek = "Sunday"
        break;
    case 1:
        dayOfWeek = "Monday"
        break;
    case 2:
        dayOfWeek = "Tuesday"
        break;
    case 3:
        dayOfWeek = "Wednesday"
        break;
    case 4:
        dayOfWeek = "Thursday"
        break;
    case 5:
        dayOfWeek = "Friday"
        break;
    case 6:
        dayOfWeek = "Saturday"
        break;
    default:
        dayOfWeek = "Invalid"
        break;
}
console.log(`Today is ${dayOfWeek}`); // Today is Thursday (Output on 30/11/2023)
```