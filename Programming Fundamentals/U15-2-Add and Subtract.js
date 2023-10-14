function addAndSubtract(num1, num2, num3) {

    function addTwoNumbers(a, b) {
        return a + b;
    }
    function subtractTwoNumbers(a, b) {
        return a - b;
    }

    let result = addTwoNumbers(num1, num2);
    result = subtractTwoNumbers(result, num3);
    console.log(result);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);