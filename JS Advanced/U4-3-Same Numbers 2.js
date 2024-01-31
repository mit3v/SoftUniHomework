function sameNumbers(a) {
    let isTrue = true;
    let sum = 0
    a.toString()
        .split("")
        .map((x, i, self) => {
            if (x !== self[0]) {
                isTrue = false;
            }
            return sum += Number(x);
        })

    console.log(isTrue);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);