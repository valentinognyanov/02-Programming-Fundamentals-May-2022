function starEnigma(data) {
    let attackedPlanets = [];
    let destroiedPlanets = [];

    for (let i = 0; i < Number(data[0]); i++) {
        let currLine = data[i + 1];
        let regex = /[star]/gi;
        let valid = regex.exec(currLine);
        let count = 0;
        let result = [];

        while (valid !== null) {
            count++;
            valid = regex.exec(currLine);
        }
        currLine = currLine.split('');

        for (let el of currLine) {
            let elToAscii = el.charCodeAt();
            let newElAscii = elToAscii - count;
            let newEl = String.fromCharCode(newElAscii);
            result.push(newEl);
        }
        result = result.join('');
        let newRegex = /\@(?<planetName>[A-Za-z]+)([^@\-!:>])*\:(?<population>\d+)([^@\-!:>])*\!(?<typeAttack>[AD])\!([^@\-!:>])*(->(?<soldierCount>\d+))/gi;
        let newValid = newRegex.exec(result);

        while (newValid !== null) {
            let atkOrDest = newValid.groups.typeAttack;
            let name = newValid.groups.planetName;

            if (atkOrDest === 'A') {
                attackedPlanets.push(name);
            } else if (atkOrDest === 'D') {
                destroiedPlanets.push(name);
            }
            newValid = newRegex.exec(result);
        }
    }
    let sorterAttacked = attackedPlanets.sort((a, b) => a.localeCompare(b));
    let sortedDestroyed = destroiedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${sorterAttacked.length}`);

    if (sorterAttacked.length > 0) {

        for (let el of sorterAttacked) {
            console.log(`-> ${el}`);
        }
    }
    console.log(`Destroyed planets: ${sortedDestroyed.length}`);

    if (sortedDestroyed.length > 0) {

        for (let el of sortedDestroyed) {
            console.log(`-> ${el}`);
        }
    }
}
starEnigma([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
console.log('______________');
starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);