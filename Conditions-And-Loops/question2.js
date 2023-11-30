// Write a program that grades students based on their marks
// If greater than 90 then A GradE
// If between 70 and 90 then a B gradE
// If between 50 and 70 then a C gradE
// Below 50 then an F grade

function grade(marks = 60) {
  if (typeof marks != typeof 3) {
    return `Enter a number`;
  }
  let grade = "F";
  if (marks > 90) {
    grade = "A";
  } else if (marks >= 70) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }
  return grade;
}

console.log(grade(100)); // Output - A
console.log(grade(70)); // Output - B
console.log(grade(50)); // Output - C
console.log(grade(20)); // Output - F
console.log(grade("20")); // Output - Enter a number
