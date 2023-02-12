function city(objects) {
    let keys = Object.keys(objects);
    let values = Object.values(objects);

    for (let key of keys) {
        console.log(`${key} -> ${objects[key]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
console.log('_____________');
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});