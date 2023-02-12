function employees(input) {
    let list = {};

    for (let person of input) {
        list.name = person;
        list.pesonalNum = person.length;
        console.log(`Name: ${list.name} -- Personal Number: ${list.pesonalNum}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log('________________');
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);