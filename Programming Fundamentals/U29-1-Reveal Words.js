function revealWords(input1, input2) {
    let wordsArr = input1.split(", ");
    for (word of wordsArr) {
    let sentenseArr = input2.split(" ");
        for (words of sentenseArr) {
            if (words[0] === "*") {
                if (words.length == word.length) {
                    let i = sentenseArr.indexOf(words);
                    sentenseArr[i] = word;
                }
                input2 = sentenseArr.join(" ");
            }
        }
    }

    console.log(input2);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');