function race(input) {
    let nameMap = new Map();
    let racers = input.shift().split(', ');
    racers.forEach(person => {
        nameMap.set(person, 0);
    });
    let letterPattern = /[A-Za-z]+/gm;
    let digitsPattern = /\d/gm;

    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'end of race') {
            break;
        }
        let name = input[i].match(letterPattern).join('');
        let distance = input[i].match(digitsPattern).reduce((a, b) => {
            return Number(a) + Number(b);
        });
        if (nameMap.has(name)) {
            let privDistance = Number(nameMap.get(name));
            privDistance += distance;
            nameMap.set(name, privDistance);
        }
    }
    let sortedNames = Array.from(nameMap).sort((a, b) => {
        return b[1] - a[1];
    });
    let topThree = sortedNames.slice(0, 3);
    console.log(`1st place: ${topThree[0][0]}`);
    console.log(`2nd place: ${topThree[1][0]}`);
    console.log(`3rd place: ${topThree[2][0]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
console.log('______________');
race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);