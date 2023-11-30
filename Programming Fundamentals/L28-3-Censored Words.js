function censoredWords(text, word) {
    let wordLength = word.length;
    let newText = text.replaceAll(word, "*".repeat(wordLength));
    console.log(newText);
    
}
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');
