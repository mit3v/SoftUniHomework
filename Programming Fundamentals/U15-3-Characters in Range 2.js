function charactersInRange(symbol1, symbol2) {

    let symbol1place = symbol1.charCodeAt();
    let symbol2place = symbol2.charCodeAt();

    let minSymbol = Math.min(symbol1place, symbol2place);
    let maxSymbol = Math.max(symbol1place, symbol2place);
    
    function printResult(min, max) {
        let result = [];
        for (i = min + 1; i < max; i++) {
            result.push(String.fromCharCode(i));
        }
       return (result.join(" "));
    }
    console.log(printResult(minSymbol, maxSymbol));

}

charactersInRange("a", "d");
charactersInRange("#", ":");
