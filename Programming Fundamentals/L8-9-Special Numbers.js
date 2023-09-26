function specialNumbers(num) {

    let numAsString = String(num);
    for (i = 1; i <= num; i++) {
    let sum = 0;
    let isTrue = "";
    for (n = 0; n < String(i).length; n++) {
        let iAsString = String(i);
        let add = Number(iAsString[n]);
        sum += add;
    } 
    sum == 5 || sum == 7 || sum == 11 ? isTrue = "True" : isTrue = "False";
    console.log(`${i} -> ${isTrue}`);
}

}

specialNumbers(15);
