function revealWords(input1, input2) {
    let wordsArr = input1.split(", ");
    let result = input2;
    for (word of wordsArr) {
        let searching = "*".repeat(word.length);
        let index = input2.indexOf(searching);
        result = result.slice(0, index) + word + result.slice(index + word.length, result.length);
    }

    console.log(result);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');