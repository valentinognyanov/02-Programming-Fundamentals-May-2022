function pirates(data) {
    let crew = {};
    let line = data.shift();

    while (line !== 'Sail') {
        let [cities, population, gold] = line.split('||');

        if (crew.hasOwnProperty(cities)) {
            crew[cities]['Population'] += Number(population);
            crew[cities]['Gold'] += Number(gold);
        } else {
            crew[cities] = {};
            crew[cities]['Population'] = Number(population);
            crew[cities]['Gold'] = Number(gold);
        }
        line = data.shift();
    }
    line = data.shift();

    while (line !== 'End') {
        let command = line.split('=>').shift();

        switch (command) {
            case 'Plunder':
                let [command, town, people, gold] = line.split('=>');
                people = Number(people);
                gold = Number(gold);
                crew[town]['Population'] -= people;
                crew[town]['Gold'] -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (crew[town]['Population'] <= 0 || crew[town]['Gold'] <= 0) {
                    delete crew[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;
            case 'Prosper':
                let [commandd, prosperTown, prosperGold] = line.split('=>');
                prosperGold = Number(prosperGold);

                if (prosperGold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    crew[prosperTown]['Gold'] += prosperGold;
                    console.log(`${prosperGold} gold added to the city treasury. ${prosperTown} now has ${crew[prosperTown]['Gold']} gold.`);
                }
                break;
        }
        line = data.shift();
    }
    let count = Object.keys(crew);

    if (count.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${count.length} wealthy settlements to go to:`);

        for (let [k, v] of Object.entries(crew)) {
            console.log(`${k} -> Population: ${v['Population']} citizens, Gold: ${v['Gold']} kg`);
        }
    }
}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);
console.log('______________');
pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);