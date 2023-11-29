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

    let wordsObjArr = Object.entries(wordsObj).filter(a => (a[1] % 2 != 0)).sort((a, b) => b[0].localeCompare(a[0]));  // [["1",1],["5",1],["c#",3],["php",3]] ; [["php",3],["c#",3],["5",1],["1",1]];
    let result = "";
    for (arr of wordsObjArr) {
        result += arr[0] + " ";
    }
   
    console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
