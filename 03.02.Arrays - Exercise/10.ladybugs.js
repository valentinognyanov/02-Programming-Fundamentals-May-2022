function ladybugs(arr) {
    let fieldSize = arr[0];
    let index = arr[1];
    index = index.split(' ');
    let command = arr.slice(2);
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    for (let i = 0; i < index.length; i++) {
        let position = Number(index[i]);
        if (position > field.length - 1) {
            continue;
        }
        field[position] = 1;
    }

    for (let i = 0; i < command.length; i++) {
        let currCommand = command[i];
        currCommand = currCommand.split(' ');
        let position = Number(currCommand[0]);
        let direction = currCommand[1];
        let flyCount = Number(currCommand[2]);

        if (field[position] === 0 || position < 0 || position > field.length - 1) {
            continue;
        }
        field[position] = 0;

        if (flyCount < 0) {
            direction = direction === "right" ? "left" : "right";
            flyCount = Math.abs(flyCount);
        }
        let nextPosition = 0;

        if (direction === "right") {
            nextPosition = position + flyCount;
        } else if (direction === "left") {
            nextPosition = position - flyCount;
        }

        while (field[nextPosition] === 1) {
            if (direction === "right") {
                nextPosition += flyCount;
            } else if (direction === "left") {
                nextPosition -= flyCount;
            }
        }
        if (nextPosition > field.length - 1 || nextPosition < 0) {
            continue;
        }
        field[nextPosition] = 1;
    }
    console.log(field.join(' '));
}
ladybugs([3, '0 1', '0 right 1', '2 right 1']);
console.log('______________________');
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
console.log('______________________');
ladybugs([5, '3', '3 left 2', '1 left -2']);