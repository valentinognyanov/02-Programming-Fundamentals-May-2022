function serializeString(input) {
    let inputToArr = input[0].split('');
    let symbolsAndIndexes = {};

    for (let i = 0; i < inputToArr.length; i++) {

        if (!symbolsAndIndexes.hasOwnProperty(inputToArr[i])) {
            symbolsAndIndexes[inputToArr[i]] = `${i} `;
        } else {

            if (i === inputToArr.length - 1) {
                symbolsAndIndexes[inputToArr[i]] += `${i}`;
            } else {
                symbolsAndIndexes[inputToArr[i]] += `${i} `;
            }
        }
    }
    let values = Object.values(symbolsAndIndexes);
    let newValues = [];

    for (let el of values) {

        if (el.endsWith(' ')) {
            el = el.trim();
        }
        newValues.push(el);
    }
    let indexResult = [];
    for (let line of newValues) {
        line = line.split(' ').join('/');
        indexResult.push(line);
    }
    let keys = Object.keys(symbolsAndIndexes);
    for (let i = 0; i < keys.length; i++) {
        console.log(`${keys[i]}:${indexResult[i]}`);
    }
}
serializeString(["abababa"]);
console.log('______________');
serializeString(["avjavamsdmcalsdm"]);