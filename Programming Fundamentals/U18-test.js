// function solve() {
//     let arr = [1, 2, 1, 1, 1];
//     arr.splice(-2, 5);
//     console.log(arr);
// }
// solve();


// function solve() {
//     let arr = [7, 8, 9, 0];
//     arr.splice(2, 0, 5);
//     console.log(arr);
// }
// solve();


// function solve() {
//     let arr = [7, 8, 9, 0];
//     let num1 = arr.shift();
//     arr.push(num1);
//     console.log(arr);
// }
// solve();


// function solve() {
//     let arr = [5, 2, 6, 3, 5];
//     let arrNew = [];
//     for (i = 0; i < arr.length; i += 2) {
//        let numToPush = Number(arr[i]) + Number(arr[i + 1]);
//        if (isNaN(numToPush)) {
//         arrNew.push(Number(arr[i]))
//        } else {
//         arrNew.push(numToPush);}
//     }
//     console.log(arrNew);

// }
// solve();



function solve() {
    let arr = [2, 5, 8, 3, 6, 8, 2, 5, 1, 3];
    let newArr = arr.splice(2, 2);
    let newArr2 = newArr.map(a => a - 3);
    arr.splice(2, 0, newArr2);
    console.log(newArr2);
    console.log(newArr);
    console.log(arr);
}
solve();