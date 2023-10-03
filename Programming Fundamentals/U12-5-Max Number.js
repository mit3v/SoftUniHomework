function maxNumber(arr) {

    let result = "";

    for (i = 0; i < arr.length; i++) {
        let checkingNum = arr[i];
        for (j = i + 1; j <= arr.length; j++) {
            let isThisBigger = arr[j];
            if (checkingNum <= isThisBigger) {
                break;
            }
            if (j == arr.length) {
                result += checkingNum + " ";
            }
        }
    }
    console.log(result);

}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
