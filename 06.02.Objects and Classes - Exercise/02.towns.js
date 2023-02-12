function towns(input) {
    let currentTown = {};

    for (let city of input) {
        let cityElements = city.split(' | ');
        let townName = cityElements[0];
        let townLatitude = Number(cityElements[1]).toFixed(2);
        let townLongitude = Number(cityElements[2]).toFixed(2);

        currentTown.town = townName;
        currentTown.latitude = townLatitude;
        currentTown.longitude = townLongitude;
        console.log(currentTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
console.log('______________');
towns(['Plovdiv | 136.45 | 812.575']);