function shootForTheWin(input) {
    let shootTargets = input.shift().split(' ').map(Number);
    let index = 0;
    let command = input[index++];
    let counter = 0;

    while (command !== 'End') {
        let currIndex = Number(command);
        if (shootTargets.length - 1 < currIndex) {
            command = input[index++];
            continue;
        }
        let a = shootTargets[currIndex];

        for (let i = 0; i < shootTargets.length; i++) {
            if (shootTargets[i] === -1) {
                continue;
            }
            if (a < shootTargets[i]) {
                shootTargets[i] -= a;
            } else {
                shootTargets[i] += a;
            }
        }
        shootTargets[currIndex] = -1;
        counter++;
        command = input[index++];
    }
    console.log(`Shot targets: ${counter} -> ` + shootTargets.join(' '));
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
console.log('______________');
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);