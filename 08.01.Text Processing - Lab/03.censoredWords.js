function censoredWords(input, word) {

    while (input.indexOf(word) >= 0) {
        input = input.replace(word, '*'.repeat(word.length));
    }
    console.log(input);
}
censoredWords('A small sentence with some words', 'small');
console.log('______________');
censoredWords('Find the hidden word', 'hidden');