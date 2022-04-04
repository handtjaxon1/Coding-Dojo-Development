// --- Countdown ---//
function countdown(val) {
    let arr = [];
    for (let num = val; num >= 0; num--) {
        arr.push(num);
    }
    return arr;
}
// Test functions - Uncomment
// console.log(countdown(9).length);


// --- Print and Return ---//
function printAndReturn(arr) {
    // Assumes arr will always be 2 elements
    console.log(arr[0]);
    return arr[1];
}
// Test functions - Uncomment
// const test1 = [2, 10];
// printAndReturn(test1);


// --- First Plus Length ---//
function firstPlusLength(arr) {
    return arr[0] + arr.length;
}
// Test functions - Uncomment
// const test2 = [9, 5, 1];
// console.log(firstPlusLength(test2)); // Returns 9 + 3: 12
// const test3 = ["what", 10, 20, 30];
// console.log(firstPlusLength(test3)); // Returns the string appended to the length: "what4"
// const test4 = [true, 6, 9, 4, 2, 0];
// console.log(firstPlusLength(test4)); // Returns the boolean of true converted to number of 1: 7


// --- Values Greater than Second ---//
function greaterThanSecond(arr) {
    let count = 0;
    arr.forEach(val => {
        if (val > arr[1]) {
            count++;
        }
    });
    return count;
}
// Test functions - Uncomment
// const test5 = [1, 3, 5, 7, 9, 13];
// console.log(greaterThanSecond(test5));


// --- Values Greater than Second, Generalized ---//
function greaterThanSecondGeneralized(arr) {
    // By default return the same array if there aren't 2 or more values
    if (arr.length < 2) {
        return arr;
    }
    let newArr = [];
    arr.forEach(val => {
        if (val > arr[1]) {
            newArr.push(val);
        }
    });
    //console.log(newArr.length);
    return newArr;
}
// Test functions - Uncomment
// const test6 = [1, 3, 5, 7, 9, 13];
// console.log(greaterThanSecondGeneralized(test6).length);
// const test7 = [1];
// console.log(greaterThanSecondGeneralized(test7).length);


// --- This Length, That Value ---//
function thisLengthThatValue(num1, num2) {
    if (num1 === num2) {
        console.log("Jinx!");
    }
    let arr = [];
    for (let i = 0; i < num1; i++) {
        arr.push(num2);
    }
    return arr;
}
// Test functions - Uncomment
// console.log(thisLengthThatValue(5, 10));


// --- Fit the First Value ---//
function fitFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!");
    }
    else if (arr[0] < arr.length) {
        console.log("Too small!");
    }
    else {
        console.log("Just right!");
    }
}
// Test functions - Uncomment
// const test8 = [3, 2, 1]; // Just right
// fitFirstValue(test8);
// const test9 = [2, 2, 2]; // Too small
// fitFirstValue(test9);
// const test10 = [9, 2, 1]; // Too big
// fitFirstValue(test10);


// --- Fahrenheit to Celsius ---//
function fahrenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5 / 9;
}
// Test functions - Uncomment
// console.log(fahrenheitToCelsius(64));


// --- Celsius to Fahrenheit ---//
function celsiusToFahrenheit(cDegrees) {
    return cDegrees * 9 / 5 + 32;
}
// Test functions - Uncomment
// console.log(celsiusToFahrenheit(17.7778));


// node Fundamentals_02.js