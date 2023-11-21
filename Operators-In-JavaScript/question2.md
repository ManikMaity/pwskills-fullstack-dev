# Comma Operator in JavaScript

The comma operator in JavaScript is used to evaluate multiple expressions in a single statement, returning the result of the last expression. It allows you to combine multiple expressions into a single expression.

## Syntax

The syntax for the comma operator is as follows:

```
expression1, expression2, expression3, ..., expressionN
```


## Example 

```javascript
let a = 5, b = 10, c = 15;

let result = (a++, b++, c++);

console.log(result); // Output: 15
console.log(a);      // Output: 6
console.log(b);      // Output: 11
console.log(c);      // Output: 16

```