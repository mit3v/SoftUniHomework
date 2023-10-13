function solve1() {
    let sum = (a, b) => a + b;
    let res = sum(3, 5);
    return res;
}
console.log(solve1());

function solve2() {
    let sum = a => a * 2;
    let res = sum(3);
    return res;
}
console.log(solve2());

function solve3() {
    let sum = (a, b) => {
      return a + b
    }
    let res = sum(3, 5);
    return res;
}
console.log(solve3());

function solve4() {
    let sum = arr => arr.length;
    let res = sum([3, 5, 5, 8]);
    return res;
}
console.log(solve4());