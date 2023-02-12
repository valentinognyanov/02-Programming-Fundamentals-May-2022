function arrayModifier(input) {
    let initialArray = input.shift().split(' ').map(Number);
    let index = 0;
    let command = input[index++];

    while (command !== 'end') {
        let commandToArr = command.split(' ');
        let currCommand = commandToArr[0];
        let firstIndex = Number(commandToArr[1]);
        let secondIndex = Number(commandToArr[2]);

        switch (currCommand) {
            case 'swap':
                let a = initialArray[firstIndex];
                let b = initialArray[secondIndex];
                initialArray[firstIndex] = b;
                initialArray[secondIndex] = a;
                break;
            case 'multiply':
                let res = Number(initialArray[firstIndex]) * Number(initialArray[secondIndex]);
                initialArray[firstIndex] = res;
                break;
            case 'decrease':
                for (let i = 0; i < initialArray.length; i++) {
                    initialArray[i] -= 1;
                }
                break;
        }
        command = input[index++];
    }
    console.log(initialArray.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
console.log('_____________');
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);