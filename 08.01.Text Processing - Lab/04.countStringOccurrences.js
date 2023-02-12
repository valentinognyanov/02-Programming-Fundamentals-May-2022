function countStringOccurrences(input, word) {
    let splited = input.split(' ');
    let counter = 0;

    for (let w of splited) {
        if (w === word) {
            counter++;
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');
console.log('______________');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');