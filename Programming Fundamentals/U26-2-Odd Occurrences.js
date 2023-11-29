function oddOccurrences(input) {
    let inputArr = input.split(" ");
    inputArr = inputArr.map(a => a.toLowerCase());
    let wordsObj = {};
    for (word of inputArr) {
        if (!wordsObj.hasOwnProperty(word)) {
            wordsObj[word] = 0;
        } wordsObj[word]++;
    }
    // console.log(wordsObj);  // {1: 1, 3: 2, 5: 1, java: 2, c#: 3, php: 3}

    let result = "";
    for (let key in wordsObj) {
        if (wordsObj[key] % 2 != 0) {
            result += key + " ";
        }
    }
   console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
