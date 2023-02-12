function plantDiscovery(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [currplant, rarity] = input.shift().split('<->');
        plants[currplant] = {};
        plants[currplant].rarity = Number(rarity);
        plants[currplant].rating = [];
        plants[currplant].count = 0;
    }
    let line = input.shift();

    while (line !== 'Exhibition') {

        if (line.includes('Rate')) {
            let [command, data] = line.split(': ');
            let [currPlant, rating] = data.split(' - ');

            if (plants.hasOwnProperty(currPlant)) {
                plants[currPlant].rating.push(Number(rating));
                plants[currPlant].count++;
            } else {
                console.log(`error`);
            }
        } else if (line.includes('Update')) {
            let [command, data] = line.split(': ');
            let [currPlant, newRarity] = data.split(' - ');

            if (plants.hasOwnProperty(currPlant)) {
                plants[currPlant].rarity = Number(newRarity);
            } else {
                console.log(`error`);
            }
        } else if (line.includes('Reset')) {
            let [command, currPlant] = line.split(': ');

            if (plants.hasOwnProperty(currPlant)) {
                plants[currPlant].rating = [];
                plants[currPlant].count = 0;
            } else {
                console.log('error');
            }
        }
        line = input.shift();
    }
    console.log('Plants for the exhibition:');

    for (let plant in plants) {
        let avrg = 0;

        if (plants[plant].rating.length !== 0) {
            let sum = plants[plant].rating.reduce((a, b) => a + b);
            avrg = sum / plants[plant].count;
        }
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avrg.toFixed(2)}`);
    }
}
plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);
console.log('______________');
plantDiscovery([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]);