function vowel(input) { 
    let word = input[0];
    let n = word.length;
    let sum = 0;
    for (i = 0; i < n; i++) {
        switch (word.charAt(i)) {
            case "a":
            sum += 1; break;
            case "e":
            sum += 2; break;
            case "i":
            sum += 3; break;
            case "o":
            sum += 4; break;
            case "u":
            sum += 5; break;    
        }
    } 
    console.log(sum);
}

vowel(["hello"]);
vowel(["hi"]);
vowel(["bamboo"]);
vowel(["beer"]);
