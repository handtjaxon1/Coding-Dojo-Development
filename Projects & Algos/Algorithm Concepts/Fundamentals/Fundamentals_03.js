// --------------------- Biggie Size ---------------------//
function makeItBig(arr) {
    arr.forEach((element, index, array) => {
        if (element > 0) {
            array[index] = "big";
        }
    });
    return arr;
}
// Test functions - Uncomment to run
// const test1 = [-1, 3, 5, -5];
// console.log(makeItBig(test1));


// --------------------- Print Low, Return High ---------------------//
function printLowReturnHigh(arr) {
    // By default, set the lowest and highest to the first elements so we have a baseline comparison
    let lowest = arr[0];
    let highest = arr[0];

    arr.forEach(element => {
        // If the current element is less than the current lowest value, then set lowest to that value
        if (element < lowest) {
            lowest = element;
        }
        // If the current element is greater than the current highest value, then set highest to that value
        if (element > highest) {
            highest = element;
        }
    });
    
    console.log(lowest);
    return highest;
}
// Test functions - Uncomment to run
// const test2 = [1, 7, 8, 19, 3, -5, 12, -10];
// console.log(printLowReturnHigh(test2));


// --------------------- Print One, Return Another ---------------------//
function printOneReturnAnother(arr) {
    // Returns 2nd to last value of the arr only if there are sufficient elements
    if (arr.length >= 2) {
        console.log(arr[arr.length - 2]);
    }

    // Find the first odd number and return it
    // (assumes no negatives. I'm too lazy at the moment to factor in modulo with negatives)
    let val = arr[0];
    arr.forEach(element => {
        if (element % 2 === 1) {
            val = element;
        }
    });
    return val;
}
// Test functions - Uncomment to run
// const test3 = [2, 6, 8, 19, 5, 12, 10, 3];
// console.log(printOneReturnAnother(test3));


// --------------------- Double Vision ---------------------//
function doubleVision(arr) {
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element * 2);
    });
    return newArr;
}
// Test functions - Uncomment to run
// const test4 = [2, 6, 8, 19, 5, 12, 10, 3];
// console.log(doubleVision(test4));


// --------------------- Count Positives ---------------------//
function countPositives(arr) {
    let positives = 0;
    arr.forEach(element => {
        if (element > 0) {
            positives++;
        }
    });
    arr[arr.length - 1] = positives;
    return arr;
}
// Test functions - Uncomment
// const test5 = [-1, 1, 1, 1];
// console.log(countPositives(test5));


// --------------------- Evens and Odds ---------------------//
function evensAndOdds(arr) {
    let evenCount = 0;
    let oddCount = 0;
    arr.forEach(element => {
        if (element % 2 === 0) {
            eventCount++;
            oddCount = 0;
            if (evenCount >= 3) {
                
            }
        }
    });
}


// --------------------- Increment the Seconds ---------------------//



// --------------------- Previous Lengths ---------------------//



// --------------------- Add Seven to Most ---------------------//



// --------------------- Reverse Array ---------------------//



// --------------------- Outlook: Negative ---------------------//



// --------------------- Always Hungry ---------------------//



// --------------------- Swap Toward the Center ---------------------//



// --------------------- Scale the Array ---------------------//



// node Fundamentals_03.js