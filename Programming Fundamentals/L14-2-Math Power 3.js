// function mathPower(num, power) {
//     let result = 1;
//     for (i = 1; i <= power; i++) {
//         result *= num;
//     }
//     console.log(result);
// }

function recursivePower(num, power) {
    if (power == 0) {
        return 1;
    } else {
        return num * recursivePower(num, power - 1);
    }

}

console.log(recursivePower(2, 3));

// mathPower(2, 1);
// mathPower(2, 8);

