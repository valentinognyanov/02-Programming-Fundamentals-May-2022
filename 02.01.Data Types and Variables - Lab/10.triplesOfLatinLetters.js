function triplesOfLatinLetters(n) {
    let nToNumber = Number(n);
    for(let i = 97; i < 97 + nToNumber; i++) {
        for(let j = 97; j < 97 + nToNumber; j++) {
            for(let k = 97; k < 97 + nToNumber; k++) {
                console.log(String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k));
            }
        }
    }
}
triplesOfLatinLetters('3');