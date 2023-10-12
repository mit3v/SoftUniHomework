let x = 5;

function countdown() {
    console.log(x);

    if (x > 0) {
        x--;
        countdown();
    }
}

let result = countdown();

console.log(result);
