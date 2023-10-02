let arrayche = [10, 20, 30];
console.log("length =", arrayche.length);
console.log("length = " + arrayche.length);

arrayche[5] = 60;
console.log(arrayche.length);
console.log(arrayche);
console.log("-");

arrayche[-4] = 1;
console.log(arrayche.length);
console.log(arrayche);
console.log("--");

console.log(arrayche[-4]);
console.log(arrayche.length);

let arraycheAsString = arrayche.toString();
console.log(arrayche);
console.log(arraycheAsString);
for (i = 0; i < arraycheAsString.length - 1; i++) {
    console.log(arraycheAsString[i]);
}

console.log(arrayche.includes(10));
console.log("---");
console.log(arrayche.includes("10"));
console.log("----");
console.log(arrayche.includes(15));

console.log(arrayche.join());
console.log(arrayche.join(999));
console.log(arrayche.join(" neshto si "));

