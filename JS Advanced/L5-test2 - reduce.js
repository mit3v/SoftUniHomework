let arr = [3, 8, 1, 5, 7, 4];

function reducerche(sum, num, i) {
    console.log(sum, num, i);
    return sum + num;
}

let result = arr.reduce(reducerche, 10);
console.log(result);