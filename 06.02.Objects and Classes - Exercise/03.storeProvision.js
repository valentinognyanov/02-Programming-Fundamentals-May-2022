function storeProvision(currentStocks, forDelivery) {
    let storeProducts = {};
    let currentStocksLength = currentStocks.length;
    let forDeliveryLength = forDelivery.length;

    for (let i = 0; i < currentStocksLength; i += 2) {
        let product = currentStocks[i];
        storeProducts[product] = Number(currentStocks[i + 1]);
    }
    for (let j = 0; j < forDeliveryLength; j += 2) {
        let product = forDelivery[j];

        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }
        storeProducts[product] += Number(forDelivery[j + 1]);
    }
    for (let key in storeProducts) {
        console.log(`${key} -> ${storeProducts[key]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
console.log('______________');
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);