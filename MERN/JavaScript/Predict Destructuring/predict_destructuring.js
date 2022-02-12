// ---------------- Problem 1 ---------------- //
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ , otherRandomCar ] = cars

console.log(randomCar) // Outputs "Tesla"
console.log(otherRandomCar) // Outputs "Mercedes"
// No errors

// ---------------- Problem 2 ---------------- //
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//console.log(name); // Reference Error: name isn't defined
console.log(otherName); // Would output "Elon"

// ---------------- Problem 3 ---------------- //
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

console.log(password); // Would output "12345"
console.log(hashedPassword); // Would ouput "undefined": no password value contained in the person object

// ---------------- Problem 4 ---------------- //
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // Value is 2
const [,,,second] = numbers; // Value is 5
const [,,,,,,,,third] = numbers; // Value is 2

console.log(first == second); // Would output "False": 2 == 5
console.log(first == third); // Would output "True": 2 == 2

// ---------------- Problem 5 ---------------- //
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // Value is "value"
const { secondKey } = lastTest; // Value is "[1, 5, 1, 8, 3, 3]"
const [,willThisWork] = secondKey; // Value is "5"

console.log(key); // Would output "value"
console.log(secondKey); // Would output "[1, 5, 1, 8, 3, 3]"
console.log(secondKey[0]); // Would output "1"
console.log(willThisWork); // Would output "5"
