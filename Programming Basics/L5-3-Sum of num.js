function sumOfNum(input) {
    let num1 = Number(input[0]);
    let index = 1;
    let sum = 0;
    while (true) {
        sum += Number(input[index]);
        index++;
        if(sum >= num1) {break;}
    }
    console.log(sum);

}

sumOfNum(["100", "10", "20", "30", "40"]);
sumOfNum(["20", "1", "2", "3", "4", "5", "6"]);