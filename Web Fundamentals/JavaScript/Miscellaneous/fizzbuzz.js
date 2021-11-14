function FizzBuzz(start, end) {
    for (var index = start; index <= end; index++) {
        if (index % 15 === 0) {
            console.log("FizzBuzz");
        } else if (index % 3 === 0) {
            console.log("Fizz");
        } else if (index % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(index);
        }
    }
}

FizzBuzz(1,100);