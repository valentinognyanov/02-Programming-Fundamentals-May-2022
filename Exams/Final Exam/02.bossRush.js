function bossRush(data) {
    let regex = /(\|)(?<bossName>[A-Z]{4,})\1:(\#)(?<title>[A-Za-z]+ [A-Za-z]+)\3/g;
    let n = Number(data.shift());
    
    for(let i = 0; i < n; i++) {
        let currText = data[i];
        let match = regex.exec(currText);

        if(match) {
            let bossName = match.groups['bossName'];
            let title = match.groups['title'];
            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}
bossRush([
    '3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
]);
console.log('______________');
bossRush([
    '3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
]);