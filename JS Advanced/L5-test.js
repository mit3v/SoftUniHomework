let arr = [1, 5, 4, 11, 7, 3];
console.log(arr);
arr.sort();
console.log(arr);
function compare(a, b) {
    return (a - b);
}
arr.sort(compare);
console.log(arr);

console.log(arr.slice(0, 2)); 
console.log(arr.slice(0, -2));
console.log(arr.slice(-2));
console.log(arr.slice(-4, 5));

let arr1 = [3, 5, 1, 7, 6, 8];
arr1.forEach((c, i, theArr) => {
    console.log(i, c, theArr);
});

console.log(arr1.find(e => e % 2 == 0));
console.log(arr1.findIndex(e => e % 2 == 0));

console.log(arr1.every(e => e % 2 == 0));

console.log(arr1.filter(e => e % 2 == 0));

let arr3 = [3, 4, 5, 6];
let reducer1 = (accumulator1, currentValue) => accumulator1 + currentValue;
console.log(arr3.reduce(reducer1));
console.log(arr3.reduce(reducer1, 10));
let reducedArr3 = arr3.reduce((a, current) => a + current);
console.log(reducedArr3);

let arr5 = [[1, 2], [7, 8], [10, 11]];
let arr6 = arr5.flat();
console.log(arr6);

