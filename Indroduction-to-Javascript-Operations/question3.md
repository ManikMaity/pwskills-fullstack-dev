## Differentiating Unary, Binary, and Ternary Operators in JavaScript

In JavaScript, operators are fundamental building blocks that allow to perform various operations on data. These operators can be classified based on the number of operands they require. The three main categories of operators are:

### 1. Unary Operators

Unary operators operate on a single operand, which is a value or an expression. They are typically used to negate a number, increment or decrement a variable, or perform logical negation. Some common unary operators in JavaScript include:

- `+` (unary plus): Converts a value to its positive equivalent
- `-` (unary minus): Converts a value to its negative equivalent
- `!` (logical not): Negates the boolean value of an operand
- `++` (increment): Increments the value of an operand by 1
- `--` (decrement): Decrements the value of an operand by 1

**Examples:**

```javascript
let x = 5;
let y = -x;      // Unary negation (changes the sign)
let z = ++x;     // Unary increment (pre-increment)
let w = x--;     // Unary decrement (post-decrement)
let isTrue = !true; // Unary logical NOT
```


### 2. Binary Operators

Binary operators operate on two operands. They are commonly used for arithmetic operations, comparisons, logical operations, and assignments. Some examples of binary operators in JavaScript include:

- `+` (addition): Adds two operands
- `-` (subtraction): Subtracts the second operand from the first operand
- `*` (multiplication): Multiplies two operands
- `/` (division): Divides the first operand by the second operand
- `%` (modulo): Returns the remainder of dividing the first operand by the second operand
- `==` (equality): Checks if two operands are equal
- `!=` (inequality): Checks if two operands are not equal
- `<` (less than): Checks if the first operand is less than the second operand
- `<=` (less than or equal to): Checks if the first operand is less than or equal to the second operand
- `>` (greater than): Checks if the first operand is greater than the second operand
- `>=` (greater than or equal to): Checks if the first operand is greater than or equal to the second operand
- `&&` (logical AND): Joins two boolean expressions, and the result is true only if both expressions are true
- `||` (logical OR): Joins two boolean expressions, and the result is true if either or both expressions are true
- `=` (assignment): Assigns a value to a variable

**Examples:**

```javascript
let a = 10;
let b = 5;
let sum = a + b; // Binary addition
let difference = a - b; // Binary subtraction
let product = a * b; // Binary multiplication
let quotient = a / b; // Binary division
let remainder = a % b; // Binary modulo

```


### 3. Ternary Operators

The ternary operator, also known as the conditional operator, is the only operator in JavaScript that uses three operands. It takes the following form:

```javascript
condition ? expression1 : expression2
```


This operator evaluates the `condition`. If the condition is true, it evaluates and returns `expression1`. If the condition is false, it evaluates and returns `expression2`. The ternary operator is often used as a concise alternative to an `if-else` statement.

**Example:**

```javascript
let age = 20;
let isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult); // Output: 'Yes' if age is 18 or greater, 'No' otherwise

```
