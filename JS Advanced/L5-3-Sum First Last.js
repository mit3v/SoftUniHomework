function sumFirstLast(arr) {

    let sum = Number(arr.shift()) + Number(arr.pop());
    console.log(sum);

}

sumFirstLast(["20", "30", "40"]);
sumFirstLast(["5", "10"]);
