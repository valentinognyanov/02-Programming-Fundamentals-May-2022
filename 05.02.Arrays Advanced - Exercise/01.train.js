function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let capacity = +input.shift();

    for (let i = 0; i < input.length; i++) {
        let currCommand = input[i].split(' ');
        if (currCommand[0] === 'Add') {
            wagons.push(currCommand[1]);
        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (Number(currCommand[0]) + wagons[j] <= capacity) {
                    wagons[j] += Number(currCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
console.log('________________');
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);