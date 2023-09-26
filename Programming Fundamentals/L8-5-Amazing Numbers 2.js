function amazingNumbers(num) {
let numAsString = String(num);
let sum = 0;
for (i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
}
let sumAsString = String(sum);
let isAmazing = sumAsString.includes("9");
// let isAmazing = sum.toString().includes("9"); // - това може да замени горните 2 реда;
console.log(`${num} Amazing? ${isAmazing ? "True" : "False"}`);

}

amazingNumbers(1233);
amazingNumbers(999);
amazingNumbers(99999999992);