// Reverse
function reverse(arr) {
    // Since we're doing this in place, without another array, we can look at only looping through half of the array
    // and essentially just taking the elements from the back half and swapping them with the front half.
    for (let index = 0; index < arr.length / 2; index++) {
        // Store the current value
        let temp = arr[index];
        // Set the current value to it's reversed counterpart index, and vice versa
        let revInd = arr.length - 1 - index; // Just here to make it more clear what this value means. Not strictly neccessary
        arr[index] = arr[revInd];
        arr[revInd] = temp;
    }
    return arr;
}

// Rotate
function rotate(arr, shiftBy) {
    // Haven't been able to solve yet so back to the drawing board for now.
    return arr;
}

// Filter Range
function filterRange(arr, min, max) {
    // We can track the next index that has a value between min and max
    // so that we don't have to iterate through the array twice
    let next = 0;
    for (let index = 0; index < arr.length; index++) {
        // Check if the value of the current index is within min and max
        if (arr[index] >= min && arr[index] <= max) {
            //...if so then we can set the array element of our 'next' to the current value
            // and increase next. This allows us to overwrite values of the array from the front
            // so that we can simply remove the excess elements once the loop is done (see below)
            arr[next] = arr[index];
            next++;
        }
    }
    // Then we can remove the extra elements by simply setting the length of the array directly; no need to pop anything
    arr.length = next;
    return arr;
}

// Concat
function concat(arr1, arr2) {
    newArr = arr1;
    for (let index = 0; index < arr2.length; index++) {
        newArr.push(arr2[index]);
    }
    return newArr;
}

// Testing functions
let test1 = [4, 2, 1, 3, 5, 2, 6, 1, 5, 2, 4, 3, 6];
let test2 = [0, 9, 0, 9];
// reverse(test1);
// rotate(test1);
// filterRange(test1);
// concat(test1, test2);
console.log(test1);