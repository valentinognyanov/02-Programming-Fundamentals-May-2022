function partyTime(arr) {
    let vipGuests = [];
    let regularGuest = [];
    let isParty = false;

    for (let line of arr) {
        if (line === 'PARTY') {
            isParty = true;
            continue;
        }
        let firstChar = line[0];
        if (!isParty) {
            if (isNaN(firstChar)) {
                regularGuest.push(line);
            } else {
                vipGuests.push(line);
            }
        } else {
            if (isNaN(firstChar)) {
                let i = regularGuest.indexOf(line);
                regularGuest.splice(i, 1);
            } else {
                let i = vipGuests.indexOf(line);
                vipGuests.splice(i, 1);
            }
        }
    }
    let size = vipGuests.length + regularGuest.length;
    console.log(size);

    for (let code of vipGuests) {
        console.log(code);
    }
    for (let code of regularGuest) {
        console.log(code);
    }
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
console.log('_______________');
partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);