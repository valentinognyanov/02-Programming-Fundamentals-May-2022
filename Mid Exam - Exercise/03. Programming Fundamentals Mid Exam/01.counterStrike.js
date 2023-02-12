function counterStrike(input) {
    let index = 0;
    let energy = Number(input[index++]);
    let command = input[index++];
    let winCounter = 0;

    while(command !== 'End of battle') {
        let currDistance = Number(command);
        if(energy >= currDistance) {
            energy -= currDistance;
            winCounter++;
        } else {
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`);
            break;
        }
        if(winCounter % 3 === 0) {
            energy += winCounter;
        }
        command = input[index++];
    }
    if(command === 'End of battle') {
        console.log(`Won battles: ${winCounter}. Energy left: ${energy}`);
    }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
console.log('______________');
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);