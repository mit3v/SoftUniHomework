function rightPlace(word, symbol, match) {
    let newWord = word.replace("_", symbol);
    let result = newWord === match ? "Matched" : "Not Matched";
    console.log(result);
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
