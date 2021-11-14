// #1

function alwaysHungry(arr) {
    var hungry = true;
    arr.forEach(element => {
        if (element === "food") {
            console.log("yummy");
            hungry = false;
        }
    });
    if (hungry) {
        console.log("I'm hungry");
    }
}
// this should console log "yummy", "yummy"
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "I'm hungry"
alwaysHungry([4, 1, 5, 7, 2]);

// #2

function highPass(arr, cutoff) {
    var filteredArr = [];
    arr.forEach(element => {
        if (element > cutoff) {
            filteredArr.push(element);
        }
    });
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// #3

function betterThanAverage(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    var avg = sum / arr.length;
    var count = 0
    arr.forEach(element => {
        if (element > avg) {
            count++;
        }
    });
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// #4

function reverse(arr) {
    var newArr = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        newArr.push(arr[index]);
    }
    return newArr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// #5

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        var value = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
        fibArr.push(value);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
