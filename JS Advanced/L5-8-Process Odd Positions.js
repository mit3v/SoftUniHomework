function solve(arr) {

    // console.log(arr.filter((e, i) => i % 2 != 0).map(a => a * 2).reverse().join(" "));

    return arr.filter((e, i) => i % 2 != 0).map(a => a * 2).reverse().join(" ");


}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);