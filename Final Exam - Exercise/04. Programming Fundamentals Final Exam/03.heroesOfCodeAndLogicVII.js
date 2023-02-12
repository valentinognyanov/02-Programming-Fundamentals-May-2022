function heroesOfCodeAndLogicVII(data) {
    let n = Number(data.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let [currHero, currHP, currMP] = data.shift().split(' ');
        currHP = Number(currHP);
        currMP = Number(currMP);
        heroes[currHero] = {
            'HP': currHP,
            'MP': currMP
        };
    }
    let line = data.shift();

    while (line !== 'End') {
        let command = line.split(' - ').shift();
        let currHeroName = line.split(' - ')[1];

        switch (command) {
            case 'CastSpell':
                let neededMP = Number(line.split(' - ')[2]);
                let spellName = line.split(' - ')[3];

                if (heroes[currHeroName]['MP'] >= neededMP) {
                    heroes[currHeroName]['MP'] -= neededMP;
                    console.log(`${currHeroName} has successfully cast ${spellName} and now has ${heroes[currHeroName]['MP']} MP!`);
                } else {
                    console.log(`${currHeroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(line.split(' - ')[2]);
                let attacker = line.split(' - ')[3];
                heroes[currHeroName]['HP'] -= damage;

                if (heroes[currHeroName]['HP'] > 0) {
                    console.log(`${currHeroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[currHeroName]['HP']} HP left!`);
                } else {
                    delete heroes[currHeroName];
                    console.log(`${currHeroName} has been killed by ${attacker}!`);
                }
                break;
            case 'Recharge':
                let amount = Number(line.split(' - ')[2]);
                let oldMP = heroes[currHeroName]['MP'];
                heroes[currHeroName]['MP'] += amount;

                if (heroes[currHeroName]['MP'] > 200) {
                    let newManaAmount = 200 - oldMP;
                    heroes[currHeroName]['MP'] = 200;
                    console.log(`${currHeroName} recharged for ${newManaAmount} MP!`);
                } else {
                    console.log(`${currHeroName} recharged for ${amount} MP!`);
                }
                break;
            case 'Heal':
                let healAmount = Number(line.split(' - ')[2]);
                let oldHP = heroes[currHeroName]['HP'];
                heroes[currHeroName]['HP'] += healAmount;

                if (heroes[currHeroName]['HP'] > 100) {
                    let newAmount = 100 - oldHP;
                    heroes[currHeroName]['HP'] = 100;
                    console.log(`${currHeroName} healed for ${newAmount} HP!`);
                } else {
                    console.log(`${currHeroName} healed for ${healAmount} HP!`);
                }
                break;
        }
        line = data.shift();
    }
    for (let [k, v] of Object.entries(heroes)) {
        console.log(k);
        console.log(`  HP: ${v['HP']}`);
        console.log(`  MP: ${v['MP']}`);
    }
}
heroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);
console.log('______________________');
heroesOfCodeAndLogicVII([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);
console.log('______________________');
heroesOfCodeAndLogicVII([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);