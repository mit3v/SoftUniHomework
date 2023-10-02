function sumEvenNumbers(arr) {
    let sum = 0;
    for (num of arr) {
        let numAsNumber = Number(num);
        if (numAsNumber % 2 == 0) {
            sum += numAsNumber;
        }
    }

    console.log(sum);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
