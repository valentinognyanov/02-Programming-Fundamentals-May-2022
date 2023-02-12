function lettersChangeNumbers(str) {
    let strArr = str.split(' ');
    let sum = 0;

    for (let elements of strArr) {
        elements = elements.split('');

        if (elements.length === 0) {
            continue;
        }

        let firstLetter = elements.shift();
        let lastLetter = elements.pop();
        let number = Number(elements.join(''));
        let firstLetterInAscii = Number(firstLetter.charCodeAt());
        let lastLetterInAscii = Number(lastLetter.charCodeAt());

        if (firstLetterInAscii >= 65 && firstLetterInAscii <= 90) {
            sum += number / (firstLetterInAscii - 64);
        } else if (firstLetterInAscii >= 97 && firstLetterInAscii <= 122) {
            sum += number * (firstLetterInAscii - 96);
        }
        if (lastLetterInAscii >= 65 && lastLetterInAscii <= 90) {
            sum -= lastLetterInAscii - 64;
        } else if (lastLetterInAscii >= 97 && lastLetterInAscii <= 122) {
            sum += lastLetterInAscii - 96;
        }
    }
    console.log(sum.toFixed(2));
}
lettersChangeNumbers('A12b s17G');
console.log('_____________');
lettersChangeNumbers('P34562Z q2576f   H456z');
console.log('_____________');
lettersChangeNumbers('a1A');