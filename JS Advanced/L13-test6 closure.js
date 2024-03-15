function createCounter() {
    let counter = 0;
    return increment;
    function increment() {
        return ++counter;
    }
}
let firstCounter = createCounter();
let sCounter = createCounter();
console.log(firstCounter());
console.log(firstCounter());
console.log(firstCounter());
console.log("----");
console.log(sCounter());
console.log(sCounter());
console.log("----");
console.log(firstCounter());
console.log(firstCounter());
console.log("----");
console.log(sCounter());
