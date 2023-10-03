function equalSums(arr) {

    let sumLeft = 0;
    let sumRight = 0;
    let noEqualNumber = true;

    for (i = 0; i < arr.length; i++) {
        let ourNumber = arr[i];

        for (j = i - 1; j >= 0; j--) {
            sumLeft += arr[j];
        }
        for (k = i + 1; k < arr.length; k++) {
            sumRight += arr[k];
        }
        if (sumLeft == sumRight) {
            console.log(i);
            noEqualNumber = false;
        }
        sumLeft = 0;
        sumRight = 0;
    }
    if (noEqualNumber == true) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);