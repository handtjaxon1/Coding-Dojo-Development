// Push Front
function pushFront(arr, val) {
    // Since we're moving every value towards the back, we can just loop from the end of the array to the front
    for (let index = arr.length - 1; index >=0; index--) {
        arr[index + 1] = arr[index];
    }
    arr[0] = val;
};

// Pop Front
function popFront(arr) {
    // Store the first element value since that's what we need to "pop"
    let val = arr[0];

    // Start from the 2nd element and loop through the array, shifting elements left (towards the front)
    for (let index = 1; index < arr.length; index++) {
        arr[index - 1] = arr[index];
    }
    // Remove the last element since it would have been shifted to the left already, and we have the
    // first element already stored, so this simulates a "pop" from the front.
    arr.pop();
    return val;
};

// Insert At
function insertAt(arr, val, at) {
    // Similar to pushFront, we can loop from the back to the front and just stop at the passed in index
    // NOTE We could even refactor pushFront to call this function, but with an "at" of 0
    for (let index = arr.length - 1; index >= at; index--) {
        arr[index + 1] = arr[index];
    }
    arr[at] = val;
};


// TODO Remove At (Bonus Challenge)


// TODO Swap Pairs (Bonus Challenge)


// TODO Remove Duplicates (Bonus Challenge)


// Testing functions
let test1 = [1, 2, 3, 4, 5, 6];
pushFront(test1, 10);
popFront(test1);
insertAt(test1, 99, 3);
console.log(test1);
