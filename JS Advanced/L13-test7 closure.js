function createCounter() {
    let counter = 0;
    return {
        increment,
        decrement,
        print,
    }
    function increment() {
        return ++counter;
    }
    function decrement() {
        return --counter;
    }
    function print() {
        console.log(counter);
    }
}
let counter1 = createCounter();
let counter2 = createCounter();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.print();
