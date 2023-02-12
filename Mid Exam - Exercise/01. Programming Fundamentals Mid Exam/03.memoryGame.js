function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let movesCounter = 0;
    let index = 0;
    let command = input[index++];

    while (command !== 'end') {
        if (sequence.length === 0) {
            break;
        }
        movesCounter++;
        let currIndex = command.split(' ');
        let firstIndex = Number(currIndex[0]);
        let secondIndex = Number(currIndex[1]);

        if (firstIndex < 0 || firstIndex >= sequence.length || firstIndex === secondIndex ||
            secondIndex < 0 || secondIndex >= sequence.length) {
            let ind = Math.trunc(sequence.length / 2);
            let element = `-${movesCounter}a`;
            sequence.splice(ind, 0, element, element);
            console.log("Invalid input! Adding additional elements to the board");
        } else {
            let firstNumber = sequence[firstIndex];
            let secondNumber = sequence[secondIndex];

            if (firstNumber === secondNumber) {
                sequence.splice(firstIndex, 1);
                secondIndex = sequence.indexOf(secondNumber);
                sequence.splice(secondIndex, 1);
                console.log(`Congrats! You have found matching elements - ${firstNumber}!`);
            } else if (firstNumber !== secondNumber) {
                console.log('Try again!');
            }
        }
        command = input[index++];
    }
    if (sequence.length === 0 || sequence.length === 1) {
        console.log(`You have won in ${movesCounter} turns!`);
    } else {
        console.log('Sorry you lose :(');
        console.log(`${sequence.join(' ')}`);
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]);
console.log('________________');
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"]);
console.log('________________');
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"]);