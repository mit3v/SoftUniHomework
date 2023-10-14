function oddAndEvenSum(num) {

    let numAsString = String(num);

    let masivche = oddOrEven(numAsString);
    // console.log(masivche);

    console.log(`Odd sum = ${masivche[0]}, Even sum = ${masivche[1]}`);

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


}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
