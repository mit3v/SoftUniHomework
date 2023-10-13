// function printHeader() {
//     console.log("~~~-   {@}   -~~~");
//     console.log("~- Certificate -~");
//     console.log("~~~-   ~---~   -~~~");
// }

// printHeader();


// function countDown(x) {
//     console.log(x);
//     if (x > 0) {
//         countDown(x - 1);
//     }
// }

// countDown(5);

function myPow(x, y) {
    console.log(Math.pow(x, y));
}

myPow(3, 4);

function myMath(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result = result * x;
    }
    console.log(result);
}
function multiplyTwoNumbers(a, b) {
    return a * b;
}

myMath(3, 4);

// заменяме реда result = result * x с функцията multiplyTwoNumbers;

function myMath2(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result = multiplyTwoNumbers2(result, x);
    }
    console.log(result);
}
function multiplyTwoNumbers2(a, b) {
    return a * b;
}

myMath2(3, 4);

// сега с return: той прекъсва изпълнението на функцията и връща резултата;

function myMath3(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        //   result = multiplyTwoNumbers3(result, x);
    }
    console.log(multiplyTwoNumbers3(2, 2));
    console.log(result);
}
function multiplyTwoNumbers3(a, b) {
    return a * b
}

myMath3(3, 4);

