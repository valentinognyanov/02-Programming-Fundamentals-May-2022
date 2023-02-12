function replaceRepeatingChars(str) {
    let startIndex = 1;
    let endIndex = str.length;
    let text = str[0];

    while (startIndex < endIndex) {
        if (str[startIndex] !== str[startIndex - 1]) {
            text += str[startIndex];
        }
        startIndex++;
    }
    console.log(text);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log('__________');
replaceRepeatingChars('qqqwerqwecccwd');