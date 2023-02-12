function wildZoo(data) {
    let animals = {};
    let areas = {};
    let fedAnimals = [];
    let line = data.shift();

    while(line !== 'EndDay') {
        let command = line.split(': ').shift();
        
        if(command === 'Add') {
            let [comm, tokens] = line.split(': ');
            let [animalName, neededFood, area] = tokens.split('-');

            if(animals.hasOwnProperty(animalName)) {
                animals[animalName] += Number(neededFood);
            } else {
                animals[animalName] = Number(neededFood);

                if(areas.hasOwnProperty(area)) {
                areas[area].push(animalName);
                } else {
                    areas[area] = [];
                    areas[area].push(animalName);
                }
            }
        } else if(command === 'Feed') {
            let [comm, tokens] = line.split(': ');
            let [animalName, food] = tokens.split('-');

            if(animals.hasOwnProperty(animalName)) {
                animals[animalName] -= Number(food);

                if(animals[animalName] <= 0) {
                    fedAnimals.push(animalName);
                    delete animals[animalName];
                    console.log(`${animalName} was successfully fed`);
                }
            } else {
                line = data.shift();
                continue;
            }
        }
        line = data.shift();
    }
    console.log('Animals:');

    for(let [k, v] of Object.entries(animals)) {
        console.log(` ${k} -> ${v}g`);
    }
    console.log('Areas with hungry animals:');
    
    for(let [k, v] of Object.entries(areas)) {
        console.log(`${k}: ${v.length}`);
    }
}
wildZoo([
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"
]);
console.log('____________');
wildZoo([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
]);
console.log('____________');
wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"
]);
