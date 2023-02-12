function piccolo(arr) {
    let result = new Set();

    for (let car of arr) {
        let [direction, carNumber] = car.split(', ');

        switch (direction) {
            case 'IN':
                result.add(carNumber);
                break;
            case 'OUT':
                result.delete(carNumber);
                break;
        }
    }
    let sortedResult = Array.from(result.values()).sort((a, b) => {
        return a.localeCompare(b);
    });

    if (result.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sortedResult.join('\n'));
    }
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
console.log('____________');
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);