function convertToJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}
convertToJSON('George', 'Jones', 'Brown');
console.log('____________');
convertToJSON('Peter', 'Smith', 'Blond');