function magicMatrices(arr) {
    let arrOfSums = [];
    let sum2 = 0;
    let l = arr.length;
    for (i = 0; i < l; i++) {
        let sum = arr[i].reduce((a, b) => a + b);
        arrOfSums.push(sum);
        for (j = 0; j < l; j++) {
            sum2 += arr[i][j];
        }
        arrOfSums.push(sum2);
        sum2 = 0;
    }
    let firstNum = arrOfSums[0];
    // console.log(arrOfSums.every(e => e === firstNum));
    return arrOfSums.every(e => e === firstNum);
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);