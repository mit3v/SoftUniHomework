function diagonalSums (input) {

    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i < input.length; i++) {
       
        sum1 += input[i][i];
        sum2 += input[input.length - 1 - i][i];
    }
    
    console.log(sum1, sum2);

}

diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
diagonalSums([[20, 40], [10, 60]]);