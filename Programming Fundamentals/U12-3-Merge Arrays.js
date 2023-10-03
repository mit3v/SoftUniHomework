function mergeArrays(arr1, arr2) {
    let finalArr = [];

    for (i = 0; i < arr1.length; i++) {
        let num1 = arr1[i];
        let num2 = arr2[i];
        if (i % 2 == 0) {
            finalArr.push(Number(num1) + Number(num2));
        } else {
            finalArr.push(num1 + num2);
        }
    }
    console.log(finalArr.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
