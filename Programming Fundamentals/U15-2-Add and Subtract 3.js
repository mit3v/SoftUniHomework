function addAndSubtract(num1, num2, num3) {

    function addTwoNumbers(a, b) {
        let sum = (a, b) => a + b;
        let res = sum(a, b);
        return res;
    }
    function subtractTwoNumbers(a, b) {
        let subs = (a, b) => a - b;
        let res = subs(a, b);
        return res;
    }

    let result = addTwoNumbers(num1, num2);
    console.log(subtractTwoNumbers(result, num3));
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);