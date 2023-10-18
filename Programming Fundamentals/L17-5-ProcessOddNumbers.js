function processOddNumbers(arr) {

    let arrOdd = arr.filter((a, i) => i % 2 != 0);
    let arrOddDouble = arrOdd.map(a => a * 2);
    
    console.log(arrOddDouble.reverse().join(" "));

}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);