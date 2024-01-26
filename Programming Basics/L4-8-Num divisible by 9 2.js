function numOn9(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let sum = 0;
    let str = "";

    
    for (i = a; i <= b; i++) {
        if (i % 9 === 0) {
            sum += i; 
            str += i + "\n";
        }
    } console.log(`The sum: ${sum}`);
    console.log(str)


}

numOn9(["100", "200"]);
