function revealWords(words, str) {
    let wordsArr = words.split(', ');
    let strArr = str.split(' ');

    for (let el of wordsArr) {

        for (let word of strArr) {

            if (word.includes('*') && word.length === el.length) {
                str = str.replace(word, el);
            }
        }
    }
    console.log(str);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');
console.log('_____________');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');