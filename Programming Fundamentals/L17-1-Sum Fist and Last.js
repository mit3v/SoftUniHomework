function sumFirstAndLast(arr) {
    if (arr.length === 1) {
        return console.log(arr.toString() + " - only 1 element in string");
    }

    let num1 = Number(arr.shift());
    let num2 = Number(arr.pop());
    console.log(num1 + num2);

}

sumFirstAndLast(["20", "30", "40"]);
sumFirstAndLast(["5", "10"]);
sumFirstAndLast(["5"]);
 