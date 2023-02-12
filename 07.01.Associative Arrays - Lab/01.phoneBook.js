function phoneBook(arr) {
    let phoneBookk = {};

    for (let el of arr) {
        let [name, number] = el.split(' ');
        phoneBookk[name] = number;
    }
    for (let key in phoneBookk) {
        console.log(`${key} -> ${phoneBookk[key]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
console.log('__________');
phoneBook([
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
]);