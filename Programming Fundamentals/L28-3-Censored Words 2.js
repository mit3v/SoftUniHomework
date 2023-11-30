function censoredWords(text, word) {
    let censored = "*".repeat(word.length);
    let newText = text;
    while (newText.includes(word)) {
    newText = newText.replace(word, censored);
    }
    console.log(newText);
}
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');
censoredWords('hello you there hello hello', 'hello');

