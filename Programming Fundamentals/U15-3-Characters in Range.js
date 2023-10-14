function charactersInRange(symbol1, symbol2) {
    if (symbol2 < symbol1) {
        let s = symbol1;
        symbol1 = symbol2;
        symbol2 = s;
    }
    let symbol1place = symbol1.charCodeAt();
    let symbol2place = symbol2.charCodeAt();
    let result = [];
    for (i = symbol1place + 1; i < symbol2place; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(" "));

}

charactersInRange("a", "d");
charactersInRange("#", ":");
