function stringSubstring(word, str) {
    let wordLower = word.toLowerCase();
    let strArr = str.split(' ');

    for (let el of strArr) {
        el = el.toLowerCase();

        if (el === wordLower) {
            console.log(wordLower);
            return;
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript', 'JavaScript is the best programming language');
console.log('_____________');
stringSubstring('python', 'JavaScript is the best programming language');