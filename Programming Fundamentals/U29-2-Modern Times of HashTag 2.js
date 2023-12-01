function modernTimes(input) {
    let arr = input.split(" ");
    let hashWords = arr.filter(word => word[0] === "#").filter(word => word.length > 1); // word.startsWith("#");
    for (word of hashWords) {
        word = word.slice(1);
        let isTrue = true;
        for (letter of word) {
            if (!/[A-Za-z]/.test(letter)) {
                isTrue = false; break;
            }
        }
        if (isTrue) {
            console.log(word);
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');