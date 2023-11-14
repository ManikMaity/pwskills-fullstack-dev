# Different type of operators in JavaScript
Operators in JavaScript can be categorized based on their functionality. Here are some common categories of operators with examples:

 - Arithmetic Operators
 - Assignment Operators
 - Comparison Operators
 - Logical Operators
 - Unary Operators
 - Conditional (Ternary) Operator

 ## Arithmetic Operators
 Arithmetic Operators are used to perform arithmetic on numbers
 ### Example - 
 ```js
 let a = 5;
 console.log((a+4)*2) //18
 ```
 ### Operators - 
 ```
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
```

## Assignment Operators
Assignment operators are for assigning values to variables
 ### Example - 
```js
let userAge = 18;
userAge += 2;
console.log(userAge); //20
```
### Operators -
```
=, +=, -=, *=, /=, %=, **=
```

## Comparison Operators
JavaScript compare operators such as “>”, “<”, “===”, “==”, “!=” etc. used to compare two or multiple values.

### Example-
```js
let adminName = "Manik";
let userName = "Rohit";
let isAdmin = adminName === userName;
console.log(isAdmin); //false
```

### Operators - 
```
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?
```

## Logical Operators -
Logical operators perform logical operations and return Boolean results.

```js
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true
console.log(!isTrue); // false
```

### Operators - 
```
&&	logical and
||	logical or
!	logical not
```

## Unary Operators
JavaScript Unary Operators work on a single operand and perform various operations, like incrementing/decrementing, evaluating data type, negation of a value, etc.

### Example - 
```js
let myAge = 19;
myAge++; // myAge is now 20
```

### Operators - 
```
( + ) Unary Plus Operator 
( – ) Unary Minus Operator 
( ++ ) Unary Increment Operator
( — ) Unary Decrement Operator 
etc.
```

## Conditional (Ternary) Operator
Conditional (Ternary) Operator provide a concise way to write conditional statements.

### Example - 
```js
let userAge = 19;
console.log(userAge > 18 ? "Adult" : "Minor");
```
### Operator -
```
condition ? expr1 : expr2
```