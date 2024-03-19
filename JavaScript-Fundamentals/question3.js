function searchCharacterClasses(inputString) {
    const digitPattern = /\d/g;
    const uppercasePattern = /[A-Z]/g;
    const lowercasePattern = /[a-z]/g;
    const specialCharacterPattern = /[^A-Za-z0-9\s]/g;

    const digits = inputString.match(digitPattern) || [];
    const uppercaseLetters = inputString.match(uppercasePattern) || [];
    const lowercaseLetters = inputString.match(lowercasePattern) || [];
    const specialCharacters = inputString.match(specialCharacterPattern) || [];

    return {
        digits,
        uppercaseLetters,
        lowercaseLetters,
        specialCharacters
    };
}

const testString = "Hello, My name is Manik and I am 20 years old. I hate devin AI!";
const result = searchCharacterClasses(testString);

console.log("Digits:", result.digits); // Digits: [ '2', '0' ]
console.log("Uppercase Letters:", result.uppercaseLetters); 
/*Uppercase Letters: [
    'H', 'M', 'M',
    'I', 'I', 'A',
    'I'
  ] */
console.log("Lowercase Letters:", result.lowercaseLetters); 
/*Lowercase Letters: [
  'e', 'l', 'l', 'o', 'y', 'n', 'a',
  'm', 'e', 'i', 's', 'a', 'n', 'i',
  'k', 'a', 'n', 'd', 'a', 'm', 'y',
  'e', 'a', 'r', 's', 'o', 'l', 'd',
  'h', 'a', 't', 'e', 'd', 'e', 'v',
  'i', 'n'
] */

console.log("Special Characters:", result.specialCharacters); // Special Characters: [ ',', '.', '!' ]
