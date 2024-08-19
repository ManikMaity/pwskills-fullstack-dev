const student = {
    name: 'Manik Maity',
    age: 21,
    grade: 'B'
};

// a) 
Object.preventExtensions(student);


// b) 
const extensibleStatus = Object.isExtensible(student);


// c) 
const teacher = {
    subject: 'Math'
};


// d) 
Object.seal(teacher);


// e) 
const sealedStatus = Object.isSealed(teacher);


// f) 
console.log(`Extensible: ${extensibleStatus}`); // Extensible: false
console.log(`Sealed: ${sealedStatus}`);         // Sealed: true
