function rightPlace(string1, char, string2) {
    let res = '';

    for (let i = 0; i <= string1.length - 1; i++) {
        let currChar = string1[i];
        if (currChar === '_') {
            res += char;
        } else {
            res += currChar;
        }
    }
    if (res === string2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'StrIng');