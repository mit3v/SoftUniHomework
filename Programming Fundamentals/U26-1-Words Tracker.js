function wordsTracker(input) {
    let tokens = input.shift();
    let tokensArr = tokens.split(" ");
    let searchingWordsObj = {};
    for (el of tokensArr) {
        searchingWordsObj[el] = 0;
    }
    for (el of input) {
        if (el in searchingWordsObj) {
            searchingWordsObj[el] += 1;
        }
    }
    let searchingWordsArr = Object.entries(searchingWordsObj);
    searchingWordsArr.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    let sortedObj = {};
    for ([word, num] of searchingWordsArr) {
        sortedObj[word] = num;
    }
    for ([word, num] of Object.entries(sortedObj)) {
        console.log(`${word} - ${num}`);
    }
}
wordsTracker([    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
