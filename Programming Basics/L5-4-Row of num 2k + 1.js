function rowOfNum(input) {
    let n = Number(input[0]);
    let k = 0;
    while(true) {
        k = 2 * k + 1;
        if(k > n) {break;}
        console.log(k);

    }

}
rowOfNum(["3"]);
rowOfNum(["17"]);