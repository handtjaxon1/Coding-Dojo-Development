// Setting and Swapping
function settingAndSwapping() {
    // Setting variables
    console.log("Setting variables...");
    let myNumber = 42;
    let myName = "Jaxon";
    console.log(myNumber);
    console.log(myName);

    // Swapping variables
    console.log("Swapping variables...");
    let temp = myNumber;
    myNumber = myName;
    myName = temp;
    console.log(myNumber);
    console.log(myName);
}

// Print - 52 to 1066
function printNumbers() {
    // Prints 52 -> 1066 inclusive
    for (let num = 52; num <= 1066; num++) {
        console.log(num);   
    }
}

// Don't Worry, Be Happy
function beCheerful() {
    console.log("good morning!");
}

function dontWorryBeHappy() {
    for (let num = 0; num < 98; num++) {
        beCheerful();
    }
}

// Multiples of Three - but Not All
function someMultiplesOfThree() {
    for (let num = -300; num <= 0; num += 3) {
        if (num === -3 || num === -6) {
            continue
        }
        else {
            console.log(num);
        }
    }

    // NOTE Could also accomplish this with a modulo operator
    // I preferred the previous method as it iterates fewer times than the below method
    // which I suppose doesn't matter much with only 300 iterations, but at scale
    // it could have a larger performance impact
    // for (let num = -300; num <= 0; num++) {
    //     if (num % 3 === 0) {
    //         if (num === -3 || num === -6) {
    //             continue
    //         }
    //         else {
    //             console.log(num);
    //         }
    //     }
    // }
}

// Printing Integers with While
function printWhile() {
    let num = 2000;
    while (num <= 5280) {
        console.log(num);
        num += 1;
    }
}

// You Say It's Your Birthday
function birthday(birthMonth, birthDay) {
    // Make two random numbers, with max of 31 (that's the max days in a month)
    const rand1 = Math.ceil(Math.random() * 31);
    const rand2 = Math.ceil(Math.random() * 31);
    console.log("Rand1: " + rand1, " Rand2: " + rand2);

    // Test values to compare with input to ensure this works as intended (need to change 'const' to 'let' above)
    // rand1 = 10;
    // rand2 = 4;

    const correctMonth = rand1 === birthMonth || rand2 === birthMonth;
    const correctDay = rand1 === birthDay || rand2 === birthDay;

    if (correctMonth && correctDay) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day...");
    }
}

// Leap Year
function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leap year");
            }
            else {
                console.log("Normal year");
            }
        }
        else {
            console.log("Leap year");
        }
    }
    else {
        console.log("Normal year");
    }
}

// Print and Count
function printAndCount() {
    let count = 0;
    for (let num = 512; num <= 4096 ; num++) {
        if (num % 5 === 0) {
            count++;
            console.log(num);
        }
    }
    console.log(count);
}

// Multiples of Six
function multiplesOfSix() {
    let num = 0;
    while (num <= 60000) {
        if (num % 6 === 0) {
            console.log(num);
            num += 6;
        }
    }
}

// Counting, the Dojo Way
function codingDojo() {
    for (let num = 1; num <= 100; num++) {
        if (num % 10 === 0) {
            console.log("Dojo");
        }
        else if(num % 5 === 0) {
            console.log("Coding");
        }
        else {
            console.log(num);
        }
    }
}

// What Do You Know?
function whatdyaKnow(incoming) {
    console.log(incoming);
}

// Whoa, That Sucker’s Huge…
function bigBoi() {
    // Original, suboptimal method
    // Loops through all numbers between -300,000 and 300,000 and adds the odd values
    // let sum = 0;
    // for (let num = -300000; num <= 300000; num++) {
    //     if (num % 2 === 1) {
    //         sum += num;
    //     }
    // }
    // console.log(sum);

    // More optimal "shortcut" method
    // Since we know the range we're summing, and the type of values we're adding (odd numbers)
    // then we can simply start at an odd value and increment by 2 to only iterate over, and
    // thus count, odd values
    let sum = 0;
    for (let num = -299999; num <= 299999; num += 2) {
        sum += num;
    }
    console.log(sum);

    // Most optimal
    // Since the lower and upper bounds of the range are both just as positive as they are
    // negative, then we know the sum of the odd values will be 0, so we can simply log that
    // console.log(0);
}

// Countdown by Fours
function countdownByFours() {
    num = 2016
    while (num > 0) {
        console.log(num);
        num -= 4;
    }
}

// Flexible Countdown
function flexibleCountdown(lowNum, highNum, mult) {
    for (let num = highNum; num > lowNum; num -= mult) {
        console.log(num);
    }
}

// The Final Countdown
// I'll be honest, the name of this section indicates it's a "countdown", but the example given is
// showing an ascedning order (6,12,15). Because of this I've written the program as a "countup"
// param1 = multiple, param2 = starting number, param3 = ending number, param4 = omitted number
function finalCountdown(param1, param2, param3, param4) {
    let current = param2;
    while (current <= param3) {
        if (current % param1 === 0 && current !== param4) {
            console.log(current);
        }
        current++
    }
}

// Testing Function - Uncomment each to test
// settingAndSwapping();
// printNumbers();
// dontWorryBeHappy();
// someMultiplesOfThree();
// printWhile();
// birthday(10,4);
// leapYear(2000);
// printAndCount();
// multiplesOfSix();
// codingDojo();
// whatdyaKnow("Not a damn thing");
// bigBoi();
// countdownByFours();
// flexibleCountdown(2,9,3);
// finalCountdown(3,5,17,9)

// node Fundamentals_01.js