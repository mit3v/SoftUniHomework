let x = 10;

function countdown() {
    console.log(x);

    if (x > 0) {
        x--;
        countdown();
    }
}

countdown();