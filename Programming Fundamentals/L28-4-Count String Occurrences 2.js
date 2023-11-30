function countOccurrences(text, word) {
    let wordsArr = text.split(" ");
    let arr = wordsArr.filter(a => a == word);
    console.log(arr.length);
}
countOccurrences('This is a word and it also is a sentence', 'is');
countOccurrences('softuni is great place for learning new programming languages', 'softuni');

