function diagonalSums (input) {

    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i < input.length; i++) {
       
        sum1 += input[i][i];
    }
    for (j = input.length - 1; j >= 0; j--){
        sum2 += input[j][input.length - 1 - j]; }
    

    console.log(sum1, sum2);

}

diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
diagonalSums([[20, 40], [10, 60]]);