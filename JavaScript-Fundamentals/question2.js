const checkRegex = (regex, str) => {
    return regex.test(str);
}

console.log(checkRegex(/javascript/gi, "I love JavaScript")); //true
console.log(checkRegex(/javascript/g, "I love JavaScript")); //false
console.log(checkRegex(/\d+/g, "I have 2000 rupees in my bank")); //true



