function convertToObject(input) {
    let person = JSON.parse(input);
    let keys = Object.keys(person);

    for (let key of keys) {
        console.log(`${key}: ${person[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
console.log('____________');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');