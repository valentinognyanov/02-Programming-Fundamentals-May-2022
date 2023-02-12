function armies(input) {
    let armies = {};

    for (let line of input) {

        if (line.includes('arrives')) {
            let currLeader = line.split(' arrives').shift();

            if (!armies.hasOwnProperty(currLeader)) {
                armies[currLeader] = {};
            }

        } else if (line.includes(': ')) {
            let [currArmyLeader, army] = line.split(': ');
            let [currArmyName, currArmyCount] = army.split(', ');
            currArmyCount = Number(currArmyCount);

            if (armies.hasOwnProperty(currArmyLeader)) {

                if (!armies[currArmyLeader][currArmyName]) {
                    armies[currArmyLeader][currArmyName] = 0;
                }
                armies[currArmyLeader][currArmyName] += currArmyCount;
            }
        } else if (line.includes(' + ')) {
            let [name, count] = line.split(' + ');

            for (let l in armies) {

                if (armies[l].hasOwnProperty(name)) {
                    armies[l][name] += Number(count);
                }
            }
        } else if (line.includes('defeated')) {
            let currLeader = line.split(' defeated').shift();

            if (armies.hasOwnProperty(currLeader)) {
                delete armies[currLeader];
            }
        }
    }
    let sortedLead = Object.entries(armies).sort(sortingArmies);

    for (let [l, a] of sortedLead) {
        let sumOfArmyOfLeader = (obj) =>
            Object.values(a).reduce((a, b) => a + b);
        console.log(`${l}: ${sumOfArmyOfLeader(l)}`);

        let sortedArmies = Object.entries(a).sort((a, b) => b[1] - a[1]);

        for (let army of sortedArmies) {
            console.log(`>>> ${army[0]} - ${army[1]}`);
        }
    }

    function sortingArmies(a, b) {
        let [aArmyName, aArmyCount] = a;
        let [bArmyName, bArmyCount] = b;
        let sumArmyCountA = (obj) =>
            Object.values(aArmyCount).reduce((a, b) => a + b);
        let sumArmyCountB = (obj) =>
            Object.values(bArmyCount).reduce((a, b) => a + b);

        let result = sumArmyCountB(bArmyCount) - sumArmyCountA(aArmyCount);

        if (result === 0) {
            return aArmyName.localeCompare(bArmyName);
        }
        return result;
    }
}
armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);
console.log('______________');
armies([
    'Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423'
]);