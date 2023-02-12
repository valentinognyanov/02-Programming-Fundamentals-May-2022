function theLift(arr) {
    let people = Number(arr.shift());
    let stateOfTheLift = arr.shift().split(' ');
    let freeSpaceCounter = 0;

    for (let i = 0; i < stateOfTheLift.length; i++) {
        let currWagon = Number(stateOfTheLift[i]);

        if (currWagon < 4) {
            if (people >= 4) {
                if (currWagon !== 0) {
                    people -= 4 - currWagon;
                    currWagon = 4;
                    stateOfTheLift[i] = currWagon;
                    freeSeats = false;
                } else {
                    currWagon = 4;
                    people -= currWagon;
                    stateOfTheLift[i] = currWagon;
                }
            } else {
                currWagon += people;
                people = 0;
                stateOfTheLift[i] = currWagon;
                freeSeats = true;
            }
        }
    }
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(`${stateOfTheLift.join(' ')}`);
    } else {
        for (let el of stateOfTheLift) {
            if (el === 4) {
                freeSpaceCounter++;
            }
        }
        if (stateOfTheLift.length !== freeSpaceCounter) {
            console.log("The lift has empty spots!");
            console.log(`${stateOfTheLift.join(' ')}`);
        } else {
            console.log(`${stateOfTheLift.join(' ')}`);
        }
    }
}
theLift(["15", "0 0 0 0 0"]);
console.log('_______________');
theLift(["20", "0 2 0"]);