function aMinerTask(input) {
    let result = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = input[i + 1];

        if (result.has(resource)) {
            let oldQuantity = result.get(resource);
            result.set(resource, oldQuantity + Number(quantity));
        } else {
            result.set(resource, Number(quantity));
        }
    }
    for (let [k, v] of result.entries()) {
        console.log(`${k} -> ${v}`);
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
console.log('_______________');
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);