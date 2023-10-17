function firstAndLastNumbers(arr) {

    let k = arr.shift();
    console.log(arr.slice(0, k).join(" "));
    console.log(arr.slice(-k).join(" "));
}

firstAndLastNumbers([2, 7, 8, 9]);
firstAndLastNumbers([3, 6, 7, 8, 9]);