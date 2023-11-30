function countOccurrences(text, word) {
    let wordsArr = text.split(" ");
    let counter = 0;
    for (el of wordsArr) {
        if (el === word) {
            counter++;
        }
    }
    console.log(counter);
}
countOccurrences('This is a word and it also is a sentence', 'is');
countOccurrences('softuni is great place for learning new programming languages', 'softuni');

