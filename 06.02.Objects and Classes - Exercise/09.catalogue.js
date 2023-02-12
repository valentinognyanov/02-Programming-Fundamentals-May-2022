function catalogue(input) {
    let catalogue = [];

    for (let i = 0; i < input.length; i++) {
        let [productName, productPrice] = input[i].split(' : ');
        let product = {
            name: productName,
            price: Number(productPrice)
        };
        catalogue.push(product);
    }
    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let currLetter = '';

    for (let product of catalogue) {
        if (product.name.charAt(0).toUpperCase() === currLetter) {
            console.log(`  ${product.name}: ${product.price}`);
        } else {
            currLetter = product.name.charAt(0).toUpperCase();
            console.log(currLetter);
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
console.log('__________');
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);