function asciiSumator(input) {
    let startToAscii = Math.min(Number(input[0].charCodeAt()), Number(input[1].charCodeAt()));
    let endToAscii = Math.max(Number(input[0].charCodeAt()), Number(input[1].charCodeAt()));
    let symbols = input[2];
    let sum = 0;

    for (let i = 0; i < symbols.length; i++) {
        let currSymbolToAscii = symbols[i].charCodeAt();

        if (currSymbolToAscii > startToAscii && currSymbolToAscii < endToAscii) {
            sum += Number(currSymbolToAscii);
        }
    }
    console.log(sum);
}
asciiSumator(['.', '@', 'dsg12gr5653feee5']);
console.log('__________');
asciiSumator(['?', 'E', '@ABCEF']);
console.log('__________');
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);