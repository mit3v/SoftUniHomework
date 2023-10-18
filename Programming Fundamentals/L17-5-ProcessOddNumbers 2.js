function processOddNumbers(arr) {

    console.log(arr.filter((element, index) => index % 2 !== 0)
    .map(a => a * 2)
    .reverse()
    .join(" "));

}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);