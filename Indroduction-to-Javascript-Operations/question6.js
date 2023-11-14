// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/ height * height.

let height = 169/100; // height in meter
let weight = 75; //weight in kg
const BMI = parseFloat((weight/(height**2)).toFixed(2)); //BMI upto 2 decimal places
console.log(BMI); //26.26