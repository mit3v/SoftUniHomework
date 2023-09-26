function letters(n) {

    for (i = 1; i <= n; i++) {
        for (l = 1; l <= n; l++) {
            for (t = 1; t <= n; t++) {
                let letter1 = String.fromCharCode(96+i);
                let letter2 = String.fromCharCode(96+l);
                let letter3 = String.fromCharCode(96+t);
                console.log(letter1 + letter2 + letter3);

            }
        }
    }

}

letters(3);
letters(2);
