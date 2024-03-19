const extractDate = (regex, str) => {
    const matchDate = str.match(regex);
    return matchDate? matchDate.slice(1, 4) : "Date Not Found";
}

const dateString = "Today's date is 19-03-2024";
const dateString2 = "My name is manik. I am 20 years old"
const datePattern = /(\d{2})-(\d{2})-(\d{4})/;


console.log(extractDate(datePattern, dateString)); // [ '19', '03', '2024' ]
console.log(extractDate(datePattern, dateString2)) // Date Not Found
