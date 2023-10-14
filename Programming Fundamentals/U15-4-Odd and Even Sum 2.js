function oddAndEvenSum(num) {

    let numAsString = String(num);

    function oddOrEven(numberShouldBeStringHere) {
        let sumOdd = 0;
        let sumEven = 0;
        for (symbol of numberShouldBeStringHere) {
            if (symbol % 2 == 0) {
                sumEven += Number(symbol);
            } else {
                sumOdd += Number(symbol);
            }
        }
        return [sumOdd, sumEven];
    }


    console.log(`Odd sum = ${oddOrEven(numAsString)[0]}, Even sum = ${oddOrEven(numAsString)[1]}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
