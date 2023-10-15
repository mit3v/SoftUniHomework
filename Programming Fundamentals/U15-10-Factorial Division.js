function factorialDivision(num1, num2) {

    function factorial(a) {
        let result = 1;
        for (i = a; i >= 1; i--) {
            result *= i;
        }
        return result;
    }

    console.log((factorial(num1) / factorial(num2)).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
