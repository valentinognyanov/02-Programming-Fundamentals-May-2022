function movingTarget(input) {
    let targets = input.shift().split(' ').map(Number);
    let index = 0;
    let command = input[index++];

    while (command !== 'End') {
        let commandToArr = command.split(' ');
        let currCommand = commandToArr[0];
        let currIndex = Number(commandToArr[1]);

        switch (currCommand) {
            case 'Shoot':
                let power = Number(commandToArr[2]);
                if (currIndex > targets.length - 1 || currIndex < 0) {
                    command = input[index++];
                    continue;
                }
                if (targets[currIndex] >= power) {
                    targets[currIndex] -= power;
                } else {
                    targets[currIndex] = 0;
                }
                break;
            case 'Add':
                let value = Number(commandToArr[2]);
                if (currIndex > targets.length - 1 || currIndex < 0) {
                    console.log('Invalid placement!');
                } else {
                    targets.splice(currIndex, 0, value);
                }
                break;
            case 'Strike':
                let radius = Number(commandToArr[2]);
                let startInd = currIndex - radius;
                let delCount = radius + radius + 1;
                let endInd = currIndex + radius;

                if (startInd >= 0 && endInd < targets.length - 1) {
                    targets.splice(startInd, delCount);
                } else {
                    console.log('Strike missed!');
                    command = input[index++];
                    continue;
                }
                break;
        }
        if (targets.includes(0)) {
            let ind = targets.indexOf(0);
            targets.splice(ind, 1);
        }
        command = input[index++];
    }
    if (command === 'End') {
        console.log(targets.join('|'));
    }
}
movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
console.log('______________');
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);