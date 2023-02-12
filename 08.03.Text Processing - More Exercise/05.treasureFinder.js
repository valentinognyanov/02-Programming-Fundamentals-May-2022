function treasureFinder(input) {
    let keys = input[0].split(' ').map(Number);
    let index = 1;
    let command = input[index++];
    let result = [];
    let currentHiddenMessage = '';
    let ind = 0;

    while (command !== 'find') {
        let currString = command;

        for (let symbol of currString) {
            let symbolAscii = Number(symbol.charCodeAt());

            if (ind === keys.length) {
                ind = 0;
            }
            let newSymbolAscii = symbolAscii - keys[ind++];
            let newSymbol = String.fromCharCode(newSymbolAscii);
            currentHiddenMessage += `${newSymbol}`;
        }
        ind = 0;
        result.push(currentHiddenMessage);
        currentHiddenMessage = '';
        command = input[index++];
    }
    for (let messages of result) {
        messages = messages.split('&');
        let coord = messages[2].split('<');
        let coordinates = coord[1].split('>');
        let treasure = messages[1];
        console.log(`Found ${treasure} at ${coordinates[0]}`);
    }
}
treasureFinder([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
]);
// console.log(['1 4 2 5 3 2 1',
// 'Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC',
// "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
// "'stj)>34W68Z@",
// 'find']
// );