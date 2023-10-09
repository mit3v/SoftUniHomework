function magicMatrices(input) {
    
    let sumRow1 = 0;
    let sumRow2 = 0;
    let sumRow3 = 0;
    let sumColumn1 = 0;
    let sumColumn2 = 0;
    let sumColumn3 = 0;

    for (i = 0; i < input.length; i++) {
        sumRow1 += Number(input[0][i]);
    }
    for (i = 0; i < input.length; i++) {
        sumRow2 += Number(input[1][i]);
    }
    for (i = 0; i < input.length; i++) {
        sumRow3 += Number(input[2][i]);
    }

    for (i = 0; i < input.length; i++) {
        sumColumn1 += Number(input[i][0]);
    }
    for (i = 0; i < input.length; i++) {
        sumColumn2 += Number(input[i][1]);
    }
    for (i = 0; i < input.length; i++) {
        sumColumn3 += Number(input[i][2]);
    }
   
console.log(sumRow1 == sumRow2 && sumRow1 == sumRow3 && sumRow1 == sumColumn1 && sumRow1 == sumColumn2 && sumRow1 == sumColumn3);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
