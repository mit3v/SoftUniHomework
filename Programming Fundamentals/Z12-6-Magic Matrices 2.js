function magicMatrices(input) {
    let sum = 0;
    let sumArr = [];

    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input.length; j++) {
            sum += input[i][j];
        }
        sumArr.push(sum);
        sum = 0;
    }
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input.length; j++) {
            sum += input[j][i];
        }
        sumArr.push(sum);
        sum = 0;

    }
    let isTrue = true;
    let firstNum = sumArr[0];
    for (n = 1; n < sumArr.length; n++) {
        if (firstNum != sumArr[n]) {
            isTrue = false;
            break;
        }
    }
    console.log(isTrue);
}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
