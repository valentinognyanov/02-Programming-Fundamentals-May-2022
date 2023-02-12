function storage(arr) {
    let result = new Map;

    for (let line of arr) {
        let [item, quantity] = line.split(' ');

        if (result.has(item)) {
            let oldQuantity = result.get(item);
            result.set(item, oldQuantity + Number(quantity));
        } else {
            result.set(item, Number(quantity));
        }
    }
    for (let [k, v] of result.entries()) {
        console.log(`${k} -> ${v}`);
    }
} 
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
console.log('_____________');
storage([
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);