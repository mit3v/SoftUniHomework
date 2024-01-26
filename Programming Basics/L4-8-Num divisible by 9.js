function numOn9(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let sum = 0;

    
    for (i = a; i <= b; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    } console.log(`The sum: ${sum}`);

    for (i = a; i <= b; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }


}

numOn9(["100", "200"]);
