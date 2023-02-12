function orders(drink, quantity) {
    switch (drink) {
        case 'coffee': console.log((1.5 * quantity).toFixed(2)); break;
        case 'coke': console.log((1.4 * quantity).toFixed(2)); break;
        case 'water': console.log((1 * quantity).toFixed(2)); break;
        case 'snacks': console.log((2 * quantity).toFixed(2)); break;
    }
}
orders("water", 5);
orders("coffee", 2);