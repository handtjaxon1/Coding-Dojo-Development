/**
 * Print all odd values between the start and end. Accounts for negative numbers too.
 * @param {*} start The value to start counting from
 * @param {*} end   The value to end counting at
 * */
function printOdds(start, end) {
    for (let index = start; index <= end; index++) {
        if (index % 2 !== 0) {
            console.log(index);
        }
    }
}

/**
 * Prints all values that are multiples of 3 between the start and end value, in descending order.
 * @param {*} start The value to start counting at
 * @param {*} end   The value to end counting at
 */
function printMultThreeDesc(start, end) {
    for (let index = start; index >= end; index--) {
        if (index % 3 === 0) {
            console.log(index);
        }
    }
}

/**
 * Prints each element's value of the array
 * @param {[]} arr  The array of values to print
 */
function printArray(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

/**
 * Prints the sum of every number between the start and end numbers
 * @param {*} start The value to start counting from
 * @param {*} end   The value to end counting at
 */
function printSum(start, end) {
    var sum = 0;
    for (let index = start; index <= end; index++) {
        sum += index;
    }
    console.log(sum);
}

/**
 * Prints the factorial of a given number
 * @param {*} num
 */
function printFactorial(num) {
    var product = 1;
    for (let index = num; index > 0; index--) {
        product *= index;
    }
    console.log(product);
}

// #1
printOdds(1,20);
// #2
printMultThreeDesc(100,0);
// #3
var values = [4, 2.5, 1, -0.5, -2, -3.5];
printArray(values);
// #4
printSum(0,100);
// #5
printFactorial();