function outer() {

    let count = 5;
    let name = "Stan";

    function func(a, b) {
        console.log(name);
        return count + a + b;
    }
    
    return func();

}

console.log(outer(3, 5));
console.log(outer());
