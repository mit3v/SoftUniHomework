function nxnMatrix(n) {
    let result = "";
    for (i = 0; i < n; i++) {
        result = "";
        for (j = 0; j < n; j++) {
            result += n + " ";
        }
        console.log(result);
    }

}

nxnMatrix(3);
nxnMatrix(7);
