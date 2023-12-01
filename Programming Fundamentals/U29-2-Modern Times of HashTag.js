function modernTimes(input) {
    let arr = input.split(" ");
    for (word of arr) {
        if (word[0] === "#") {
            let isTrue = false;
            for (i = 1; i < word.length; i++) {
                if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90 || word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122) {
                    isTrue = true;
                }
            }
            if (isTrue) {
                console.log(word.substring(1));
            }
        }

    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');