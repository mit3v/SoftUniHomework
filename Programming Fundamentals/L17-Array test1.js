// function solveThis() {
//     let arr = [1, 2, 3, 4];
//     arr.push(5);
//     arr.push(6);
//     arr.push(7);
//     let result = arr.pop();
//     console.log(result); // -> това дава вече 7;
//     console.log(arr); // -> вече е [1, 2, 3, 4, 5, 6];
// }

// solveThis();

// function solveThis() {
//     let arr = [1, 2, 3, 4];
//     arr.unshift(10);
//     let result = arr.unshift(10);
//     console.log(result); // е това защо дава 6....
//     console.log(arr);
// }

// solveThis();

// function solveThis() {
//     let arr = [1, 2, 3, 4];
//     arr.unshift(10);
//     console.log(arr.shift()); // това печата само 10;
//     console.log(arr); // това печата [1, 2, 3 , 4];
// }

// solveThis();


// function solveThis() {
//     let arr = [1, 2, 3, 4,];

//     console.log(arr.includes(1, 0)); // това печата true;
//     console.log(arr.includes(1, 1)); // това печата false;
// }

// solveThis();


// function solveThis() {
//     let arr = [2, 1, 1, 2, 3, 4, 2];
//     console.log(arr.indexOf(2, 1));
// }

// solveThis();


// function solveThis() {

//     let arr = [5, 6, 7, 8, 9];
//     console.log(arr.slice(2));
//     console.log(arr.slice(-1));
//     console.log(arr);
// }

// solveThis();


// function solveThis() {
//     let arr = [[1,2], [3, 4], [5, 6]];
//     let newArr = arr.slice();
//     newArr[0].push(10);
//     console.log(arr[0]);
//     console.log(newArr[0]);
// }
// solveThis();

// function solveThis() {
//     let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(2))
//     console.log(arr);

// }
// solveThis();

// function solveThis() {
//     let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(2, 2, 20, 30, 40, 50));
//     console.log(arr);
// }
// solveThis();

// function solveThis() {
//     let arr = [5, 10, 15, 20, 25, 30];
//     let newArr = arr.splice(2, 3, "fifteen", "twenty", "twenty five", "something else", "even more");
//     console.log(arr);
//     console.log(newArr);

// }
// solveThis();


// function solveThis() {
//     let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(-4, 2));
//     console.log(arr);
// }
// solveThis();


function solveThis() {
    let arr = [5, 6, 7, 8, 9, 10];
    console.log(arr.splice(2, 0, 30, 40, 50));
    console.log(arr);
}
solveThis();