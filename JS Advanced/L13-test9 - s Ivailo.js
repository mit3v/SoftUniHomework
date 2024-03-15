function outer(a, b) {
    let sum = a + b;
    return inner(5);
    function inner(c) {
        sum += c;
        return inner2(2);
        function inner2(d) {
            sum = sum / d;
            return sum;
        }
    }

}
console.log(outer(1, 2));


console.log("----------");

function solve() {
    return (a, b) => a + b;
}

let result = solve()(6, 11);
console.log(result);

console.log("- - - - - -");

// function first() {
//     return second;
//     function second() {
//         return third;
//         function third() {
//             return 100;
//         }
//     }
// }
// function first() {
//     return function second() {
//         return function third() {
//             return 100;
//         }
//     }
// }
// let ress = first()()();
// console.log(ress);

// function first() {
//     return second();
//     function second() {
//         return third();
//         function third() {
//             return 100;
//         }
//     }
// }
// let ress = first();
// console.log(ress);

function first() {
    return second();
    function second() {
        return third;
        function third() {
            return 100;
        }
    }
}
let ress = first()();
console.log(ress);

