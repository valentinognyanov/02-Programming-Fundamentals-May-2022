function houseParty(arr) {
    let guests = [];

    for (let el of arr) {
        let currCommand = el.split(' ');
        if (currCommand.length === 3) {
            if (guests.includes(currCommand[0])) {
                console.log(`${currCommand[0]} is already in the list!`);
            } else {
                guests.push(currCommand[0]);
            }
        } else {
            if (!guests.includes(currCommand[0])) {
                console.log(`${currCommand[0]} is not in the list!`);
            } else {
                let index = guests.indexOf(currCommand[0]);
                guests.splice(index, 1);
            }
        }
    }
    console.log(guests.join('\n'));
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
console.log('_____________________');
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);