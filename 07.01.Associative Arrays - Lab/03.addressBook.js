function addressBook(arr) {
    let result = {};

    for (let line of arr) {
        let [name, adress] = line.split(':');
        result[name] = adress;
    }
    let sorted = Object.entries(result);
    sorted.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    for (let [key, value] of Object.entries(sorted)) {
        console.log(`${value[0]} -> ${value[1]}`);
    }
}
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
console.log('____________');
addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);