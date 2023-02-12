function inventory(input) {
    let heroes = [];

    for (let heroInfo of input) {
        let [name, level, items] = heroInfo.split(' / ');
        let currHero = {
            name: name,
            level: +level,
            items: items
        };
        heroes.push(currHero);
    }
    let sortedByLvl = heroes.sort((a, b) => {
        return a.level - b.level;
    });

    for (let hero of sortedByLvl) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log('_________');
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);