function amazingNumbers(num) {
let numAsString = String(num);
let sum = 0;
for (i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
}
let sumAsString = String(sum);
let isAmazing = false;
for (n = 0; n < sumAsString.length; n++) {
    if (sumAsString[n] == 9) {
        isAmazing = true;
    }
}
console.log(`${num} Amazing? ${isAmazing ? "True" : "False"}`);

}

amazingNumbers(1233);
amazingNumbers(999);
amazingNumbers(99999999992);