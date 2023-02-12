function garage(input) {
    let garages = new Map();

    for (let line of input) {
        let tokens = line.split(' - ');
        let garageNumber = tokens[0];
        let carProperties = tokens[1];
        let availableCars = [];

        if (!garages.has(garageNumber)) {
            availableCars.push(carProperties);
            garages.set(garageNumber, availableCars);
        } else {
            availableCars = garages.get(garageNumber);
            availableCars.push(carProperties);
            garages.set(garageNumber, availableCars);
        }
    }
    let sorterGarages = [...garages.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    let result = '';

    for (let [k, v] of sorterGarages) {
        console.log(`Garage № ${k}`);

        for (let currentCarProp of v) {

            for (let element of currentCarProp) {
                currentCarProp = currentCarProp.replace(': ', ' - ');
            }
            console.log(`--- ${currentCarProp}`);
        }
    }
}
garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
console.log('____________');
garage([
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'
]);