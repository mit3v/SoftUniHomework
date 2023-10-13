function myMath(x, y) {
    let result = 1;
    for (i = 0; i < y; i++) {
        result = multiplyTwoNumbers(result, x);
    }

    function multiplyTwoNumbers(a, b) {
        let result = a * b;
        return result;
    }
    return result; // това ако го нямаме, изпълнението ще даде undefined.
}

console.log(myMath(2, 5)); 