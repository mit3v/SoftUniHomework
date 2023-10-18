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


// function solveThis() {
//     let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(2, 0, 30, 40, 50));
//     console.log(arr);
// }
// solveThis();


// function solveThis() {
//     let arr = ["1", "2", "3", "4", "5"];
//     // for (i = 0; i < arr.length; i++) {
//     //     arr[i] = Number(arr[i]);
//     // }
//     // arr.map((a) => console.log(a));


//     // let arrNumber = arr.map((a) => Number(a));
//     // console.log(arr);
//     // console.log(arrNumber);



//     let arrNumber = arr.map((a) => Number(a) + 1);
//     console.log(arrNumber);
// }

// solveThis();


// function solveThis() {
//     let arr = ["Gosho", "Tosho", "Pesho"];
//     // let newArr = arr.map((a) => a + 1);
//     let newArr = arr.map(function(a) {
//         return "new" + a;});
//     console.log(newArr);
// }
// solveThis();

// function solveThis() {
//     let arr = ["Gosho", "Tosho", "Pesho"];
//     let newArr = arr.map(function (a, i, self) {
//         console.log(self);
//         return "new " + a;
//     });
//     console.log(newArr);
// }
// solveThis();

// function solveThis() {
//     let arr = ["1", "2", "3", "4", "5"];
//     let newArr = arr.map(Number);
//     console.log(newArr);
// }
// solveThis();

// function solve() {

//     let arr = ["one", "two", "three", "four", "five"];
//     let arrLengths = arr.map(a => a.length);
//     console.log(arrLengths);
// }
// solve();


// function solve() {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8];

//     let newArr = arr.filter(a => a > 4);
//     console.log(arr);
//     console.log(newArr);

// }
// solve();


// function solve() {
//     let arr = ["aa","aaa", "aaaaa", "aaaaaaaaaaa"];
//     let newArr = arr.filter(a => a.length > 4);
//     console.log(arr);
//     console.log(newArr.reverse());

// }
// solve();


// function solve() {
//     let arr = [1, 5, 7, 3, 8, 10, 20, 30];

//     console.log(arr.sort((a, b) => b - a));
// }
// solve();



// function solve() {
//     let arr = ["Gosho", "Pesho", "Stamat"];

//     arr.sort((a, b) => a.localeCompare(b));
//     console.log(arr);

//     arr.sort((a, b) => b.localeCompare(a));
//     console.log(arr);
// }
// solve();


// function solve() {
//     let arr = ["aw", "aas", "ac"];

//     arr.sort((a, b) => a.localeCompare(b));
//     console.log(arr);
// }
// solve();


function solve() {
    let arr = ["aas", "ac", "Aaw"];

    // arr.sort((a, b) => a.localeCompare(b)); // ['aas', 'Aaw', 'ac'];
    arr.sort(); // ['Aaw', 'aas', 'ac'];
    console.log(arr);
}
solve();