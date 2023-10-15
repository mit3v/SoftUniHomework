function nxnMatrix(n) {
    let result = [];
    for (i = 0; i < n; i++) {
        result.push(n);
    }
    for (i = 0; i < n; i++) {
       console.log(result.join(" "));
    }
}

nxnMatrix(3);
nxnMatrix(7);
